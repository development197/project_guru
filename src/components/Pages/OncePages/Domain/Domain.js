import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";
import Axios from "axios";

const Domain = () => {
  const [inactive, setInactive] = useState(false);
  const [domainlist, setDomainlist] = useState([]);
  const [domain, setDomain] = useState("");
  //const [edit_domain_name, editDomainName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  //const [update_domain, setUpdateDomain] = useState([]);
  const [edit_domain_name, editDomainName] = useState("");
  const [inpVal, setInpval] = useState("");
  //const [edit_domain_id, editDomainId] = useState("");

  const checkInputData = () => {
    Axios.post("http://localhost:3001/check/domain", {
      domain: domain,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        addDomain();
      } else {
        window.alert("Domain already exists");
        window.location.reload();
      }
    });
  };

  const addDomain = (e) => {
    Axios.post("http://localhost:3001/adddomain", {
      domain: domain,
    }).then((e) => {
      console.log("success");
      window.location.reload();
    });
  };

  const getDomain = () => {
    Axios.get("http://localhost:3001/domain").then((response) => {
      setDomainlist(response.data);
    });
  };

  const deleteDomain = (domain_id) => {
    if (window.confirm("Are you sure you want to delete this domain?")) {
      Axios.delete(`http://localhost:3001/delete/domain/${domain_id}`);
      setTimeout(() => getDomain(), 200);
    }
  };

  const editDomain = (e) => {
    Axios.post("http://localhost:3001/edit/domain", {
      edit_domain_name: edit_domain_name,
      domain: domain,
    }).then((e) => {
      console.log("success");
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
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getDomain}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Domain" />
      <div className="once-content currency">
        <div className="once-head">
          {show ? <h2>Add Domain</h2> : null}
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
            <div className="measure">
              <div className="measure-inp">
                <label>Domain Name</label>
                <input
                  type="text"
                  defaultValue={edit_domain_name}
                  placeholder="Domain"
                  onChange={(e) => setDomain(e.target.value)}
                />
                <button className="save-btn" onClick={checkInputData}>
                  Save
                </button>
                <button
                  className={`save-btn hide ${hide ? "show-hide" : ""}`}
                  onClick={editDomain}
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        ) : null}

        {show ? (
          <div className="once-search">
            <h2>Search Domain</h2>
            <form>
              <div className="onceSearch-input">
                <label>Search</label>
                <input
                  type="text"
                  //value={edit_domain_id}
                  placeholder="Domain"
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
          <table id="domain_table">
            <thead>
              <tr>
                <th className="st-bg">S.No</th>
                <th className="st-bg">Domain Name</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>

            <tbody>
              {domainlist
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.domain_name
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
                      <td className="domainName" id="edit">
                        {val.domain_name}
                      </td>
                      <td className="action">
                        <ul>
                          <li
                            className="edit-icon"
                            onClick={() => {
                              editDomainName(val.domain_name);
                            }}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </li>
                          <li className="delete-icon">
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteDomain(val.domain_id)}
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

export default Domain;
