import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../../OncePages/OnceHeader";
import { Link } from "react-router-dom";
import Axios from "axios";

const SearchTact = () => {
  const [inactive, setInactive] = useState(false);

  const [statusDropDown, setStatusDropDown] = useState([]);
  const getStatus = () => {
    Axios.get("http://localhost:3001/statusDropD").then((response) => {
      setStatusDropDown(response.data);
    });
  };

  const [categoryDropDown, setCategoryDropDown] = useState([]);
  const getCategory = () => {
    Axios.get("http://localhost:3001/categoryDropD").then((response) => {
      setCategoryDropDown(response.data);
    });
  };

  const [countrydropdown, setCountryDropdown] = useState([]);
  const getCountry = () => {
    Axios.get("http://localhost:3001/countryTact").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  const [ourcompanyList, setOurCompanyList] = useState([]);
  const getOurCompanyList = () => {
    Axios.get("http://localhost:3001/ourCompanyDropD").then((response) => {
      setOurCompanyList(response.data);
    });
  };

  const [codesList, setCodesList] = useState([]);
  const getCodesList = () => {
    Axios.get("http://localhost:3001/codesDropD").then((response) => {
      setCodesList(response.data);
    });
  };

  const [languageList, setLanguageList] = useState([]);
  const getLanguageList = () => {
    Axios.get("http://localhost:3001/languageDropD").then((response) => {
      setLanguageList(response.data);
    });
  };

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [ourCompany, setOurCompany] = useState("");
  const [codes, setCodes] = useState("");
  const [email, setEmail] = useState("");
  const [ratingFrom, setRatingFrom] = useState("");
  const [ratingTo, setRatingTo] = useState("");
  const [waspTact, setWaspTact] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  //const [keywords, setKeywords] = useState("");

  const [searchData, setSearchData] = useState([]);

  const getSearchTact = () => {
    console.log("clicked");
    Axios.post("http://localhost:3001/searchTact", {
      category: category,
      status: status,
      country: country,
      ourCompany: ourCompany,
      codes: codes,
      email: email,
      ratingFrom: ratingFrom,
      ratingTo: ratingTo,
      waspTact: waspTact,
      sourceLang: sourceLang,
      targetLang: targetLang,
      //keywords: keywords,
    }).then((response) => {
      console.log("getting response");
      console.log(response.data);
      window.alert("data is in console");
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
      <OnceHeader heading="Search Tact" />
      <div className="inner-container">
        <div className="add-remainder-btn add-tact">
          <Link to="/AddTact" className="remainder-btn">
            <span className="tact-i-log">
              <i className="bi bi-folder-symlink"></i>
            </span>
            Add Tact
          </Link>
        </div>
        <div className="search-form">
          <form>
            <div className="search-input">
              <div className="search-inp">
                <label>Category</label>
                <select
                  className="search-select"
                  onClick={getCategory}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {/* <option value={updateCategoryId}>{updateCategory}</option> */}
                  <option>Select Category</option>
                  {categoryDropDown.map((val, key) => {
                    return (
                      <option value={val.category_id}>
                        {val.category_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Status</label>
                <select
                  className="search-select"
                  onClick={getStatus}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {/* <option value={updateStatusId}>{updateStatus}</option> */}
                  <option>Select Status</option>
                  {statusDropDown.map((val, key) => {
                    return (
                      <option value={val.status_id}>{val.status_name}</option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Country</label>
                <select
                  className="search-select"
                  onClick={getCountry}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {/* <option value={updateCountryId}>{updateCountry}</option> */}
                  <option>Select Country</option>
                  {countrydropdown.map((val, key) => {
                    return (
                      <option value={val.country_code}>
                        {val.country_name + "(" + val.country_timezone + ")"}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Our Company</label>
                <select
                  onClick={getOurCompanyList}
                  onChange={(e) => setOurCompany(e.target.value)}
                >
                  {/* <option value={updateOurCompanyId}>{updateOurCompany}</option> */}
                  <option>Select Company</option>
                  {ourcompanyList.map((val, key) => {
                    return (
                      <option value={val.companies_id}>
                        {val.companies_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Select Codes</label>
                <select
                  onClick={getCodesList}
                  onChange={(e) => setCodes(e.target.value)}
                >
                  {/* <option value={updateOurCompanyId}>{updateOurCompany}</option> */}
                  <option>Select Codes</option>
                  {codesList.map((val, key) => {
                    return <option value={val.code_id}>{val.code_name}</option>;
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Email Id</label>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp approve-inp">
                <label>Rating From</label>
                <input
                  type="text"
                  placeholder="From"
                  className="surname-inp"
                  onChange={(e) => setRatingFrom(e.target.value)}
                />
                <label>To</label>
                <input
                  type="text"
                  placeholder="To"
                  className="surname-inp"
                  onChange={(e) => setRatingTo(e.target.value)}
                />
              </div>

              <div className="search-inp approve-inp">
                <input
                  type="checkbox"
                  className="search-check"
                  onChange={(e) => setWaspTact(e.target.value)}
                />
                Wasp
                <input
                  type="checkbox"
                  className="search-check"
                  onChange={(e) => setWaspTact(e.target.value)}
                />
                Tact
              </div>

              <div className="search-inp">
                <label>Source Language</label>
                <select
                  onClick={getLanguageList}
                  onChange={(e) => setSourceLang(e.target.value)}
                >
                  <option>Source Language</option>

                  {languageList.map((val, key) => {
                    return (
                      <option value={val.language_id}>
                        {val.language_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Target Language</label>
                <select
                  onClick={getLanguageList}
                  onChange={(e) => setTargetLang(e.target.value)}
                >
                  <option>Source Language</option>

                  {languageList.map((val, key) => {
                    return (
                      <option value={val.language_id}>
                        {val.language_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Other Keywords</label>
                <input
                  type="text"
                  placeholder="Other Keywords"
                  // onChange={(e) => setKeywords(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/* <label>Other Keywords</label>
                                 <input type="text" placeholder="Other Keywords" /> */}
              </div>
            </div>

            <div className="search-button">
              <button className="s-btn" onClick={getSearchTact}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchTact;
