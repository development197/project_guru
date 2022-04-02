import React from "react";
import Select from "react-select";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

// import Pagination from "react-pagination-library";
// import "react-pagination-library/build/css/index.css"; //for css

// import ReactPaginate from 'react-paginate';

const pageSize = 25;

const Country = () => {
  const [inactive, setInactive] = useState(false);
  const [countrylist, setCountryList] = useState([]);
  const [timezone, setTimeZone] = useState("");
  const [alias, setAlias] = useState("");
  // const [country, setCountry] = useState("");
  const [countrydropdown, setCountryDropdown] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [edit_id, setEditId] = useState("");
  const [edit_name, setEditName] = useState("");

  const checkInputData = () => {
    if (countryCode === "" || countryCode === null) {
      window.alert("Please select country");
    }

    Axios.post("http://localhost:3001/check/country", {
      countryCode: countryCode,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        addCountry();
      } else {
        window.alert("Country already exists");
        window.location.reload();
      }
    });
  };

  const addCountry = (e) => {
    Axios.post("http://localhost:3001/addCountry", {
      timezone: timezone,
      alias: alias,
      countryCode: countryCode,
    }).then((e) => {
      console.log("success");
      window.location.reload();
    });
  };

  const getCountryList = () => {
    Axios.get("http://localhost:3001/countryListTbl", {
      headers: {
        token: sessionStorage.getItem("accessToken"),
      },
    }).then((response) => {
      setCountryList(response.data);
    });
  };

  const getCountryDropDown = () => {
    Axios.get("http://localhost:3001/countryDropD").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  const deleteCountry = (country_timezone_id) => {
    if (window.confirm("Are you sure this country?")) {
      Axios.delete(
        `http://localhost:3001/delete/country/${country_timezone_id}`
      );
      setTimeout(() => getCountryList(), 200);
    }
  };

  const updateCountry = (country_timezone_id) => {
    Axios.post(
      `http://localhost:3001/update/country/${country_timezone_id}`
    ).then((response) => {
      console.log(response.data);
      setTimeZone(response.data[0].country_timezone);
      setAlias(response.data[0].country_timezone_alias);
      setEditName(response.data[0].country_name);
      setEditId(response.data[0].country_timezone_id);
      setCountryCode(response.data[0].country_timezone_name);
    });
  };

  const editCountry = (edit_id) => {
    console.log(timezone, alias, countryCode);
    Axios.put(`http://localhost:3001/edit/country/${edit_id}`, {
      timezone: timezone,
      alias: alias,
      countryCode: countryCode,
    }).then((e) => {
      window.alert("Country Successfully Updated");
      window.location.reload();
    });
  };

  const [hide, setHide] = useState(false);
  const showbtn = () => {
    console.log("click");
    setHide(true);
  };

  const [show, setShow] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getCountryList}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Country" />
      <div className="once-content">
        <div className="once-head">
          {show ? <h2>Add Country</h2> : null}

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
                <div className="dropdown f-b">
                  <label className="userLabel">Country Name</label>
                  <select
                    placeholder="Select Country"
                    id="permission_value"
                    onChange={(e) => setCountryCode(e.target.value)}
                    onClick={getCountryDropDown}
                  >
                    {edit_name === "" ? (
                      <option>Select Country</option>
                    ) : (
                      <option value={countryCode}>{edit_name}</option>
                    )}

                    {countrydropdown.map((val, key) => {
                      return (
                        <option value={val.country_code}>
                          {val.country_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="time-zone f-b">
                  <label>Time Zone</label>
                  <input
                    type="text"
                    id="permission_value"
                    placeholder="Time Zone"
                    defaultValue={timezone}
                    onChange={(e) => setTimeZone(e.target.value)}
                  />
                </div>
                <div className="alias f-b">
                  <label>{`Alias (if any)`}</label>
                  <input
                    type="text"
                    id="permission_value"
                    placeholder="Alias"
                    defaultValue={alias}
                    onChange={(e) => setAlias(e.target.value)}
                  />
                </div>
                <div className="btn">
                  <button className="save-btn" onClick={checkInputData}>
                    Save
                  </button>
                  <button
                    className={`save-btn hide ${hide ? "show-hide" : ""}`}
                    onClick={() => editCountry(edit_id)}
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "10px",
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
            <h2>Search Country</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Search"
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
                <th className="st-bg">Country Name</th>
                <th className="st-bg">Alias</th>
                <th className="st-bg">Time Zone</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {countrylist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    (val.country_name || "")
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    (val.country_timezone_alias || "")
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    (val.country_timezone || "")
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
                      <td>{val.country_name}</td>
                      <td>{val.country_timezone_alias}</td>
                      <td>{val.country_timezone}</td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i
                              class="bi bi-pencil-square"
                              onClick={() =>
                                updateCountry(val.country_timezone_id)
                              }
                            ></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() =>
                                deleteCountry(val.country_timezone_id)
                              }
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

        {/* =========== Pagination =================== */}
      </div>
    </div>
  );
};

export default Country;
