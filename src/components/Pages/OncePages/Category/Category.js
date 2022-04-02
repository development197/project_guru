import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Category = () => {
  const [inactive, setInactive] = useState(false);
  const [categorylist, setCategorylist] = useState([]);
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [edit_category_name, editCategoryName] = useState("");

  const checkInputData = () => {
    Axios.post("http://localhost:3001/check/category", {
      category: category,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        addCategory();
      } else {
        window.alert("Category already exists");
        window.location.reload();
      }
    });
  };

  const addCategory = (e) => {
    Axios.post("http://localhost:3001/addcategory", {
      category: category,
    }).then((e) => {
      console.log("success");
      window.location.reload();
    });
  };

  const getCategory = () => {
    Axios.get("http://localhost:3001/category").then((response) => {
      setCategorylist(response.data);
    });
  };

  const deleteCategory = (category_id) => {
    if (window.confirm("Are you sure")) {
      Axios.delete(`http://localhost:3001/delete/category/${category_id}`);
      setTimeout(() => getCategory(), 200);
    }
  };

  const editCategory = (e) => {
    Axios.post("http://localhost:3001/edit/category", {
      edit_category_name: edit_category_name,
      category: category,
    }).then((e) => {
      console.log("success");
      window.location.reload();
    });
  };

  const [hide, setHide] = useState(false);
  const showbtn = () => {
    console.log("click");
    setHide(true);
  };

  const [show, setShow] = useState(true);
  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getCategory}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Category" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2>Add Category</h2> : null}
          {show ? (
            <button className="show-all-btn" onClick={() => setShow(false)}>
              {" "}
              <span>
                <i className="bi bi-calendar3"></i>
              </span>{" "}
              Show All
            </button>
          ) : (
            <button className="show-all-btn" onClick={() => setShow(true)}>
              Back
            </button>
          )}
        </div>
        {show ? (
          <form>
            <div className="measure">
              <div className="measure-inp">
                <label>Category Name</label>
                <input
                  type="text"
                  placeholder="Category"
                  defaultValue={edit_category_name}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <button className="save-btn" onClick={checkInputData}>
                  Save
                </button>
                <button
                  className={`save-btn hide ${hide ? "show-hide" : ""}`}
                  onClick={editCategory}
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        ) : null}

        {show ? (
          <div className="once-search">
            <h2>Search Category</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Category"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button className="sr-btn">Search</button>
              </div>
            </form>
          </div>
        ) : null}

        <div className="once-table">
          <table>
            <thead>
              <tr>
                <th className="st-bg">S.No</th>
                <th className="st-bg">Category Name</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {categorylist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.category_name
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <tr>
                      <td>{val.serial_number}</td>
                      <td>{val.category_name}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i
                              className="bi bi-pencil-square"
                              onClick={() => {
                                editCategoryName(val.category_name);
                              }}
                            ></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteCategory(val.category_id)}
                            ></i>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
