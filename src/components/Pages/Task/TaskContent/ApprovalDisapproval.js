import React from "react";
import { useLocation } from "react-router-dom";

const ApprovalDisapproval = () => {
  const {
    state: {
      contactPerson,
      emailId,
      status,
      company,
      countryName,
      category,
      mobileNo1,
      ourCompany,
      note_wasp,
      skype,
      website,
      waspTact,
    },
  } = useLocation();

  console.log(
    contactPerson +
      "," +
      emailId +
      "," +
      status +
      "," +
      company +
      "," +
      countryName +
      "," +
      category +
      "," +
      mobileNo1 +
      "," +
      ourCompany +
      "," +
      note_wasp +
      "," +
      skype +
      "," +
      website +
      "," +
      waspTact
  );

  return (
    <div className="inner-container">
      <div className="approval-text">
        <h2>Approval for Client</h2>
      </div>
      <div className="remainder__tabel">
        <table>
          <thead>
            <tr>
              <th className="st-bg">S. No.</th>
              <th className="st-bg">Contact Person</th>
              <th className="st-bg">Email Id</th>
              <th className="st-bg">Company Name</th>
              <th className="st-bg">Country</th>
              <th className="st-bg">Mobile</th>
              <th className="st-bg">Skype</th>
              <th className="st-bg">Website</th>
              <th className="st-bg">Notes</th>
              <th className="st-bg">Request Id</th>
              <th className="st-bg">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovalDisapproval;
