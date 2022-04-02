import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const OurCompany = () => {
  const [inactive, setInactive] = useState(false);
  const [ourcompanylist, setOurcompanylist] = useState([]);
  const [ourcompany, setOurcompany] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const checkInputData = () => {
    Axios.post("http://localhost:3001/check/our/company", {
      ourcompany: ourcompany,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        addOurCompany();
      } else {
        window.alert("Company already exists");
        window.location.reload();
      }
    });
  };

  const addOurCompany = (e) => {
    Axios.post("http://localhost:3001/addCompany", {
      ourcompany: ourcompany,
    }).then((e) => {
      console.log("success");
      window.location.reload();
    });
  };

  const getOurCompany = () => {
    Axios.get("http://localhost:3001/ourcompany").then((response) => {
      setOurcompanylist(response.data);
    });
  };

  const deleteCompany = (companies_id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      Axios.delete(`http://localhost:3001/delete/company/${companies_id}`);
      setTimeout(() => getOurCompany(), 200);
    }
  };

  const [edit_ourCompany_name, editOurCompanyName] = useState("");
  const editOurCompany = (e) => {
    Axios.post("http://localhost:3001/edit/ourcompany", {
      edit_ourCompany_name: edit_ourCompany_name,
      ourcompany: ourcompany,
    }).then((e) => {
      console.log("success");
      window.location.reload();
      getOurCompany();
    });
  };

  const [hide, setHide] = useState(false);
  const showbtn = () => {
    console.log("click");
    setHide(true);
  };

  const [show, setShow] = useState(true);
  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getOurCompany}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Our Company" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2>Add Company</h2> : null}
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
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Company"
                  defaultValue={edit_ourCompany_name}
                  onChange={(e) => setOurcompany(e.target.value)}
                />
                <button className="save-btn" onClick={checkInputData}>
                  Save
                </button>
                <button
                  className={`save-btn hide ${hide ? "show-hide" : ""}`}
                  onClick={editOurCompany}
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
            <h2>Search Company</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Company"
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
                <th className="st-bg">Company Name</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {ourcompanylist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.companies_name
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
                      <td>{val.companies_name}</td>
                      <td className="action">
                        <ul>
                          <li
                            className="edit-icon"
                            onClick={() => {
                              editOurCompanyName(val.companies_name);
                            }}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteCompany(val.companies_id)}
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

export default OurCompany;
