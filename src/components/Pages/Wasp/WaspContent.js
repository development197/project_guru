import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
// import { Multiselect } from "multiselect-react-dropdown";
import InquiryRadio from "./InquiryRadio";
import { Link } from "react-router-dom";
import AddInquiry from "./AddInquiry";

import _ from "lodash";

import "bootstrap/dist/css/bootstrap.css";

const WaspContent = () => {
  //----------------------------State of New Client---------------------------------
  const [contactPerson, setContactPerson] = useState("");
  const [emailId, setEmailId] = useState("");
  const [status, setStatus] = useState("");
  const [company, setCompanyName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [category, setCategory] = useState("");
  const [mobileNo1, setMobileNo1] = useState("");
  const [ourCompany, setOurCompany] = useState("");
  const [note_wasp, setNoteWasp] = useState("");
  const [skype, setSkype] = useState("");
  const [website, setWebsite] = useState("");
  const [waspTact, setWaspTact] = useState("");

  //-----------------------------Drop Down List-----------------------------------
  const [statusDropDown, setStatusDropDown] = useState([]);
  const [categoryDropDown, setCategoryDropDown] = useState([]);
  const [countrydropdown, setCountryDropdown] = useState([]);
  const [ourcompanyList, setOurCompanyList] = useState([]);

  //-----------------------------Front end States-----------------------------------
  const [setActive, setActiveState] = useState(false);
  const [acOpen, setAcOpen] = useState(false);
  const [acOpen4, setAcOpen4] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showQuality, setShowQuality] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [translatorList, setTranslatorList] = useState(false);
  const [workCheck, setWorkCheck] = useState(false);
  const [workTranslatorList, setWorkTranslatorList] = useState(false);
  const [workOrder, setWorkOrder] = useState(false);

  //-------------------------------API of adding new client---------------------------------
  // console.log(category);
  // let multipleCategory = "";
  // for (var i = 0; i < category; i++) {
  //   multipleCategory += category + ", ";
  // }
  // console.log(multipleCategory);

  const addNewClient = (e) => {
    if (emailId.length === 0 || status.length === 0 || category.length === 0) {
      window.alert("Please enter all mandatory fields");
    } else {
      Axios.post("http://localhost:3001/waspNewClient", {
        contactPerson: contactPerson,
        emailId: emailId,
        status: status,
        company: company,
        countryName: countryName,
        category: category,
        mobileNo1: mobileNo1,
        ourCompany: ourCompany,
        note_wasp: note_wasp,
        skype: skype,
        website: website,
        waspTact: waspTact,
      }).then((e) => {
        console.log("success");
        window.alert("Successfully Added");
        window.location.reload();
      });
    }
  };

  //----------------------------------Send Approval API---------------------------------

  const sendApproval = (e) => {
    if (emailId.length === 0 || status.length === 0 || category.length === 0) {
      window.alert("Please enter all mandatory fields");
    } else {
      Axios.post("http://localhost:3001/sendApproval/client", {
        contactPerson: contactPerson,
        emailId: emailId,
        status: status,
        company: company,
        countryName: countryName,
        category: category,
        mobileNo1: mobileNo1,
        ourCompany: ourCompany,
        note_wasp: note_wasp,
        skype: skype,
        website: website,
        waspTact: waspTact,
      }).then((e) => {
        console.log("success");
        window.alert("Successfully Added and Approval Request is sent");
        window.location.reload();
      });
    }
  };

  //--------------------------State and API of Drop Downs-------------------------

  const getStatus = () => {
    Axios.get("http://localhost:3001/statusDropD").then((response) => {
      setStatusDropDown(response.data);
    });
  };

  const getCategory = () => {
    Axios.get("http://localhost:3001/categoryDropD").then((response) => {
      setCategoryDropDown(response.data);
    });
  };

  const getCountry = () => {
    Axios.get("http://localhost:3001/countryDropD").then((response) => {
      setCountryDropdown(response.data);
    });
  };

  const getOurCompanyList = () => {
    Axios.get("http://localhost:3001/ourCompanyDropD").then((response) => {
      setOurCompanyList(response.data);
    });
  };

  //----------------------------Wasp Client List---------------------------------
  const [testData, setTestData] = useState([]);
  const [waspList, setWaspList] = useState([]);
  const getDataE = () => {
    Axios.post("http://localhost:3001/waspclient", { testData: testData }).then(
      (response) => {
        setWaspList(response.data);
      }
    );
  };

  //----------------------------Getting Individual section---------------------------------
  const [enquiryData, setEnquiryData] = useState([]);
  const getEnquiryData = (tact_id) => {
    console.log(tact_id);
    console.log("clicked get data");
    Axios.post(`http://localhost:3001/enquirydata/${tact_id}`).then(
      (response) => {
        console.log(response.data);
        console.log("getting completed");
      }
    );
  };

  //-----------------------------Update Client--------------------------------------
  const [updateId, setUpdateId] = useState("");
  const [updateStatusN, setUpdateStatusN] = useState("");
  const [updateCountryN, setUpdateCountryN] = useState("");
  const [updateCategoryN, setUpdateCategoryN] = useState("");
  const [updateOurCompanyN, setUpdateOurCompanyN] = useState("");
  const [updateWaspChecked, setUpdateWaspChecked] = useState();
  const [updateTactChecked, setUpdateTactChecked] = useState();

  const updateClient = (tact_id) => {
    Axios.get(`http://localhost:3001/wasp/update/client/${tact_id}`).then(
      (response) => {
        console.log(response.data);
        setUpdateId(response.data[0].tact_id);
        setContactPerson(response.data[0].contact_person);
        setEmailId(response.data[0].email_id);
        setStatus(response.data[0].status);
        setUpdateStatusN(response.data[0].status_name);
        setCompanyName(response.data[0].company_name);
        setCountryName(response.data[0].country);
        setUpdateCountryN(response.data[0].country_name);
        setCategory(response.data[0].category);
        setUpdateCategoryN(response.data[0].category_name);
        setMobileNo1(response.data[0].mobile_one);
        setOurCompany(response.data[0].our_company);
        setUpdateOurCompanyN(response.data[0].companies_name);
        setNoteWasp(response.data[0].note);
        setSkype(response.data[0].skype);
        setWebsite(response.data[0].website);
        // setWaspTact(response.data[0].show_in_tact);

        let inp = document.querySelectorAll("#check");
        inp.forEach((val) => {
          if (response.data[0].show_in_tact === "W") {
            setUpdateWaspChecked(true);
          } else {
            setUpdateWaspChecked(false);
          }

          if (response.data[0].show_in_tact === "T") {
            setUpdateTactChecked(true);
          } else {
            setUpdateTactChecked(false);
          }
        });
      }
    );
  };

  //-------------------------------Edit Client API---------------------------------
  const editClient = (updateId) => {
    let w_t;
    if (updateWaspChecked === true) {
      w_t = "W";
    } else {
      w_t = "T";
    }

    Axios.put(`http://localhost:3001/edit/client/${updateId}`, {
      contactPerson: contactPerson,
      emailId: emailId,
      status: status,
      company: company,
      countryName: countryName,
      category: category,
      mobileNo1: mobileNo1,
      ourCompany: ourCompany,
      note_wasp: note_wasp,
      skype: skype,
      website: website,
      w_t: w_t,
    }).then((e) => {
      console.log("success");
      window.alert("Client Successfully Edited");
      window.location.reload();
    });
  };

  //----------------------------Front end Toggle functions-----------------------------------

  const toggleTranslatorList = () => {
    setTranslatorList(!translatorList);
  };

  const toggleWorkCheck = () => {
    setWorkCheck(!workCheck);
  };

  const toggleWorkTranslatorList = () => {
    setWorkTranslatorList(!workTranslatorList);
  };

  const toggleWorkOrder = () => {
    setWorkOrder(!workOrder);
  };

  const toggleWork = () => {
    setShowWork(!showWork);
  };

  const toggleCancel = () => {
    setShowCancel(!showCancel);
  };

  const toggleQuality = () => {
    setShowQuality(!showQuality);
  };

  const toggleAccordion4 = () => {
    setAcOpen4(!acOpen4);
  };

  const toggleAccordion2 = () => {
    setAcOpen(!acOpen);
  };

  const toggleAccordion = () => {
    setActiveState(!setActive);
  };

  const [data, SetData] = useState();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("click");
  };

  if (modal) {
    document.body.classList.add("active-modal-client");
  } else {
    document.body.classList.remove("active-modal-client");
  }

  const [inquiry, setInquiry] = useState(false);

  const toggleInquiry = () => {
    setInquiry(!inquiry);
    console.log("Clicked");
  };

  const [note, setNote] = useState(false);

  const toggleNote = () => {
    setNote(!note);
  };

  if (note) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [note2, setNote2] = useState(false);

  const toggleNote2 = () => {
    setNote2(!note2);
  };

  if (note2) {
    document.body.classList.add("active-modal-note2");
  } else {
    document.body.classList.remove("active-modal-note2");
  }

  const [note3, setNote3] = useState(false);

  const toggleNote3 = () => {
    setNote3(!note3);
  };

  if (note3) {
    document.body.classList.add("active-modal-note3");
  } else {
    document.body.classList.remove("active-modal-note3");
  }

  const toggleRadio = () => {
    const b = document.querySelector(".inq-radio-none");
    b.classList.add("inq-radio-block");
  };

  const toggleInq = () => {
    const a = document.querySelector(".inq-none");
    a.classList.add("inq-block");
  };

  //const [searchTerm, setSearchTerm] = useState("");
  // const [paginated,setPaginated] = useState()

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  // const pageSize = 10;
  // const pageCount = MockData ? Math.ceil(MockData.length/pageSize) : 0;

  // if(pageCount === 1){
  //   return null;
  // }

  // const pages = _.range(1,pageCount+1)

  const editButton = (tact_id) => {
    toggleModal();
    updateClient(tact_id);
  };

  return (
    <div className="wasp__table">
      <div className="search">
        <form onSubmit={handelSubmit}>
          <div className="col-sm-4">
            <div className="title">
              <p>Search Clients</p>
            </div>
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Search Clients"
              className="from-control from-control-sm"
              onChange={(e) => {
                setTestData(e.target.value);
              }}
            />
            <div className="input-field col-sm-2">
              <button className="wasp-search-btn col-sm-2" onClick={getDataE}>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="overflow-table">
        <table className="selfTask-table-data">
          <thead>
            <tr>
              <th className="wt-bg">Company Name</th>
              <th className="wt-bg">Person</th>
              <th className="wt-bg">Mobile</th>
              <th className="wt-bg">Email Id</th>
              <th className="wt-bg">Country</th>
              <th className="wt-bg">Our Company</th>
              <th className="wt-bg">Notes</th>
              <th className="wt-bg">PM</th>
              <th className="wt-bg">3 Month Sale</th>
              <th className="wt-bg">Credit Limit</th>
              <th className="wt-bg">W/t</th>
              <th className="wt-bg">A/P/D</th>
              <th className="wt-bg">Status</th>
              <th className="wt-bg"></th>
              <th className="wt-bg">Edit</th>
            </tr>
          </thead>
          <tbody>
            {waspList.map((val, key) => {
              return (
                <tr>
                  <td>{val.company_name}</td>
                  <td>{val.contact_person}</td>
                  <td>{val.mobile_one}</td>
                  <td>{val.email_id}</td>
                  <td>{val.country_name + "(" + val.country_timezone + ")"}</td>
                  <td>{val.companies_name}</td>
                  <td>
                    <i className="icon-file-text"></i>
                  </td>
                  <td></td>
                  <td></td>
                  <td>{val.limit_allot}</td>
                  <td>{val.show_in_tact}</td>
                  <td>{val.approved_disapproved}</td>
                  <td>{val.status_name}</td>
                  <td>
                    <input
                      type="radio"
                      name="inquiry"
                      onChange={toggleRadio}
                      onClick={() => getEnquiryData(val.tact_id)}
                    />
                  </td>
                  <td>
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => editButton(val.tact_id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Client  */}
      <div className="add-Client">
        <button onClick={toggleModal} className="add-Client-btn">
          <span>
            <i className="icon-plus"></i>Add New Client
          </span>
        </button>
        <button onClick={toggleInq} className="add-Client-btn">
          <span>
            <i className="icon-plus"></i>Add New Enquiry
          </span>
        </button>
        {modal && (
          <div className="mod">
            <div className="mod__header">
              <div className="text">
                <p>Edit Client</p>
              </div>
              <div className="mod__close-btn">
                <button className="modal-close" onClick={toggleModal}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
            </div>
            <div className="inner-container">
              <div className="search-form">
                <form>
                  <div className="search-input">
                    <div className="search-inp">
                      <label>Contact Person</label>
                      <input
                        type="text"
                        placeholder="Contact Person"
                        defaultValue={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                      />
                    </div>

                    <div className="search-inp">
                      <label>Email ID</label>
                      <input
                        type="email"
                        placeholder="Email ID"
                        defaultValue={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                      />
                    </div>

                    <div className="search-inp">
                      <label>Status</label>
                      <select
                        className="search-select"
                        onClick={getStatus}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        {status === "" ? (
                          <option>Select Status</option>
                        ) : (
                          <option value={status}>{updateStatusN}</option>
                        )}
                        {/* <option value={status}>{updateStatusN}</option> */}
                        {statusDropDown.map((val, key) => {
                          return (
                            <option value={val.status_id}>
                              {val.status_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="search-input">
                    <div className="search-inp">
                      <label>Company Name</label>
                      <input
                        type="text"
                        placeholder="Contact Person"
                        defaultValue={company}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>

                    <div className="search-inp">
                      <label>Country</label>
                      <select
                        className="search-select"
                        onClick={getCountry}
                        onChange={(e) => setCountryName(e.target.value)}
                      >
                        {countryName === "" ? (
                          <option>Select Country</option>
                        ) : (
                          <option value={countryName}>{updateCountryN}</option>
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
                    <div className="search-inp">
                      <label>Category</label>
                      {/* <Multiselect
                        onClick={getCategory}
                        options={categoryDropDown}
                        displayValue={val.country_name}
                      /> */}
                      <select
                        className="search-select"
                        // multiple={true}
                        onClick={getCategory}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {category === "" ? (
                          <option>Select Category</option>
                        ) : (
                          <option value={category}>{updateCategoryN}</option>
                        )}
                        {categoryDropDown.map((val, key) => {
                          return (
                            <option value={val.category_id}>
                              {val.category_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="search-input">
                    <div className="search-inp">
                      <label>Mobile No. 1</label>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        defaultValue={mobileNo1}
                        onChange={(e) => setMobileNo1(e.target.value)}
                      />
                    </div>

                    <div className="search-inp">
                      <label>Our Company</label>
                      <select
                        onClick={getOurCompanyList}
                        onChange={(e) => setOurCompany(e.target.value)}
                      >
                        {ourCompany === "" ? (
                          <option>Select Company</option>
                        ) : (
                          <option value={ourCompany}>
                            {updateOurCompanyN}
                          </option>
                        )}
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
                      <label>Notes</label>
                      <input
                        type="text"
                        placeholder="Notes"
                        defaultValue={note_wasp}
                        onChange={(e) => setNoteWasp(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="search-input">
                    <div className="search-inp">
                      <label>Skype</label>
                      <input
                        type="text"
                        placeholder="Skype"
                        defaultValue={skype}
                        onChange={(e) => setSkype(e.target.value)}
                      />
                    </div>

                    <div className="search-inp">
                      <label>Website</label>
                      <input
                        type="text"
                        placeholder="Website"
                        defaultValue={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                    <div className="search-inp">
                      <label>Show In</label>
                      <input
                        type="radio"
                        name="show"
                        id="check"
                        defaultChecked={updateWaspChecked}
                        className="search-radio"
                        value="W"
                        onChange={(e) => setWaspTact(e.target.value)}
                      />
                      Wasp
                      <input
                        type="radio"
                        name="show"
                        id="check"
                        className="search-radio"
                        value="T"
                        defaultChecked={updateTactChecked}
                        onChange={(e) => setWaspTact(e.target.value)}
                      />
                      Tact
                    </div>
                  </div>
                  <div className="mod-btn">
                    {updateId === "" ? (
                      <button className="mod-save" onClick={addNewClient}>
                        Save
                      </button>
                    ) : (
                      <button
                        className="mod-save"
                        onClick={() => editClient(updateId)}
                      >
                        Update
                      </button>
                    )}
                    {updateId === "" ? (
                      <button className="mod-save" onClick={sendApproval}>
                        <Link
                          to="/ApprovalDisapproval"
                          state={{
                            contactPerson: contactPerson,
                            emailId: emailId,
                            status: status,
                            company: company,
                            countryName: countryName,
                            category: category,
                            mobileNo1: mobileNo1,
                            ourCompany: ourCompany,
                            note_wasp: note_wasp,
                            skype: skype,
                            website: website,
                            waspTact: waspTact,
                          }}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Send Approval
                        </Link>
                      </button>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* reference_number={ref_no} */}
      <div className="inq-none">
        <AddInquiry />
      </div>

      <div className="inq-radio-none">
        <InquiryRadio enquiry={enquiryData} />
      </div>
    </div>
  );
};

export default WaspContent;
