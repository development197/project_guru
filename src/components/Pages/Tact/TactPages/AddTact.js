import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../../OncePages/OnceHeader";
import Axios from "axios";

const AddTact = () => {
  const [inactive, setInactive] = useState(false);

  const [statusDropDown, setStatusDropDown] = useState([]);
  const [categoryDropDown, setCategoryDropDown] = useState([]);
  const [countrydropdown, setCountryDropdown] = useState([]);
  const [ourcompanyList, setOurCompanyList] = useState([]);

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

  const [enteredBy, setEnteredBy] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [ourCompany, setOurCompany] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salutation, setSalutation] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [emailId, setEmailId] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [mobileNo1, setMobileNo1] = useState("");
  const [mobileNo2, setMobileNo2] = useState("");
  const [skype, setSkype] = useState("");
  const [website, setWebsite] = useState("");
  const [note_wasp, setNote_wasp] = useState("");
  const [cv, setCv] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [source, setSource] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [paypalId, setPaypalId] = useState("");
  const [moneyBooker, setMoneyBooker] = useState("");
  const [currency, setCurrency] = useState("");
  const [minBillIndia, setMinBillIndia] = useState("");
  const [minBillForeign, setMinBillForeign] = useState("");
  const [gstApplicable, setGstApplicable] = useState("");
  const [allotedLimit, setAllotedLimit] = useState("");
  const [waspTact, setWaspTact] = useState("");
  const [approvDisapprov, setApprovDisapprov] = useState("");

  const addTact = (e) => {
    if (
      emailId.length === 0 ||
      status.length === 0 ||
      category.length === 0 ||
      waspTact === 0
    ) {
      window.alert("Please enter all mandatory fields");
    } else {
      Axios.post("http://localhost:3001/addtact", {
        enteredBy: enteredBy,
        category: category,
        status: status,
        country: country,
        ourCompany: ourCompany,
        companyName: companyName,
        salutation: salutation,
        contactPerson: contactPerson,
        emailId: emailId,
        secondaryEmail: secondaryEmail,
        mobileNo1: mobileNo1,
        mobileNo2: mobileNo2,
        skype: skype,
        website: website,
        note_wasp: note_wasp,
        cv: cv,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        pinCode: pinCode,
        projectManager: projectManager,
        source: source,
        bankName: bankName,
        bankAccountNo: bankAccountNo,
        ifscCode: ifscCode,
        bankDetails: bankDetails,
        bankAddress: bankAddress,
        swiftCode: swiftCode,
        paypalId: paypalId,
        moneyBooker: moneyBooker,
        currency: currency,
        minBillIndia: minBillIndia,
        minBillForeign: minBillForeign,
        gstApplicable: gstApplicable,
        allotedLimit: allotedLimit,
        waspTact: waspTact,
        approvDisapprov: approvDisapprov,
      }).then((e) => {
        console.log("added");
        window.alert("Added");
      });
    }
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Add Tact" />
      <div className="inner-container">
        <div className="search-form">
          <div className="add-heading">
            <h3>Basic Information</h3>
          </div>
          <form>
            <div className="search-input">
              <div className="search-inp">
                <label>Entered by</label>
                <input
                  type="text"
                  onChange={(e) => setEnteredBy(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Category</label>
                <select
                  className="search-select"
                  onClick={getCategory}
                  onChange={(e) => setCategory(e.target.value)}
                >
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
                  <option>Select Country</option>
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
                <label>Our Company</label>
                <select
                  onClick={getOurCompanyList}
                  onChange={(e) => setOurCompany(e.target.value)}
                >
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
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Salutation</label>
                <input
                  type="text"
                  placeholder="Salutation"
                  onChange={(e) => setSalutation(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Contact Person</label>
                <input
                  type="text"
                  placeholder="Contact Preson"
                  onChange={(e) => setContactPerson(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Email Id</label>
                <input
                  type="email"
                  placeholder="Email ID"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Secondary Email Id</label>
                <input
                  type="email"
                  placeholder="Secondary Email Id"
                  onChange={(e) => setSecondaryEmail(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Mobile No.1</label>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  onChange={(e) => setMobileNo1(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Mobile No.2</label>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  onChange={(e) => setMobileNo2(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Skype</label>
                <input
                  type="text"
                  placeholder="Skype"
                  onChange={(e) => setSkype(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Website</label>
                <input
                  type="url"
                  placeholder="Website"
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Note</label>
                <input
                  type="text"
                  placeholder="Note"
                  onChange={(e) => setNote_wasp(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Attach CV</label>
                <input
                  className="inp-src-choose"
                  type="file"
                  onChange={(e) => setCv(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Address Line 1</label>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  onChange={(e) => setAddressLine1(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Address Line 2</label>
                <input
                  type="text"
                  placeholder="Address Line 2"
                  onChange={(e) => setAddressLine2(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Pin or Zip Code</label>
                <input
                  type="text"
                  placeholder="Pin or Zip Code"
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Project Manager</label>
                <input
                  type="text"
                  placeholder="Project Manager"
                  onChange={(e) => setProjectManager(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Source</label>
                <input
                  type="text"
                  placeholder="Source"
                  onChange={(e) => setSource(e.target.value)}
                />
              </div>
            </div>

            <div className="search-button">
              <button className="s-btn">Search</button>
            </div>
          </form>

          {/* ===== Pament Details ====== */}

          <div className="add-heading2">
            <h3>Payment Details</h3>
          </div>

          <form>
            <div className="search-input">
              <div className="search-inp">
                <label>Bank Name</label>
                <input
                  type="text"
                  placeholder="Bank Name"
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Account No.</label>
                <input
                  type="text"
                  placeholder="Banck Account No."
                  onChange={(e) => setBankAccountNo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>IFSC Code</label>
                <input
                  type="text"
                  placeholder="IFSC Code"
                  onChange={(e) => setIfscCode(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Bank Details</label>
                <input
                  type="text"
                  placeholder="Bank Details"
                  onChange={(e) => setBankDetails(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Address</label>
                <input
                  type="text"
                  placeholder="Bank Address"
                  onChange={(e) => setBankAddress(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Swift Code</label>
                <input
                  type="text"
                  placeholder="Swift Code"
                  onChange={(e) => setSwiftCode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>PayPal</label>
                <input
                  type="text"
                  placeholder="PayPal"
                  onChange={(e) => setPaypalId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Money Booker</label>
                <input
                  type="text"
                  placeholder="Money Booker"
                  onChange={(e) => setMoneyBooker(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Select Currency</label>
                <select
                  className="search-select"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Min Bill Indian Language</label>
                <input
                  type="email"
                  placeholder="Min Bill Indian Language"
                  onChange={(e) => setMinBillIndia(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Min Bill Foreign Language</label>
                <input
                  type="tel"
                  placeholder="Min Bill Foreign Language"
                  onChange={(e) => setMinBillForeign(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Limit Alloted</label>
                <input
                  type="text"
                  placeholder="Limit Alloted"
                  onChange={(e) => setAllotedLimit(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <p className="gst-inp">GST Applicable</p>
                <input
                  type="radio"
                  id="yes"
                  name="GST_applicable"
                  value="Y"
                  className="search-radio"
                  onChange={(e) => setGstApplicable(e.target.value)}
                />
                  <label for="yes">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="GST_applicable"
                  value="N"
                  onChange={(e) => setGstApplicable(e.target.value)}
                  className="search-radio"
                />
                  <label for="no">No</label>
              </div>

              <div className="search-inp show-inp">
                <label>Show in</label>
                <input
                  type="radio"
                  id="wasp"
                  name="show_in"
                  value="W"
                  onChange={(e) => setWaspTact(e.target.value)}
                  className="search-radio"
                />
                  <label for="yes">Wasp</label>
                <input
                  type="radio"
                  id="tact"
                  name="show_in"
                  value="T"
                  onChange={(e) => setWaspTact(e.target.value)}
                  className="search-radio"
                />
                  <label for="no">Tact</label>
              </div>
            </div>

            <div className="search-input approve-inp">
              <div className="search-inp">
                <input
                  type="radio"
                  name="approve"
                  value="A"
                  className="search-radio"
                  onChange={(e) => setApprovDisapprov(e.target.value)}
                />
                <label htmlFor="Approved">Approved</label>
                <input
                  type="radio"
                  name="approve"
                  value="D"
                  onChange={(e) => setApprovDisapprov(e.target.value)}
                  className="search-radio"
                />
                <label htmlFor="Disapproved">Disapproved</label>
              </div>
            </div>

            <div className="search-button">
              <button className="s-btn" onClick={addTact}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTact;
