import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Currency = () => {
  const [inactive, setInactive] = useState(false);
  const [currency, setCurrency] = useState([]);
  const [currencyName, setCurrencyName] = useState("");
  const [currency_alias, setCurrencyAlias] = useState("");
  const [currency_image, setCurrencyImage] = useState();
  const [currency_symbol, setCurrencySymbol] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [edit_id, setEditId] = useState("");
  const [currencyDropDown, setCurrencyDropdown] = useState([]);

  const getCurrency = () => {
    Axios.get("http://localhost:3001/currency").then((response) => {
      setCurrency(response.data);
    });
  };

  const checkInputData = () => {
    if (currencyName === "" || currency_alias === "") {
      window.alert("Please fill all the fields");
    }

    Axios.post("http://localhost:3001/check/currency", {
      currency_alias: currency_alias,
      currencyName: currencyName,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        addCurrency();
      } else {
        window.alert("Currency already exists");
        window.location.reload();
      }
    });
  };

  const addCurrency = (e) => {
    Axios.post("http://localhost:3001/addcurrency", {
      currencyName: currencyName,
      currency_alias: currency_alias,
      currency_symbol: currency_symbol,
      currency_image: currency_image,
    }).then((e) => {
      console.log("success");
      window.location.reload();
    });
  };

  const deleteCurrency = (currency_id) => {
    if (window.confirm("Are you sure")) {
      Axios.delete(`http://localhost:3001/delete/currency/${currency_id}`);
      setTimeout(() => getCurrency(), 200);
    }
  };

  const updateCurrency = (currency_id) => {
    Axios.post(`http://localhost:3001/update/currency/${currency_id}`).then(
      (response) => {
        console.log(response.data);
        setCurrencyName(response.data[0].currency_name);
        setCurrencyAlias(response.data[0].currency_alias);
        setCurrencySymbol(response.data[0].currency_symbol);
        setCurrencyImage(response.data[0].currency_image);
        setEditId(response.data[0].currency_id);
      }
    );
  };

  const editCurrency = (edit_id) => {
    Axios.put(`http://localhost:3001/edit/currency/${edit_id}`, {
      currencyName: currencyName,
      currency_alias: currency_alias,
      currency_symbol: currency_symbol,
      currency_image: currency_image,
    }).then((e) => {
      window.alert("Currency Successfully Updated");
      window.location.reload();
    });
  };

  const getCurrencyDropDown = () => {
    Axios.get("http://localhost:3001/currencyDropD").then((response) => {
      setCurrencyDropdown(response.data);
    });
  };

  const [baseRate, setBaseRate] = useState("");
  const [requiredRate, setRequiredRate] = useState("");
  const [rate, setRate] = useState("");

  const checkInputRate = () => {
    Axios.post("http://localhost:3001/check/currency/rate", {
      baseRate: baseRate,
      requiredRate: requiredRate,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        addConversionRate();
      } else {
        window.alert("Currency Rate already exists");
        window.location.reload();
      }
    });
  };

  const addConversionRate = (e) => {
    Axios.post("http://localhost:3001/add/conversion/rate", {
      baseRate: baseRate,
      requiredRate: requiredRate,
      rate: rate,
    }).then((e) => {
      window.alert("Conversion Rate Successfully Added");
      window.location.reload();
    });
  };

  const [conversionList, setConversionList] = useState([]);
  const getConversionRate = (e) => {
    Axios.get("http://localhost:3001/base/rate").then((e) => {
      setConversionList(e.data);
      // getRequiredRate();
    });
  };

  // const [requiredRateList, setRequiredRateList] = useState([]);
  // const getRequiredRate = (e) => {
  //   Axios.get("http://localhost:3001/required/rate").then((e) => {
  //     setRequiredRateList(e.data);
  //   });
  // };

  const wholeData = () => {
    getCurrency();
    getConversionRate();
  };

  const deleteRate = (rate_id) => {
    if (window.confirm("Are you sure you want to delete this rate ")) {
      Axios.delete(`http://localhost:3001/delete/conversion/rate/${rate_id}`);
      setTimeout(() => getCurrency(), 200);
      window.location.reload();
    }
  };

  const [editRateId, setRateEditId] = useState("");
  const [editBaseRateName, setBaseEditRateName] = useState("");
  const [editRequiredRateName, setRequiredEditRateName] = useState("");
  const updateRate = (rate_id) => {
    Axios.post(`http://localhost:3001/update/rate/${rate_id}`).then(
      (response) => {
        console.log(response.data);
        setRateEditId(response.data[0].rate_id);
        setBaseEditRateName(response.data[0].cb);
        setBaseRate(response.data[0].base_rate);
        setRequiredEditRateName(response.data[0].cr);
        setRequiredRate(response.data[0].required_rate);
        setRate(response.data[0].rate);
      }
    );
  };

  const editRate = (editRateId) => {
    Axios.put(`http://localhost:3001/edit/rate/${editRateId}`, {
      baseRate: baseRate,
      requiredRate: requiredRate,
      rate: rate,
    }).then((e) => {
      window.alert("Conversion Rate Successfully Updated");
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
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={wholeData}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Currency" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2>Add Currency</h2> : null}

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
                  <label>Currency Name</label>
                  <input
                    type="text"
                    placeholder="Currency Name"
                    defaultValue={currencyName}
                    onChange={(e) => setCurrencyName(e.target.value)}
                  />
                </div>
                <div className="alias f-b">
                  <label>{`Alias (if any)`}</label>
                  <input
                    type="text"
                    placeholder="Alias"
                    defaultValue={currency_alias}
                    onChange={(e) => setCurrencyAlias(e.target.value)}
                  />
                </div>
                <div className="time-zone f-b">
                  <label>Currency Symbol</label>
                  <input
                    type="text"
                    placeholder="Currency"
                    defaultValue={currency_symbol}
                    onChange={(e) => setCurrencySymbol(e.target.value)}
                  />
                </div>
                <div className="Choose-file">
                  <input
                    type="file"
                    name="image_file"
                    className="choose"
                    accept="image/*"
                    defaultValue={currency_image}
                    onChange={(e) => setCurrencyImage(e.target.files)}
                  />
                </div>
                <div className="btn">
                  <button
                    className="save-btn curr-btn"
                    onClick={checkInputData}
                  >
                    Save
                  </button>
                  <button
                    className={`save-btn hide ${hide ? "show-hide" : ""}`}
                    onClick={() => editCurrency(edit_id)}
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
            <h2>Search Currency</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Currency"
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
                <th className="st-bg">Currency Name</th>
                <th className="st-bg">Alias</th>
                <th className="st-bg">Symbol</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {currency
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.currency_name
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
                      <td>{val.currency_name}</td>
                      <td>{val.currency_alias}</td>
                      <td>
                        <img
                          src={val.currency_image}
                          enctype="multipart/form-data"
                        />
                        {val.currency_symbol}
                      </td>
                      <td className="action">
                        <ul>
                          <li className="edit-icon">
                            <i
                              className="bi bi-pencil-square"
                              onClick={() => updateCurrency(val.currency_id)}
                            ></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteCurrency(val.currency_id)}
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

        <div className="once-head">
          <h2>Currency Conversion Rate</h2>
        </div>
        {show ? (
          <form>
            <div className="input-field">
              <div className="select">
                <div className="time-zone f-b">
                  <label>Base Rate</label>
                  <select
                    onClick={getCurrencyDropDown}
                    onChange={(e) => setBaseRate(e.target.value)}
                  >
                    {editRateId === "" ? (
                      <option>Select Base Rate</option>
                    ) : (
                      <option value={baseRate}>{editBaseRateName}</option>
                    )}

                    {currencyDropDown.map((val, key) => {
                      return (
                        <option value={val.currency_id}>
                          {val.currency_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="alias f-b">
                  <label> Required Rate</label>
                  <select
                    onClick={getCurrencyDropDown}
                    onChange={(e) => setRequiredRate(e.target.value)}
                  >
                    {editRateId === "" ? (
                      <option>Select Required Rate</option>
                    ) : (
                      <option value={requiredRate}>
                        {editRequiredRateName}
                      </option>
                    )}
                    {currencyDropDown.map((val, key) => {
                      return (
                        <option value={val.currency_id}>
                          {val.currency_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="time-zone f-b">
                  <label>Rate</label>
                  <input
                    type="number"
                    placeholder="Rate"
                    defaultValue={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                <div className="btn">
                  <button
                    className="save-btn curr-btn"
                    onClick={checkInputRate}
                  >
                    Save
                  </button>
                  <button
                    className={`save-btn hide ${hide ? "show-hide" : ""}`}
                    onClick={() => editRate(editRateId)}
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

        <div className="once-table conversion-table">
          <table>
            <thead>
              <tr>
                <th className="st-bg">S.No</th>
                <th className="st-bg">Base Rate</th>
                <th className="st-bg">Required Rate</th>
                <th className="st-bg">Rate</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {conversionList.map((val, key) => {
                return (
                  <tr>
                    <td>{val.serial_number}</td>
                    <td>{val.cb}</td>
                    <td>{val.cr}</td>
                    <td>{val.rate}</td>
                    <td className="action">
                      <ul>
                        <li className="edit-icon">
                          <i
                            class="bi bi-pencil-square"
                            onClick={() => updateRate(val.rate_id)}
                          ></i>
                        </li>
                        <li className="delete-icon">
                          <i
                            class="bi bi-trash"
                            onClick={() => deleteRate(val.rate_id)}
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

export default Currency;
