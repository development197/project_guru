import axios from "axios";
import React from "react";
import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import Axios from "axios";

const SelfTask = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  //------------------------------Get request for self task data---------------------
  const [selfTask, setSelfTask] = useState([]);

  const getSelfTask = () => {
    Axios.get(`http://localhost:3001/task/self`).then((response) => {
      setSelfTask(response.data);
      console.log("Clicked on Self task");
    });
  };

  const deleteData = () => {
    alert("Are you sure you want to delete");
  };

  return (
    <>
      <div className="inner-container">
        <div className="self__task">
          <h2>Search Self Task</h2>
          <div className="search">
            <form onSubmit={handelSubmit}>
              <div className="title">
                <p>Search Self Task</p>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter Reference Number"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button className="search-btn st-bg-btn" onClick={getSelfTask}>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="selfTask-table">
          <p>Total on going query : 0</p>
          <div className="overflow-table">
            <table className="selfTask-table-data">
              <thead>
                <tr>
                  <th className="st-bg">#</th>
                  <th className="st-bg">User</th>
                  <th className="st-bg">Star/Square</th>
                  <th className="st-bg">Work Status</th>
                  <th className="st-bg">Client/User</th>
                  <th className="st-bg">3 Month Sale</th>
                  <th className="st-bg">Source</th>
                  <th className="st-bg">Target</th>
                  <th className="st-bg">Translator</th>
                  <th className="st-bg">Translator Mobile Number</th>
                  <th className="st-bg">Reference.No</th>
                  <th className="st-bg">Delivery Date Time</th>
                  <th className="st-bg">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {selfTask.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.serial_number}</td>
                      <td>{val.user_email}</td>
                      <td>{val.star_and_square}</td>
                      <td></td>
                      <td>{val.contact_person}</td>
                      <td>{val.limit_allot}</td>
                      <td>{val.source_language}</td>
                      <td>{}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i className="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon" onClick={deleteData}>
                            <i className="bi bi-trash"></i>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfTask;
