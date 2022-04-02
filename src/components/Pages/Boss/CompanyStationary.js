import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import Axios from "axios";

const CompanyStationary = () => {
  const [inactive, setInactive] = useState(false);
  const [companylist, setCompanylist] = useState([]);

  const getCompany = () => {
    Axios.get("http://localhost:3001/companylist").then((response) => {
      setCompanylist(response.data);
    });
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={getCompany}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className="stationary-header">
        <div className="stationary-heading">
          <h1>OUR COMPANY & STATIONARY</h1>
        </div>
        <div className="stationary-btn">
          <Link to="/OurCompany" className="s-btn">
            {" "}
            <span>
              <i className="bi bi-plus"></i>
            </span>{" "}
            Add New Company
          </Link>
        </div>
      </div>
      <div className="inner-container">
        <div className="stationary-table">
          <table>
            <thead>
              <tr>
                <th className="st-bg">S.No.</th>
                <th className="st-bg">Company Name</th>
                <th className="st-bg">Contact Person</th>
                <th className="st-bg">Mobile No.</th>
                <th className="st-bg">Website</th>
                <th className="st-bg">Action</th>
                <th className="st-bg">Master</th>
              </tr>
            </thead>
            <tbody>
              {companylist.map((val, key) => {
                return (
                  <tr>
                    <td>{val.serial_number}</td>
                    <td>{val.companies_name}</td>
                    <td>{val.person_default}</td>
                    <td>{val.mobile_default}</td>
                    <td>{val.website}</td>
                    <td>
                      <Link
                        to="/EditCompanyStationary"
                        state={{
                          companies_id: val.companies_id,
                          companyName: val.companies_name,
                          quotation_header: val.quotation_header,
                          quotation_footer: val.quotation_footer,
                          invoice_header: val.invoice_header,
                          invoice_footer: val.invoice_footer,
                          company_logo: val.company_logo,
                          company_icon: val.company_icon,
                          signature_image: val.signature_image,
                          contact_person: val.person_default,
                          email_id: val.work_email_id,
                          skype_id: val.skype_default,
                          address: val.address_default,
                          mobile_no: val.mobile_default,
                          invoice_prefix: val.invoice_prefix,
                          quotation_prefix: val.quotation_prefix,
                          website: val.website,
                          price_addition: val.price_addition,
                          beneficiary_name: val.beneficiary_name,
                          bank_name: val.bank_name,
                          bank_account: val.account_number,
                          ifsc_code: val.company_ifsc_code,
                          bank_address: val.bank_address,
                          other_info: val.company_other_information,
                          paypal: val.company_paypal,
                          skill: val.company_skrill,
                        }}
                      >
                        {" "}
                        <i class="bi bi-pencil-square"></i>{" "}
                      </Link>
                    </td>
                    <td>
                      <input type="radio" />
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

export default CompanyStationary;
