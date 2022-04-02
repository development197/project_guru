import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

import { Link } from "react-router-dom";

const StaffMailers = () => {
  const [inactive, setInactive] = useState(false);
  const [mailerlist, setMailerslist] = useState([]);

  const getMailer = () => {
    Axios.get("http://localhost:3001/staffmailer").then((response) => {
      setMailerslist(response.data);
    });
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getMailer}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />

      <OnceHeader heading="Directory & Staff Mailer" />
      <div className="staff-mailer-content">
        <div className="inner-container">
          <div className="staff-mailer-btn">
            <Link to="/EmailSend" className="staff-btn">
              Send Email
            </Link>
            <button className="staff-btn">Send Alert</button>
          </div>
          <div className="staff-mailer-table">
            <table>
              <thead>
                <tr>
                  <th className="st-bg">
                    <input type="checkbox" className="staff-mailer-check" />
                  </th>
                  <th className="st-bg">Sr. No.</th>
                  <th className="st-bg">Email ID</th>
                  <th className="st-bg">Skpe ID</th>
                  <th className="st-bg">Mobile No.</th>
                  <th className="st-bg">Position</th>
                </tr>
              </thead>
              <tbody>
                {mailerlist.map((val, key) => {
                  return (
                    <tr>
                      <td>
                        <input type="checkbox" className="staff-mailer-check" />
                      </td>
                      <td>{val.serial_number}</td>
                      <td>{val.user_email}</td>
                      <td>{val.subuser_skype}</td>
                      <td>{val.subuser_mobile}</td>
                      <td>{val.subuser_position}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffMailers;
