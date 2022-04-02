import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const Report = () => {
  const [inactive, setInactive] = useState(false);

  const [countrydropdown, setCountryDropdown] = useState([]);
  const getCountryDropDown = () => {
    Axios.get("http://localhost:3001/countryDropD").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  const [companydropdown, setCompanyDropdown] = useState([]);
  const getCompanyDropDown = () => {
    Axios.get("http://localhost:3001/ourCompanyDropD").then((response) => {
      setCompanyDropdown(response.data);
    });
  };

  const [languageList, setLanguageList] = useState([]);
  const getLanguageList = () => {
    Axios.get("http://localhost:3001/languageDropD").then((response) => {
      setLanguageList(response.data);
    });
  };

  const [workList, setWorkList] = useState([]);
  const getWorkList = () => {
    Axios.get("http://localhost:3001/workTypeDropD").then((response) => {
      setWorkList(response.data);
    });
  };

  const [userList, setUserList] = useState([]);
  const getUserList = () => {
    Axios.get("http://localhost:3001/userDropD").then((response) => {
      setUserList(response.data);
    });
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Report" />
      <div className="inner-container">
        <div className="report-form">
          <form>
            <div className="report-form-content report-grid">
              <div className="report-c">
                <div className="report-input">
                  <label>Client</label>
                  <input type="text" />
                </div>
                <div className="report-input">
                  <label>From</label>
                  <input type="date" />
                </div>
                <div className="report-input">
                  <label>To</label>
                  <input type="date" />
                </div>
              </div>

              <div className="report-c">
                <div className="report-input">
                  <label>Translator</label>
                  <input type="text" />
                </div>
                <div className="report-input">
                  <label>Source Language</label>
                  <select name="Select Category" onClick={getLanguageList}>
                    <option>Source Language</option>
                    {languageList.map((val, key) => {
                      return (
                        <>
                          <option value={val.language_name}>
                            {val.language_name}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="report-input">
                  <label>Target Language</label>
                  <select name="Select Category" onClick={getLanguageList}>
                    <option>Target Language</option>
                    {languageList.map((val, key) => {
                      return (
                        <>
                          <option value={val.language_name}>
                            {val.language_name}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="report-c">
                <div className="report-input">
                  <label>User Select</label>
                  <select name="Select Category" onClick={getUserList}>
                    <option>Select User</option>
                    {userList.map((val, key) => {
                      return (
                        <>
                          <option value={val.user_email}>
                            {val.user_email}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="report-input">
                  <label>Work Type</label>
                  <label>Work Type</label>
                  <select name="Select Category" onClick={getWorkList}>
                    <option>Select Work Type</option>
                    {workList.map((val, key) => {
                      return (
                        <option value={val.work_type}>{val.work_type}</option>
                      );
                    })}
                  </select>
                </div>

                <div className="report-input">
                  <label>Country</label>
                  <select name="Select Category" onClick={getCountryDropDown}>
                    <option>Select Country</option>
                    {countrydropdown.map((val, key) => {
                      return (
                        <option value={val.country_name}>
                          {val.country_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="report-c d">
                <div className="report-input">
                  <label>Report Type</label>
                  <select name="Select Category">
                    <option>Select Report Type</option>
                    <option value="WE">Work Enquiry</option>
                    <option value="WOEF">Work Offer</option>
                    <option value="WA">Work Acceptance</option>
                    <option value="WC">Work Check</option>
                    <option value="WO">Work Order</option>
                    <option value="QC">Quality Check</option>
                    <option value="CAN">Cancellation</option>
                    <option value="COR">Correction</option>
                    <option value="Sub">Submission</option>
                    <option value="ReSubCan">
                      Re-Submission / Cancellation
                    </option>
                    <option value="CHK">Checker</option>
                    <option value="RCHK">Re-Checker</option>
                    <option value="tact_entry_client">Clients</option>
                    <option value="tact_entry_translator">Translator</option>
                    <option value="ACT">Accounts</option>
                  </select>
                </div>

                <div className="report-input">
                  <label>Our Company</label>
                  <select name="Select Category" onClick={getCompanyDropDown}>
                    <option>Select Our Company</option>
                    {companydropdown.map((val, key) => {
                      return (
                        <option value={val.companies_name}>
                          {val.companies_name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="report-input">
                  <label>Option Type</label>
                  <select name="Select Category">
                    <option value="count">Count</option>
                    <option value="amount">Amount</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="report-btn">
              <div className="show-report-btn">
                <button className="show-r">Show Report</button>
              </div>
              <div className="view-btn">
                <div className="v-btn">
                  <button className="v-list">View List</button>
                  <button className="v-list">Export List</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
