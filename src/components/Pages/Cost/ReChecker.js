import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import Axios from "axios";

const ReChecker = () => {
  const [inactive, setInactive] = useState(false);
  const [recheckerList, setRecheckerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getList = () => {
    Axios.get("http://localhost:3001/re/checker/list").then((response) => {
      setRecheckerList(response.data);
    });
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getList}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />

      <div className="line"> </div>
      <div className="inner-container">
        <div className="self__task">
          <h2>Re-Checker</h2>
          <div className="search">
            <form>
              <div className="title">
                <p>Search Search</p>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter Reference Number"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button className="search-btn st-bg-btn">Search</button>
              </div>
            </form>
          </div>
        </div>

        <div className="selfTask-table">
          <div className="overflow-table">
            <table className="selfTask-table-data">
              <thead>
                <tr>
                  <th className="st-bg">#</th>
                  <th className="st-bg">Star/Square</th>
                  <th className="st-bg">Refrence No.</th>
                  <th className="st-bg">Submission Date & Time</th>
                  <th className="st-bg">Contact</th>
                  <th className="st-bg">Company</th>
                  <th className="st-bg">Our Company</th>
                  <th className="st-bg">Work Type</th>
                  <th className="st-bg">Source</th>
                  <th className="st-bg">Target</th>
                  <th className="st-bg">Translator</th>
                  <th className="st-bg">Action</th>
                </tr>
              </thead>
              <tbody>
                {recheckerList
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.inquiry_generated_id
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
                        <td>{val.star_and_square}</td>
                        <td>{val.inquiry_generated_id}</td>
                        <td>
                          {val.offer_delivery_commited_date ===
                            "0000-00-00 00:00:00" ||
                          val.offer_delivery_commited_date === null
                            ? "--"
                            : val.offer_delivery_commited_date}
                        </td>
                        <td>{val.contact_person}</td>
                        <td>{val.company_name}</td>
                        <td>{val.companies_name}</td>
                        <td>{val.work_type}</td>
                        <td>{val.s_lang}</td>
                        <td>{val.t_lang}</td>
                        <td></td>
                        <td>
                          <i
                            className="bi bi-pencil-square"
                            //   onClick={() => {
                            //     editCategoryName(val.category_name);
                            //   }}
                          ></i>
                        </td>
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

export default ReChecker;
