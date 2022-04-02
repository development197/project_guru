const express = require("express");
const db = require("../../../config/db");
const router = express.Router();

//--------------------------------Add tact----------------------------------
router.post("/addtact", (req, res) => {
  const enteredBy = req.body.enteredBy;
  const category = req.body.category;
  const status = req.body.status;
  const country = req.body.country;
  const ourCompany = req.body.ourCompany;
  const companyName = req.body.companyName;
  const salutation = req.body.salutation;
  const contactPerson = req.body.contactPerson;
  const emailId = req.body.emailId;
  const secondaryEmail = req.body.secondaryEmail;
  const mobileNo1 = req.body.mobileNo1;
  const mobileNo2 = req.body.mobileNo2;
  const skype = req.body.skype;
  const website = req.body.website;
  const note = req.body.note_wasp;
  const cv = req.body.cv;
  const addressLine1 = req.body.addressLine1;
  const addressLine2 = req.body.addressLine2;
  const city = req.body.city;
  const pinCode = req.body.pinCode;
  const projectManager = req.body.projectManager;
  const source = req.body.source;
  const bankName = req.body.bankName;
  const bankAccountNo = req.body.bankAccountNo;
  const ifscCode = req.body.ifscCode;
  const bankDetails = req.body.bankDetails;
  const bankAddress = req.body.bankAddress;
  const swiftCode = req.body.swiftCode;
  const paypalId = req.body.paypalId;
  const moneyBooker = req.body.moneyBooker;
  const currency = req.body.currency;
  const minBillIndia = req.body.minBillIndia;
  const minBillForeign = req.body.minBillForeign;
  const gstApplicable = req.body.gstApplicable;
  const allotedLimit = req.body.allotedLimit;
  const waspTact = req.body.waspTact;
  const approvDisapprov = req.body.approvDisapprov;

  db.query(
    `INSERT INTO guru_tact_tbl(entered_by, category, status, country, our_company, company_name, salutation, contact_person, email_id, secondary_email_id, mobile_one, mobile_two, skype, website, note, attach_cv, address_one, address_two, city, pin_zip_code, project_manager, source, bank_name, bank_account_no, ifsc_code, bank_detail, bank_address, swift_code, tact_paypal, money_booker, tact_currency, bill_indian, bill_foreign, limit_allot, gst_applicable, show_in_tact, approved_disapproved) VALUES (${enteredBy}, ${category}, ${status}, ${country}, ${ourCompany}, ${companyName}, ${salutation}, ${contactPerson}, ${emailId}, ${secondaryEmail}, ${mobileNo1}, ${mobileNo2}, ${skype}, ${website}, ${note}, ${cv}, ${addressLine1}, ${addressLine2}, ${city}, ${pinCode}, ${projectManager}, ${source}, ${bankName}, ${bankAccountNo}, ${ifscCode}, ${bankDetails}, ${bankAddress}, ${swiftCode}, ${paypalId}, ${moneyBooker}, ${currency}, ${minBillIndia}, ${minBillForeign}, ${allotedLimit}, ${gstApplicable}, ${waspTact}, ${approvDisapprov})`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
