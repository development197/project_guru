import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import { Link } from "react-router-dom";
import Axios from "axios";

const UserDirectory = () => {
  const [inactive, setInactive] = useState(false);
  const [userlist, setUserlist] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3001/user").then((response) => {
      setUserlist(response.data);
    });
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getUsers}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />

      <OnceHeader heading="User Directory" />

      <div className="inner-container">
        <div className="add-user-btn">
          <Link to="/AddUser" className="user-btn">
            <span>
              <i className="bi bi-plus"></i>
            </span>
            ADD USER
          </Link>
        </div>
        <div className="user-directory-table">
          <table>
            <thead>
              <tr>
                <th className="st-bg">S.No.</th>
                <th className="st-bg">Name</th>
                <th className="st-bg">Email ID</th>
                <th className="st-bg">Skype ID</th>
                <th className="st-bg">Mobile No.</th>
                <th className="st-bg">Position</th>
                <th className="st-bg">Action</th>
              </tr>
            </thead>
            <tbody>
              {userlist.map((val, key) => {
                return (
                  <tr>
                    <td>{val.serial_number}</td>
                    <td>{val.name_subuser}</td>
                    <td>{val.user_email}</td>
                    <td>{val.subuser_skype}</td>
                    <td>{val.subuser_mobile}</td>
                    <td>{val.subuser_position}</td>
                    <td>
                      <Link
                        to="/EditUser"
                        state={{
                          user_id: val.user_id,
                          salutation: val.salutation,
                          nick_name: val.nick_name,
                          sur_name: val.sur_name,
                          subuser_name: val.name_subuser,
                          email_id: val.user_email,
                          password: val.user_password,
                          subuser_skype: val.subuser_skype,
                          subuser_mobile: val.subuser_mobile,
                          subuser_position: val.subuser_position,
                          department: val.department,
                          work: val.work,
                          sub_user_our_company: val.companies_name,
                          companies_id: val.companies_id,
                          star_and_square: val.star_and_square,
                          colour: val.colour,
                          subuser_doj: val.subuser_doj,
                          salary_today: val.salary_today,
                          current_email_password: val.current_email_password,
                          skype_password: val.skype_password,
                          subuser_calender_code: val.subuser_calender_code,
                          subuser_personal_mobile: val.subuser_personal_mobile,
                          comm_address: val.comm_address,
                          subuser_personal_email: val.subuser_personal_email,
                          subuser_city: val.subuser_city,
                          subuser_dob: val.subuser_dob,
                          subuser_pincode: val.subuser_pincode,
                          subuser_country: val.country_name,
                          country_code: val.country_code,
                          subuser_photo: val.subuser_photo,
                          subuser_benficiary_name: val.subuser_benficiary_name,
                          subuser_bank_name: val.subuser_bank_name,
                          subuser_account_number: val.subuser_account_number,
                          subuser_ifsc_code: val.subuser_ifsc_code,
                          subuser_paypal_id: val.subuser_paypal_id,
                          idling_allowed: val.idling_allowed,
                          lunch_allowed: val.lunch_allowed,
                          temporary_holiday: val.temporary_holiday,
                          holiday_allowed: val.holiday_allowed,
                          logout_compulsary: val.logout_compulsary,
                          login_compulsary: val.login_compulsary,
                          logout_permit: val.logout_permit,
                          login_permit: val.login_permit,
                          hour_work: val.hour_work,
                          weekly_off: val.weekly_off,
                          serious: val.serious,
                          warning: val.warning,

                          // subuser_company: val.subuser_company,
                          // directory_staff_colour: val.directory_staff_colour,
                          // directory_staff_work: val.directory_staff_work,
                          // subuser_address_one: val.subuser_address_one,
                          // subuser_address_two: val.subuser_address_two,
                          // subuser_submit: val.subuser_submit,
                          // added_date: val.added_date,
                          // status: val.status,
                        }}
                      >
                        {" "}
                        <i className="bi bi-pencil-square"></i>{" "}
                      </Link>
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

export default UserDirectory;
