import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const EditUser = () => {
  const [inactive, setInactive] = useState(false);

  const [hide, setHide] = useState(false);

  const [countrydropdown, setCountryDropdown] = useState([]);
  const [ourcompanyList, setOurCompanyList] = useState([]);

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

  const {
    state: {
      salutation,
      user_id,
      subuser_name,
      subuser_position,
      subuser_paypal_id,
      skype_password,
      current_email_password,
      star_and_square,
      email_id,
      password,
      colour,
      work,
      sur_name,
      nick_name,
      subuser_mobile,
      subuser_skype,
      subuser_photo,
      subuser_calender_code,
      department,
      sub_user_our_company,
      companies_id,
      subuser_doj,
      salary_today,
      subuser_personal_mobile,
      subuser_city,
      subuser_pincode,
      subuser_country,
      country_code,
      subuser_personal_email,
      comm_address,
      logout_compulsary,
      hour_work,
      weekly_off,
      serious,
      warning,
      login_compulsary,
      logout_permit,
      login_permit,
      idling_allowed,
      lunch_allowed,
      temporary_holiday,
      holiday_allowed,
      subuser_dob,
      subuser_benficiary_name,
      subuser_bank_name,
      subuser_account_number,
      subuser_ifsc_code,
    },
  } = useLocation();

  const [editUserId, setEditUserId] = useState(user_id);
  const [editSalutation, setEditSalutation] = useState(salutation);
  const [editSubuserName, setEditSubuserName] = useState(subuser_name);
  const [editSubuserPosition, setEditSubuserPosition] =
    useState(subuser_position);
  const [editSubuserPaypalId, setEditSubuserPaypalId] =
    useState(subuser_paypal_id);
  const [editSkypePassword, setEditSkypePassword] = useState(skype_password);
  const [editCurrentEmailPassword, setEditCurrentEmailPassword] = useState(
    current_email_password
  );
  const [editStarAndSquare, setEditStarAndSquare] = useState(star_and_square);
  const [editEmailId, setEditEmailId] = useState(email_id);
  const [editPassword, setEditPassword] = useState(password);
  const [editConfirmPassword, setEditConfirmPassword] = useState("");
  const [editColour, setEditColour] = useState(colour);
  const [editWork, setEditWork] = useState(work);
  const [editSurName, setEditSurName] = useState(sur_name);
  const [editNickName, setEditNickName] = useState(nick_name);
  const [editSubuserMobile, setEditSubuserMobile] = useState(subuser_mobile);
  const [editSubuserSkype, setEditSubuserSkype] = useState(subuser_skype);
  const [editSubuserPhoto, setEditSubuserPhoto] = useState(subuser_photo);
  const [editSubuserCalenderCode, setEditSubuserCalenderCode] = useState(
    subuser_calender_code
  );
  const [editDepartment, setEditDepartment] = useState(department);
  // const [editSubUserOurCompany, setEditSubUserOurCompany] =
  //   useState(sub_user_our_company);
  const [editCompaniesId, setEditCompaniesId] = useState(companies_id);
  const [editSubuserDoj, setEditSubuserDoj] = useState(subuser_doj);
  const [editSalaryToday, setEditSalaryToday] = useState(salary_today);
  const [editSubuserPersonalMobile, setEditSubuserPersonalMobile] = useState(
    subuser_personal_mobile
  );
  const [editSubuserCity, setEditSubuserCity] = useState(subuser_city);
  const [editSubuserPincode, setEditSubuserPincode] = useState(subuser_pincode);
  // const [editSubuserCountry, setEditSubuserCountry] = useState(subuser_country);
  const [editCountryCode, setEditCountryCode] = useState(country_code);
  const [editSubuserPersonalEmail, setEditSubuserPersonalEmail] = useState(
    subuser_personal_email
  );
  const [editCommAddress, setEditCommAddress] = useState(comm_address);
  const [editLogoutCompulsary, setEditLogoutCompulsary] =
    useState(logout_compulsary);
  const [editHourWork, setEditHourWork] = useState(hour_work);
  const [editWeeklyOff, setEditWeeklyOff] = useState(weekly_off);
  const [editSerious, setEditSerious] = useState(serious);
  const [editWarning, setEditWarning] = useState(warning);
  const [editLoginCompulsary, setEditLoginCompulsary] =
    useState(login_compulsary);
  const [editLogoutPermit, setEditLogoutPermit] = useState(logout_permit);
  const [editLoginPermit, setEditLoginPermit] = useState(login_permit);
  const [editIdlingAllowed, setEditIdlingAllowed] = useState(idling_allowed);
  const [editLunchAllowed, setEditLunchAllowed] = useState(lunch_allowed);
  const [editTemporaryHoliday, setEditTemporaryHoliday] =
    useState(temporary_holiday);
  const [editHolidayAllowed, setEditHolidayAllowed] = useState(holiday_allowed);
  const [editSubuserDob, setEditSubuserDob] = useState(subuser_dob);
  const [editSubuserBenficiaryName, setEditSubuserBenficiaryName] = useState(
    subuser_benficiary_name
  );
  const [editSubuserBankName, setEditSubuserBankName] =
    useState(subuser_bank_name);
  const [editSubuserAccountNumber, setEditSubuserAccountNumber] = useState(
    subuser_account_number
  );
  const [editSubuserIfscCode, setEditSubuserIfscCode] =
    useState(subuser_ifsc_code);

  const updateUser = (editUserId) => {
    Axios.put(`http://localhost:3001/update/userDetails/${editUserId}`, {
      editSalutation: editSalutation,
      editSubuserName: editSubuserName,
      editSubuserPosition: editSubuserPosition,
      editSubuserPaypalId: editSubuserPaypalId,
      editSkypePassword: editSkypePassword,
      editCurrentEmailPassword: editCurrentEmailPassword,
      editStarAndSquare: editStarAndSquare,
      // editEmailId: editEmailId,
      editPassword: editPassword,
      editConfirmPassword: editConfirmPassword,
      editColour: editColour,
      editWork: editWork,
      editSurName: editSurName,
      editNickName: editNickName,
      editSubuserMobile: editSubuserMobile,
      editSubuserSkype: editSubuserSkype,
      editSubuserPhoto: editSubuserPhoto,
      editSubuserCalenderCode: editSubuserCalenderCode,
      editDepartment: editDepartment,
      editCompaniesId: editCompaniesId,
      editSubuserDoj: editSubuserDoj,
      editSalaryToday: editSalaryToday,
      editSubuserPersonalMobile: editSubuserPersonalMobile,
      editSubuserCity: editSubuserCity,
      editSubuserPincode: editSubuserPincode,
      editCountryCode: editCountryCode,
      editSubuserPersonalEmail: editSubuserPersonalEmail,
      editCommAddress: editCommAddress,
      editLogoutCompulsary: editLogoutCompulsary,
      editHourWork: editHourWork,
      editWeeklyOff: editWeeklyOff,
      editSerious: editSerious,
      editWarning: editWarning,
      editLoginCompulsary: editLoginCompulsary,
      editLogoutPermit: editLogoutPermit,
      editLoginPermit: editLoginPermit,
      editIdlingAllowed: editIdlingAllowed,
      editLunchAllowed: editLunchAllowed,
      editTemporaryHoliday: editTemporaryHoliday,
      editHolidayAllowed: editHolidayAllowed,
      editSubuserDob: editSubuserDob,
      editSubuserBenficiaryName: editSubuserBenficiaryName,
      editSubuserBankName: editSubuserBankName,
      editSubuserAccountNumber: editSubuserAccountNumber,
      editSubuserIfscCode: editSubuserIfscCode,
    }).then((response) => {
      console.log("success");
      window.alert("user successfully updated");
    });
  };

  const updateUserLoginDetails = (editUserId) => {
    Axios.put(`http://localhost:3001/update/user/Login/${editUserId}`, {
      editEmailId: editEmailId,
      editPassword: editPassword,
    }).then((response) => {
      window.alert("user successfully updated");
      console.log("success login");
    });
  };

  const update = (editUserId) => {
    if (editConfirmPassword.length > 0) {
      if (editPassword != editConfirmPassword) {
        window.alert("Password and confirm password does not match");
      } else {
        updateUser(editUserId);
        updateUserLoginDetails(editUserId);
      }
    }
    // else {
    //   updateUser(editUserId);
    //   updateUserLoginDetails(editUserId);
    // }
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Edit User" />
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
                  defaultValue={salutation}
                  id="salutation"
                  onChange={(e) => setEditSalutation(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Nick Name</label>
                <input
                  type="text"
                  placeholder="Nick Name"
                  defaultValue={nick_name}
                  onChange={(e) => setEditNickName(e.target.value)}
                />
              </div>

              <div className="search-inp user-surname">
                <label>Sur Name</label>
                <input
                  type="text"
                  placeholder="Sur Name"
                  className="surname-inp"
                  defaultValue={sur_name}
                  onChange={(e) => setEditSurName(e.target.value)}
                />
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="surname-inp"
                  defaultValue={subuser_name}
                  onChange={(e) => setEditSubuserName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Email Id</label>
                <input
                  type="text"
                  placeholder="Email Id"
                  defaultValue={email_id}
                  onChange={(e) => setEditEmailId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Skype Id</label>
                <input
                  type="text"
                  placeholder="Skype Id"
                  defaultValue={subuser_skype}
                  onChange={(e) => setEditSubuserSkype(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Mobile No.</label>
                <input
                  type="text"
                  placeholder="Mobile No."
                  defaultValue={subuser_mobile}
                  onChange={(e) => setEditSubuserMobile(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Position</label>
                <input
                  type="text"
                  placeholder="Position"
                  defaultValue={subuser_position}
                  onChange={(e) => setEditSubuserPosition(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="Department"
                  defaultValue={department}
                  onChange={(e) => setEditDepartment(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Work</label>
                <input
                  type="text"
                  placeholder="Work"
                  defaultValue={work}
                  onChange={(e) => setEditWork(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Our Company</label>
                <select
                  className="search-select"
                  onClick={getOurCompanyList}
                  onChange={(e) => setEditCompaniesId(e.target.value)}
                >
                  {companies_id === "" ? (
                    <option>Select Company</option>
                  ) : (
                    <option value={companies_id}>{sub_user_our_company}</option>
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
                <label>Star / Square</label>
                <select
                  className="search-select"
                  defaultValue={star_and_square}
                  onChange={(e) => setEditStarAndSquare(e.target.value)}
                >
                  <option value="st">Star</option>
                  <option value="sq">Square</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Color</label>
                <select
                  className="search-select"
                  defaultValue={colour}
                  onChange={(e) => setEditColour(e.target.value)}
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
                  defaultValue={subuser_doj}
                  onChange={(e) => setEditSubuserDoj(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Salary Today</label>
                <input
                  type="text"
                  placeholder="Salary Today"
                  defaultValue={salary_today}
                  onChange={(e) => setEditSalaryToday(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Current Email Password</label>
                <input
                  type="text"
                  placeholder="Current Email Password"
                  defaultValue={current_email_password}
                  onChange={(e) => setEditCurrentEmailPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Current Skype Password</label>
                <input
                  type="text"
                  placeholder="Current Skype Password"
                  defaultValue={skype_password}
                  onChange={(e) => setEditSkypePassword(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Google Calander Embed Code</label>
                <input
                  type="text"
                  placeholder="Google Calander Embed Code"
                  defaultValue={subuser_calender_code}
                  onChange={(e) => setEditSubuserCalenderCode(e.target.value)}
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
                  defaultValue={subuser_personal_mobile}
                  onChange={(e) => setEditSubuserPersonalMobile(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Communication Address</label>
                <input
                  type="text"
                  placeholder="Communication Address"
                  defaultValue={comm_address}
                  onChange={(e) => setEditCommAddress(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Personal Email Id</label>
                <input
                  type="text"
                  placeholder="Personal Email Id"
                  defaultValue={subuser_personal_email}
                  onChange={(e) => setEditSubuserPersonalEmail(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  defaultValue={subuser_city}
                  onChange={(e) => setEditSubuserCity(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>DOB</label>
                <input
                  type="date"
                  placeholder="DOB"
                  defaultValue={subuser_dob}
                  onChange={(e) => setEditSubuserDob(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Pincode</label>
                <input
                  type="number"
                  placeholder="Pincode"
                  defaultValue={subuser_pincode}
                  onChange={(e) => setEditSubuserPincode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Country</label>
                <select
                  onClick={getCountry}
                  onChange={(e) => setEditCountryCode(e.target.value)}
                >
                  {country_code === "" ? (
                    <option>Select Country</option>
                  ) : (
                    <option defaultValue={country_code}>
                      {subuser_country}
                    </option>
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
                <label>Photo</label>
                <img
                  src={subuser_photo}
                  onChange={(e) => setEditSubuserPhoto(e.target.files[0])}
                />
                <input type="file" className="photo-inp-file" />
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
                  defaultValue={subuser_benficiary_name}
                  onChange={(e) => setEditSubuserBenficiaryName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Name</label>
                <input
                  type="text"
                  placeholder="Bank Name"
                  defaultValue={subuser_bank_name}
                  onChange={(e) => setEditSubuserBankName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Account No.</label>
                <input
                  type="text"
                  placeholder="Bank Account No"
                  defaultValue={subuser_account_number}
                  onChange={(e) => setEditSubuserAccountNumber(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank IFSC Code</label>
                <input
                  type="text"
                  placeholder="Bank IFSC Code"
                  defaultValue={subuser_ifsc_code}
                  onChange={(e) => setEditSubuserIfscCode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>PayPal Id</label>
                <input
                  type="text"
                  placeholder="PayPal Id"
                  defaultValue={subuser_paypal_id}
                  onChange={(e) => setEditSubuserPaypalId(e.target.value)}
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
                  defaultValue={password}
                  onChange={(e) => setEditPassword(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setEditConfirmPassword(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/* <label>Confirm Password</label>
                                 <input type="password" placeholder="Password" /> */}
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
                  defaultValue={holiday_allowed}
                  onChange={(e) => setEditHolidayAllowed(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Temporary Holiday</label>
                <input
                  type="text"
                  placeholder="Temporary Holiday"
                  defaultValue={temporary_holiday}
                  onChange={(e) => setEditTemporaryHoliday(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>{`Lunch Allowed (minutes)`}</label>
                <input
                  type="text"
                  placeholder="Lunch time"
                  defaultValue={lunch_allowed}
                  onChange={(e) => setEditLunchAllowed(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Idling Allowed</label>
                <input
                  type="text"
                  placeholder="Idling Allowed"
                  defaultValue={idling_allowed}
                  onChange={(e) => setEditIdlingAllowed(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Login Permitted</label>
                <input
                  type="text"
                  placeholder="Login Permitted"
                  defaultValue={login_permit}
                  onChange={(e) => setEditLoginPermit(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Logout Permitted</label>
                <input
                  type="text"
                  placeholder="Logout Permitted"
                  defaultValue={logout_permit}
                  onChange={(e) => setEditLogoutPermit(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Login Compulsory</label>
                <input
                  type="text"
                  placeholder="Login Compulsory"
                  defaultValue={login_compulsary}
                  onChange={(e) => setEditLoginCompulsary(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Logout Compulsory</label>
                <input
                  type="text"
                  placeholder="Logout Compulsory"
                  defaultValue={logout_compulsary}
                  onChange={(e) => setEditLogoutCompulsary(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Warning</label>
                <input
                  type="text"
                  placeholder="Warning"
                  defaultValue={warning}
                  onChange={(e) => setEditWarning(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Serious</label>
                <input
                  type="text"
                  placeholder="Serious"
                  defaultValue={serious}
                  onChange={(e) => setEditSerious(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Weekly Off</label>
                <input
                  type="text"
                  placeholder="Weekly Off"
                  defaultValue={weekly_off}
                  onChange={(e) => setEditWeeklyOff(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Hours of Work</label>
                <input
                  type="text"
                  placeholder="Hours of Work"
                  defaultValue={hour_work}
                  onChange={(e) => setEditHourWork(e.target.value)}
                />
              </div>
            </div>
            <div className="search-button">
              <button className="s-btn" onClick={() => update(editUserId)}>
                update
              </button>
            </div>
          </form>

          {/* ===== Pament Details ====== */}
        </div>
      </div>
    </div>
  );
};

export default EditUser;
