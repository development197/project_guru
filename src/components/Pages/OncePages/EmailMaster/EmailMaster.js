import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const EmailMaster = () => {
  const [inactive, setInactive] = useState(false);
  const [emailMasterlist, setEmailMasterlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getEmailMaster = () => {
    Axios.get("http://localhost:3001/emailmaster").then((response) => {
      setEmailMasterlist(response.data);
    });
  };

  const deleteEmail = (outgoing_email_id) => {
    if (window.confirm("Are you sure you want to delete this email")) {
      Axios.delete(
        `http://localhost:3001/delete/emailmaster/${outgoing_email_id}`
      );
      setTimeout(() => getEmailMaster(), 200);
    }
  };

  const [editId, setEditId] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPortNo, setEditPortNo] = useState("");
  const [editSmtp, setEditSmtp] = useState("");
  const [editPassword, setPassword] = useState("");
  const updateEmailMaster = (outgoing_email_id) => {
    Axios.post(
      `http://localhost:3001/update/email/master/${outgoing_email_id}`
    ).then((response) => {
      console.log(response.data);
      setEditId(response.data[0].outgoing_email_id);
      setEditEmail(response.data[0].outgoing_master_email_id);
      setEditPortNo(response.data[0].outgoing_port_no);
      setEditSmtp(response.data[0].outgoing_smtp);
      setPassword(response.data[0].outgoing_password);
      console.log(editEmail, editPortNo, editSmtp, editPassword);
    });
  };

  const editEmailMaster = (editId) => {
    Axios.post(`http://localhost:3001/edit/email/master/${editId}`, {
      editEmail: editEmail,
      editPortNo: editPortNo,
      editSmtp: editSmtp,
      editPassword: editPassword,
    }).then((response) => {
      window.alert("Email Master Updated");
      window.location.reload();
    });
  };

  const [show, setShow] = useState(true);
  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getEmailMaster}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Outgoing Email Master" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2>Search Master Email</h2> : null}
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
          <div className="once-search">
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Master Email"
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
                <th className="st-bg">Master Email ID</th>
                <th className="st-bg">SMTP</th>
                <th className="st-bg">Port No.</th>
                <th className="st-bg">Default</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {emailMasterlist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.outgoing_master_email_id
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
                      <td>{val.outgoing_master_email_id}</td>
                      <td>{val.outgoing_smtp}</td>
                      <td>{val.outgoing_port_no}</td>
                      <td></td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i
                              className="bi bi-pencil-square"
                              onClick={() => {
                                updateEmailMaster(val.outgoing_email_id);
                              }}
                            ></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteEmail(val.outgoing_email_id)}
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
        <div className="once-search">
          <p className="email-master_heading">Add Outgoing Email Master</p>
          <form>
            <div className="email-master_heading_2">
              <h6 className="email-master_heading_inside">Master Email id</h6>
              <h6 className="email-master_heading_inside_2">Port no.</h6>
              <h6 className="email-master_heading_inside_3"> SMTP</h6>
              <h6 className="email-master_heading_inside_4">Password</h6>
            </div>
            <div className="input_text">
              <input
                type="text"
                className="input_text_details"
                placeholder="Email id"
                defaultValue={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <input
                type="text"
                className="input_text_details"
                placeholder="Port No."
                defaultValue={editPortNo}
                onChange={(e) => setEditPortNo(e.target.value)}
              />
              <input
                type="text"
                className="input_text_details"
                placeholder="SMT"
                defaultValue={editSmtp}
                onChange={(e) => setEditSmtp(e.target.value)}
              />
              <input
                type="password"
                className="input_text_details"
                placeholder="Password"
                defaultValue={editPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="save-btn"
              onClick={() => editEmailMaster(editId)}
            >
              {" "}
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailMaster;
