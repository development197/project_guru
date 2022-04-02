import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const ImportedRecord = () => {
  const [inactive, setInactive] = useState(false);
  const [recordList, setRecordList] = useState([]);

  const getRecordList = () => {
    Axios.get("http://localhost:3001/getRecordList").then((response) => {
      setRecordList(response.data);
    });
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    // window.alert("This feature is not available yet");
    console.log("click");
  };

  if (modal) {
    document.body.classList.add("active-modal-client");
  } else {
    document.body.classList.remove("active-modal-client");
  }

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getRecordList}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Imported Records" />
      <div className="inner-container tact">
        <div className="add-remainder-btn">
          <Link to="/ImportExport" className="remainder-btn">
            <span className="tact-i-log">
              <i className="bi bi-folder-symlink"></i>
            </span>
            Import & Export Tact
          </Link>
        </div>
        <div className="remainder__tabel">
          <table>
            <thead>
              <tr>
                <th className="st-bg">S. No.</th>
                <th className="st-bg">Uploaded By</th>
                <th className="st-bg">File</th>
                <th className="st-bg">Total Records</th>
                <th className="st-bg">Uploaded At</th>
                <th className="st-bg">Mapped For</th>
                <th className="st-bg">Source</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>
            <tbody>
              {recordList.map((val, key) => {
                return (
                  <tr>
                    <td>{val.serial_number}</td>
                    <td>{val.user_email}</td>
                    <td>{val.file}</td>
                    <td>{val.total_inserted_record}</td>
                    <td>{val.added_date}</td>
                    <td>{val.category_name}</td>
                    <td>{val.source}</td>
                    <td>
                      <button onClick={toggleModal} className="add-Client-btn">
                        <span>
                          <i className="bi bi-pencil-square"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {modal && (
        <div className="modal_email">
          <h5 id="updated_tact">Updated Tact Excel list</h5>
          <hr />
          <form>
            <div className="category_input">
              <h6 className="category_heading">Category</h6>
              <select id="select_category" multiple="multiple">
                <option>Clients</option>
                <option>Content Writing</option>
                <option>Content Writing Companies</option>
                <option>Direct Clients</option>
                <option>DTP experts</option>
                <option>Educational Institutes</option>
                <option>Embassy</option>
                <option>Government Bodies</option>
                <option>Interpreters</option>
                <option>Interpreting Companies</option>
                <option>Legal Clients</option>
                <option>Russian Direct Client</option>
                <option>Subtitle Experts</option>
                <option>Subtitling Companies</option>
                <option>Transcription Experts</option>
                <option>Translators </option>
                <option>Travel Companies</option>
                <option>Voice Over Artist</option>
                <option>Voice Over Company</option>
                <option>Web development Companies</option>
                <option>Wellness Centers</option>
              </select>
            </div>
            <p className="use_ctrl">(Use ctrl key to select multiple)</p>
            <br />
            <div className="status_input">
              <h6 className="status_heading">Status</h6>
              <select id="select_status">
                <option></option>
              </select>
            </div>
            <hr />
            <button className="update-btn"> Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ImportedRecord;
