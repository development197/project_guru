import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Status = () => {
  const [inactive, setInactive] = useState(false);
  const [statuslist, setStatuslist] = useState([]);
  const [status, setStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [edit_status_name, editStatusName] = useState("");

  const checkInputData = () => {
    Axios.post("http://localhost:3001/check/status", {
      status: status,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        addStatus();
      } else {
        window.alert("Status already exists");
        window.location.reload();
      }
    });
  };

  const addStatus = (e) => {
    Axios.post("http://localhost:3001/addstatus", {
      status: status,
    }).then((e) => {
      console.log("success");
      window.location.reload();
    });
  };

  const getStatus = () => {
    Axios.get("http://localhost:3001/status").then((response) => {
      setStatuslist(response.data);
    });
  };

  const deleteStatus = (status_id) => {
    if (window.confirm("Are you sure you want to delete this status?")) {
      Axios.delete(`http://localhost:3001/delete/status/${status_id}`);
      setTimeout(() => getStatus(), 200);
    }
  };

  const editStatus = (e) => {
    Axios.post("http://localhost:3001/edit/status", {
      edit_status_name: edit_status_name,
      status: status,
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
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getStatus}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Status" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2>Add Status</h2> : null}
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
                <label>Status Name</label>
                <input
                  type="text"
                  defaultValue={edit_status_name}
                  placeholder="Status"
                  onChange={(e) => setStatus(e.target.value)}
                />
                <button className="save-btn" onClick={checkInputData}>
                  Save
                </button>
                <button
                  className={`save-btn hide ${hide ? "show-hide" : ""}`}
                  onClick={editStatus}
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
            <h2>Search Status</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Status"
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
                <th className="st-bg">Status Name</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {statuslist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.status_name
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
                      <td>{val.status_name}</td>
                      <td className="action">
                        <ul>
                          <li
                            className="edit-icon"
                            onClick={() => {
                              editStatusName(val.status_name);
                            }}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteStatus(val.status_id)}
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

export default Status;
