import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Export = () => {
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState([]);
  const [country, setCountry] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [language, setLanguage] = useState([]);

  const getCategory = () => {
    Axios.get("http://localhost:3001/categoryDropD").then((response) => {
      setCategory(response.data);
    });
  };
  const getStatus = () => {
    Axios.get("http://localhost:3001/statusDropD").then((response) => {
      setStatus(response.data);
    });
  };

  const getCountry = () => {
    Axios.get("http://localhost:3001/countryDropD").then((response) => {
      setCountry(response.data);
    });
  };

  const getCompanies = () => {
    Axios.get("http://localhost:3001/ourCompanyDropD").then((response) => {
      setCompanies(response.data);
    });
  };

  const getLanguage = () => {
    Axios.get("http://localhost:3001/languageDropD").then((response) => {
      setLanguage(response.data);
    });
  };

  const [codesList, setCodesList] = useState([]);
  const getCodesList = () => {
    Axios.get("http://localhost:3001/codesDropD").then((response) => {
      setCodesList(response.data);
    });
  };

  //---------------------------------Post Request----------------------------------
  const [category_selected, categorySelected] = useState("");
  const [status_selected, statusSelected] = useState("");
  const [country_selected, countrySelected] = useState("");
  const [company_selected, companySelected] = useState("");
  const [waspTact, waspTactSelected] = useState("");
  const [gst_selected, gstSelected] = useState("");
  const [apd_selected, apdSelected] = useState("");
  const [data, getData] = useState([]);

  const getFilterExcel = (
    category_selected,
    status_selected,
    country_selected,
    company_selected,
    waspTact,
    gst_selected,
    apd_selected
  ) => {
    Axios.get(
      `http://localhost:3001/getexcel/${category_selected}/${status_selected}/${country_selected}/${company_selected}/${gst_selected}/${apd_selected}/${waspTact}`
    ).then((response) => {
      getData(response.data);
    });
  };

  return (
    <div className="once-content currency">
      <div className="once-head">
        <h2>Export</h2>
        <Link to="/ImportedRecords" className="show-all-btn">
          {" "}
          <span>
            {" "}
            <i className="bi bi-arrow-left"></i>{" "}
          </span>{" "}
          Back to listing
        </Link>
      </div>
      <div className="export-form">
        <form className="export-grid">
          <div className="export-f">
            <div className="export-inp">
              <label>Category</label>
              <select
                className="export-select"
                name="Select Category"
                placeholder="Select Category"
                onChange={(e) => categorySelected(e.target.value)}
                onClick={getCategory}
              >
                <option>Select Category</option>
                {category.map((val, key) => {
                  return (
                    <option value={val.category_name}>
                      {val.category_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="export-inp">
              <label>Status</label>
              <select
                className="export-select"
                name="Select Category"
                placeholder="Select Category"
                onChange={(e) => statusSelected(e.target.value)}
                onClick={getStatus}
              >
                <option>Select Status</option>
                {status.map((val, key) => {
                  return (
                    <option value={val.status_name}>{val.status_name}</option>
                  );
                })}
              </select>
            </div>

            <div className="export-inp">
              <label>Country</label>
              <select
                className="export-select"
                name="Select Category"
                onChange={(e) => countrySelected(e.target.value)}
                onClick={getCountry}
              >
                <option>Select Country</option>
                {country.map((val, key) => {
                  return (
                    <option value={val.country_name}>{val.country_name}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="export-f">
            <div className="export-inp">
              <label>Our Company</label>
              <select
                className="export-select"
                name="Select Category"
                onChange={(e) => companySelected(e.target.value)}
                onClick={getCompanies}
              >
                <option>Select Company</option>
                {companies.map((val, key) => {
                  return (
                    <option value={val.companies_name}>
                      {val.companies_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="export-inp">
              <label>Codes</label>
              <select
                onClick={getCodesList}
                // onChange={(e) => setOurCompany(e.target.value)}
              >
                {/* <option value={updateOurCompanyId}>{updateOurCompany}</option> */}
                <option>Select Codes</option>
                {codesList.map((val, key) => {
                  return <option value={val.code_id}>{val.code_name}</option>;
                })}
              </select>
            </div>

            <div className="export-inp">
              <label>Rating From</label>
              <input
                type="text"
                className="rating-inp"
                placeholder="Rating"
              />{" "}
              <label>To</label>
              <input type="text" className="rating-inp" placeholder="Rating" />
            </div>
          </div>

          <div className="export-f">
            <div className="export-inp">
              <label>Source Language</label>
              <select
                className="export-select"
                name="Select Category"
                onClick={getLanguage}
              >
                <option>Source Language</option>
                {language.map((val, key) => {
                  return (
                    <option value={val.language_name}>
                      {val.language_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="export-inp">
              <label>Target Language</label>
              <select
                className="export-select"
                name="Select Category"
                onClick={getLanguage}
              >
                <option>Target Language</option>
                {language.map((val, key) => {
                  return (
                    <option value={val.language_name}>
                      {val.language_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="export-inp">
              <label>Source</label>
              <input type="text" className="rating-inp" placeholder="Source" />
            </div>
          </div>

          <div className="export-check">
            <ul>
              <li>
                <input
                  type="checkbox"
                  className="e-check"
                  value="w"
                  onChange={(e) => waspTactSelected(e.target.value)}
                />
                Wasp
                <input
                  type="checkbox"
                  className="e-check"
                  value="T"
                  onChange={(e) => waspTactSelected(e.target.value)}
                />
                Tact
              </li>

              <li>
                <input
                  type="checkbox"
                  className="e-check"
                  value="Y"
                  onChange={(e) => gstSelected(e.target.value)}
                />
                Yes
                <input
                  type="checkbox"
                  className="e-check"
                  value="N"
                  onChange={(e) => gstSelected(e.target.value)}
                />
                No
              </li>

              <li>
                <input
                  type="checkbox"
                  className="e-check"
                  value="A"
                  onChange={(e) => apdSelected(e.target.value)}
                />
                Approved
                <input
                  type="checkbox"
                  className="e-check"
                  value="D"
                  onChange={(e) => apdSelected(e.target.value)}
                />
                Disapproved
                <input type="checkbox" className="e-check" />
                Pending
              </li>
            </ul>
          </div>

          <div className="export-btn">
            <div className="export">
              <button
                className="upload-btn u-btn"
                onClick={getFilterExcel(
                  category_selected,
                  status_selected,
                  company_selected,
                  country_selected,
                  category_selected,
                  waspTact,
                  gst_selected,
                  apd_selected
                )}
              >
                Export
              </button>
              <button className="refresh-btn u-btn">
                <span>
                  <i className="bi bi-arrow-clockwise"></i>
                </span>
                Refresh
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Export;

// <div className="export-f">
// <label>Category</label>
{
  /* <select name="Select Category" placeholder='Select Category'>
       <option value="volvo">Select Category</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
</select> */
}
// <label>Status</label>
// <select name="Select Category">
//        <option value="volvo">Active</option>
//        <option value="saab">Saab</option>
//        <option value="mercedes">Mercedes</option>
//        <option value="audi">Audi</option>
// </select>
// <label>Country</label>
// <select name="Select Category">
//        <option value="volvo">Select Country</option>
//        <option value="saab">Saab</option>
//        <option value="mercedes">Mercedes</option>
//        <option value="audi">Audi</option>
// </select>
// </div>
// <div className="export-f">
//  <label>Our Company</label>
//        <select name="Select" placeholder='Select Company'>
//              <option value="volvo">Select Country</option>
//              <option value="saab">Saab</option>
//              <option value="mercedes">Mercedes</option>
//              <option value="audi">Audi</option>
//        </select>
//  <label>Codes</label>
//        <select name="Select" placeholder='Select Company'>
//              <option value="volvo">Select Country</option>
//              <option value="saab">Saab</option>
//              <option value="mercedes">Mercedes</option>
//              <option value="audi">Audi</option>
//        </select>

// </div>
