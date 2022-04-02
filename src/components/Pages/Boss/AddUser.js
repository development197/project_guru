import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const AddUser = () => {
  //-------------------Add user states-------------------
  const [inactive, setInactive] = useState(false);
  const [hide, setHide] = useState(false);
  const [salutation, setSalutation] = useState("");
  const [nickName, setNickName] = useState("");
  const [surName, setSurName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [skypeId, setSkypeId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [work, setWork] = useState("");
  const [ourCompany, setOurCompany] = useState("");
  const [starSquare, setStarSquare] = useState("");
  const [colour, setColour] = useState("");
  const [doj, setDoj] = useState("");
  const [salaryToday, setSalaryToday] = useState("");
  const [currentEmailPass, setCurrentEmailPass] = useState("");
  const [currentSkypePass, setCurrentSkypePass] = useState("");
  const [calenderCode, setCalenderCode] = useState("");
  const [personalMobileNo, setPersonalMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [personalEmailId, setPersonalEmailId] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [paypalId, setPaypalId] = useState("");
  const [password, setPassword] = useState("");
  const [allowedHoliday, setAllowedHoliday] = useState("");
  const [tempHoliday, setTempHoliday] = useState("");
  const [lunchAllowed, setLunchAllowed] = useState("");
  const [idlingAllowed, setIdlingAllowed] = useState("");
  const [loginPermit, setLoginPermit] = useState("");
  const [logoutPermit, setLogoutPermit] = useState("");
  const [loginCompulsory, setLoginCompulsory] = useState("");
  const [logoutCompulsory, setLogoutCompulsory] = useState("");
  const [warning, setWarning] = useState("");
  const [serious, setSerious] = useState("");
  const [weeklyOff, setWeeklyOff] = useState("");
  const [hoursOfWork, setHoursOfWork] = useState("");

  const addUser = (e) => {
    Axios.post("http://localhost:3001/adduser", {
      salutation: salutation,
      nickName: nickName,
      surName: surName,
      firstName: firstName,
      emailId: emailId,
      skypeId: skypeId,
      mobileNo: mobileNo,
      position: position,
      department: department,
      work: work,
      ourCompany: ourCompany,
      starSquare: starSquare,
      colour: colour,
      doj: doj,
      salaryToday: salaryToday,
      currentEmailPass: currentEmailPass,
      currentSkypePass: currentSkypePass,
      calenderCode: calenderCode,
      personalMobileNo: personalMobileNo,
      address: address,
      personalEmailId: personalEmailId,
      city: city,
      birthDate: birthDate,
      pincode: pincode,
      country: country,
      photo: photo,
      beneficiaryName: beneficiaryName,
      bankName: bankName,
      bankAccount: bankAccount,
      ifscCode: ifscCode,
      paypalId: paypalId,
      password: password,
      allowedHoliday: allowedHoliday,
      tempHoliday: tempHoliday,
      lunchAllowed: lunchAllowed,
      idlingAllowed: idlingAllowed,
      loginPermit: loginPermit,
      logoutPermit: logoutPermit,
      loginCompulsory: loginCompulsory,
      logoutCompulsory: logoutCompulsory,
      warning: warning,
      serious: serious,
      weeklyOff: weeklyOff,
      hoursOfWork: hoursOfWork,
    }).then((e) => {
      console.log("success");
    });
  };

  const addLoginDetails = (e) => {
    Axios.post("http://localhost:3001/loginDetails", {
      emailId: emailId,
      password: password,
    }).then((e) => {
      console.log("success");
    });
  };

  // const [permissionDetailsId, setPermissionDetailsId] = useState("");
  const permissionDetails = () => {
    Axios.get("http://localhost:3001/permissions/details", {
      emailId: emailId,
      password: password,
    }).then((e) => {
      // setPermissionDetailsId(e.data);
      console.log(e.data);
    });
  };

  const addUserDetails = (e) => {
    addUser();
    addLoginDetails();
    permissionDetails();
    window.alert("User Added Successfully");
  };

  //-----------------------------------Drop Down-----------------------------------
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

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Add User" />
      <div className="inner-container">
        <div className="search-form">
          <div className="add-heading">
            <h3>User</h3>
            <Link to="/UserDirectory">
              {" "}
              <button className="edit-back-btn">
                {" "}
                <span>
                  <i className="bi bi-arrow-left"></i>
                </span>{" "}
                Back
              </button>
            </Link>
          </div>
          <form>
            <div className="search-input">
              <div className="search-inp">
                <label>Salutation</label>
                <input
                  type="text"
                  placeholder="Salutation"
                  onLoad={(e) => setSalutation(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Nick Name</label>
                <input
                  type="text"
                  placeholder="Nick Name"
                  onChange={(e) => setNickName(e.target.value)}
                />
              </div>

              <div className="search-inp user-surname">
                <label>Sur Name</label>
                <input
                  className="surname-inp"
                  type="text"
                  placeholder="Sur Name"
                  onChange={(e) => setSurName(e.target.value)}
                />
                <label>First Name</label>
                <input
                  className="surname-inp"
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Email Id</label>
                <input
                  type="text"
                  placeholder="Email Id"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Skype Id</label>
                <input
                  type="text"
                  placeholder="Skype Id"
                  onChange={(e) => setSkypeId(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Mobile No.</label>
                <input
                  type="text"
                  placeholder="Mobile No."
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Position</label>
                <input
                  type="text"
                  placeholder="Position"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="Department"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Work</label>
                <input
                  type="text"
                  placeholder="Work"
                  onChange={(e) => setWork(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Our Company</label>
                <select
                  className="search-select"
                  onClick={getCompanyDropDown}
                  onChange={(e) => setOurCompany(e.target.value)}
                >
                  <option>Select Our Company</option>
                  {companydropdown.map((val, key) => {
                    return (
                      <option value={val.companies_id}>
                        {val.companies_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Star / Square</label>
                <select
                  className="search-select"
                  onChange={(e) => setStarSquare(e.target.value)}
                >
                  <option>Select Symbol</option>
                  <option value="Star">Star</option>
                  <option value="Square">Square</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Colour</label>
                <select
                  className="search-select"
                  onChange={(e) => setColour(e.target.value)}
                >
                  <option>Select Colour</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="indigo">Indigo</option>
                  <option value="violet">Violet</option>
                </select>
              </div>

              <div className="search-inp">
                <label>DOJ</label>
                <input
                  type="text"
                  placeholder="DOJ"
                  onChange={(e) => setDoj(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Salary Today</label>
                <input
                  type="text"
                  placeholder="Salary Today"
                  onChange={(e) => setSalaryToday(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Current Email Password</label>
                <input
                  type="email"
                  placeholder="Current Email Password"
                  onChange={(e) => setCurrentEmailPass(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Current Skype Password</label>
                <input
                  type="text"
                  placeholder="Current Skype Password"
                  onChange={(e) => currentSkypePass(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Google Calander Embed Code</label>
                <input
                  type="text"
                  placeholder="Google Calander Embed Code"
                  onChange={(e) => setCalenderCode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/*  <input type="text" placeholder="Google Calander Embed Code" /> */}
              </div>
            </div>

            <div className="add-heading">
              <h3>Personal Details</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Personal Mobile No.</label>
                <input
                  type="text"
                  placeholder="Personal Mobile No."
                  onChange={(e) => setPersonalMobileNo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Communication Address</label>
                <input
                  type="text"
                  placeholder="Communication Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Personal Email Id</label>
                <input
                  type="email"
                  placeholder="Personal Email Id"
                  onChange={(e) => setPersonalEmailId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>DOB</label>
                <input
                  type="date"
                  placeholder="DOB"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Pincode</label>
                <input
                  type="number"
                  placeholder="Pincode"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Country</label>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  onClick={getCountryDropDown}
                >
                  <option>Select Country</option>
                  {countrydropdown.map((val, key) => {
                    return (
                      <option value={val.country_id}>{val.country_name}</option>
                    );
                  })}
                </select>
              </div>

              <div className="search-inp">
                <label>Photo</label>
                <input type="file" onChange={(e) => setPhoto(e.target.value)} />
              </div>

              <div className="search-inp">
                {/* <label>Photo</label>
                                 <input type="file"  /> */}
              </div>
            </div>

            <div className="add-heading">
              <h3>Bank Details</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Benificiary Name</label>
                <input
                  type="text"
                  placeholder="Benificiary Name"
                  onChange={(e) => setBeneficiaryName(e.target.value)}
                />
              </div>

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
                  placeholder="Bank Account No"
                  onChange={(e) => setBankAccount(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank IFSC Code</label>
                <input
                  type="text"
                  placeholder="Bank IFSC Code"
                  onChange={(e) => setIfscCode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>PayPal Id</label>
                <input
                  type="text"
                  placeholder="PayPal Id"
                  onChange={(e) => setPaypalId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/* <label>PayPal Id</label>
                                 <input type="text" placeholder="PayPal Id" /> */}
              </div>
            </div>

            <div className="add-heading">
              <h3>Password</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="add-heading">
              <h3>Attendance</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Holiday Allowed</label>
                <input
                  type="text"
                  placeholder="Holiday Allowed"
                  onChange={(e) => setAllowedHoliday(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Temporary Holiday</label>
                <input
                  type="text"
                  placeholder="Temporary Holiday"
                  onChange={(e) => setTempHoliday(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>{`Lunch Allowed (minutes)`}</label>
                <input
                  type="text"
                  placeholder="Bank Account No"
                  onChange={(e) => setLunchAllowed(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Idling Allowed</label>
                <input
                  type="text"
                  placeholder="Idling Allowed"
                  onChange={(e) => setIdlingAllowed(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Login Permitted</label>
                <input
                  type="text"
                  placeholder="Login Permitted"
                  onChange={(e) => setLoginPermit(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Logout Permitted</label>
                <input
                  type="text"
                  placeholder="Logout Permitted"
                  onChange={(e) => setLogoutPermit(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Login Compulsory</label>
                <input
                  type="text"
                  placeholder="Login Compulsory"
                  onChange={(e) => setLoginCompulsory(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Logout Compulsory</label>
                <input
                  type="text"
                  placeholder="Logout Compulsory"
                  onChange={(e) => setLogoutCompulsory(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Warning</label>
                <input
                  type="text"
                  placeholder="Warning"
                  onChange={(e) => setWarning(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Serious</label>
                <input
                  type="text"
                  placeholder="Serious"
                  onChange={(e) => setSerious(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Weekly Off</label>
                <input
                  type="text"
                  placeholder="Weekly Off"
                  onChange={(e) => setWeeklyOff(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Hours of Work</label>
                <input
                  type="text"
                  placeholder="Hours of Work"
                  onChange={(e) => setHoursOfWork(e.target.value)}
                />
              </div>
            </div>

            <div className="search-button">
              <button className="s-btn" onClick={addUserDetails}>
                Save
              </button>
            </div>
          </form>

          {/* ===== Pament Details ====== */}
        </div>
      </div>
    </div>
  );
};

export default AddUser;
