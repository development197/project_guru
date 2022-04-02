import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Codes = () => {
  const [inactive, setInactive] = useState(false);
  const [codelist, setCodelist] = useState([]);
  const [codename, setCodeName] = useState("");
  const [codedefined, setCodeDefined] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const checkInputData = () => {
    if (codename === "" || codename === null) {
      window.alert("Please enter code name");
    } else {
      Axios.post("http://localhost:3001/check/codes", {
        codename: codename,
      }).then((response) => {
        console.log(response.data);
        if (response.data.length === 0) {
          addCode();
        } else {
          window.alert("Code already exists");
          window.location.reload();
        }
      });
    }
  };

  const addCode = (e) => {
    Axios.post("http://localhost:3001/addcodes", {
      codename: codename,
      codedefined: codedefined,
    }).then((e) => {
      window.alert("Code Successfully Added");
      window.location.reload();
    });
  };

  const getCode = () => {
    Axios.get("http://localhost:3001/codes").then((response) => {
      setCodelist(response.data);
    });
  };

  const deleteCode = (code_id) => {
    if (window.confirm("Are you sure you want to delete this code?")) {
      Axios.delete(`http://localhost:3001/delete/code/${code_id}`);
      setTimeout(() => getCode(), 200);
    }
  };

  const [updateId, setUpdateId] = useState("");

  const updateCode = (code_id) => {
    console.log("clicked");
    Axios.get(`http://localhost:3001/update/code/${code_id}`).then(
      (response) => {
        console.log(response.data);
        setUpdateId(response.data[0].code_id);
        setCodeName(response.data[0].code_name);
        setCodeDefined(response.data[0].code_defined);
      }
    );
  };

  const editCodes = (updateId) => {
    Axios.post(`http://localhost:3001/edit/codes/${updateId}`, {
      codename: codename,
      codedefined: codedefined,
    }).then((e) => {
      window.alert("Code Successfully Updated");
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
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getCode}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Codes" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2>Add Codes</h2> : null}

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
            <div className="input-field">
              <div className="select">
                <div className="alias f-b">
                  <label>Codes Name</label>
                  <input
                    type="text"
                    id="code_value"
                    placeholder="Codes"
                    defaultValue={codename}
                    onChange={(e) => setCodeName(e.target.value)}
                  />
                </div>
                <div className="time-zone f-b">
                  <label>Code Defined as</label>
                  <input
                    type="text"
                    id="code_value"
                    placeholder="Defined as"
                    defaultValue={codedefined}
                    onChange={(e) => setCodeDefined(e.target.value)}
                  />
                </div>
                <div className="btn">
                  <button className="save-btn" onClick={checkInputData}>
                    Save
                  </button>
                  <button
                    className={`save-btn hide ${hide ? "show-hide" : ""}`}
                    type="submit"
                    onClick={() => editCodes(updateId)}
                    // onClick={editCodes}
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : null}
        {show ? (
          <div className="once-search">
            <h2>Search Codes</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Codes"
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
                <th className="st-bg">Code Name</th>
                <th className="st-bg">Code Defined As</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {codelist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.code_name
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                    // val.code_defined
                    //   .toLowerCase()
                    //   .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <tr>
                      <td>{val.serial_number}</td>
                      <td>{val.code_name}</td>
                      <td>{val.code_defined}</td>
                      <td className="action">
                        <ul>
                          <li
                            className="edit-icon"
                            onClick={() => {
                              updateCode(val.code_id);
                            }}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteCode(val.code_id)}
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

export default Codes;
