import React from "react";
import Select from "react-select";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Languages = () => {
  const [inactive, setInactive] = useState(false);
  const [language, setLanguage] = useState([]);
  const [languageName, setLanguageName] = useState("");
  const [language_alias, setLanguageAlias] = useState("");
  const [language_country, setLanguageCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [countrydropdown, setCountryDropdown] = useState([]);
  const [edit_id, setEditId] = useState("");
  const [edit_name, setEditName] = useState("");

  const checkInputData = () => {
    if (languageName === "") {
      window.alert("Please enter language name");
    } else {
      Axios.post("http://localhost:3001/check/language", {
        languageName: languageName,
      }).then((response) => {
        console.log(response.data);
        if (response.data.length === 0) {
          addLanguage();
        } else {
          window.alert("Language Name already exists");
          window.location.reload();
        }
      });
    }
  };

  const addLanguage = (e) => {
    Axios.post("http://localhost:3001/addlanguage", {
      languageName: languageName,
      language_alias: language_alias,
      language_country: language_country,
    }).then((e) => {
      window.alert("Language added successfully");
      window.location.reload();
    });
  };

  const getLanguage = () => {
    Axios.get("http://localhost:3001/language").then((response) => {
      setLanguage(response.data);
    });
  };

  const getCountryDropDown = () => {
    Axios.get("http://localhost:3001/countryDropD").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  const deleteLanguage = (language_id) => {
    if (window.confirm("Are you sure you want to delete this language")) {
      Axios.delete(`http://localhost:3001/delete/language/${language_id}`);
      setTimeout(() => getLanguage(), 200);
    }
  };

  const updateLanguage = (language_id) => {
    Axios.post(`http://localhost:3001/update/language/${language_id}`).then(
      (response) => {
        console.log(response.data);
        setLanguageName(response.data[0].language_name);
        setLanguageAlias(response.data[0].language_alias);
        setLanguageCountry(response.data[0].language_country);
        setEditId(response.data[0].language_id);
        setEditName(response.data[0].country_name);
      }
    );
  };

  const editLanguage = (edit_id) => {
    Axios.put(`http://localhost:3001/edit/lang/${edit_id}`, {
      languageName: languageName,
      language_alias: language_alias,
      language_country: language_country,
    }).then((e) => {
      window.alert("Language Successfully Updated");
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
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getLanguage}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Language" />
      <div className="once-content">
        <div className="once-head">
          {show ? <h2>Add Languages</h2> : null}
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
                <div className="time-zone f-b">
                  <label>Language Name</label>
                  <input
                    type="text"
                    placeholder="Language"
                    defaultValue={languageName}
                    onChange={(e) => setLanguageName(e.target.value)}
                  />
                </div>
                <div className="alias f-b">
                  <label>{`Alias (if any)`}</label>
                  <input
                    type="text"
                    placeholder="Alias"
                    defaultValue={language_alias}
                    onChange={(e) => setLanguageAlias(e.target.value)}
                  />
                </div>
                <div className="dropdown f-b">
                  <label className="userLabel">Country-used in</label>
                  <select
                    placeholder="Select Country"
                    onClick={getCountryDropDown}
                    onChange={(e) => setLanguageCountry(e.target.value)}
                  >
                    {edit_name === "" ? (
                      <option>Select Country</option>
                    ) : (
                      <option value={language_country}>{edit_name}</option>
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
                <div className="btn">
                  <button className="save-btn" onClick={checkInputData}>
                    Save
                  </button>
                  <button
                    className={`save-btn hide ${hide ? "show-hide" : ""}`}
                    onClick={() => editLanguage(edit_id)}
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
            <h2>Search Language</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Language"
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
                <th className="st-bg">Language Name</th>
                <th className="st-bg">Alias</th>
                <th className="st-bg">Country-used in</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {language
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.language_name
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    val.language_alias
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    val.country_name
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
                      <td>{val.language_name}</td>
                      <td>{val.language_alias}</td>
                      <td>{val.country_name}</td>
                      <td className="action">
                        <ul>
                          <li
                            className="edit-icon"
                            onClick={() => updateLanguage(val.language_id)}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteLanguage(val.language_id)}
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

export default Languages;
