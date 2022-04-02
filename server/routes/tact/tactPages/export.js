const express = require("express");
const db = require("../../../config/db");
const router = express.Router();

//-----------------------Record list---------------------------------

router.get(
  "/getexcel/:category_selected/:status_selected/:country_selected/:company_selected/:gst_selected/:apd_selected/:waspTact",
  (req, res) => {
    const {
      category_selected,
      status_selected,
      country_selected,
      company_selected,
      gst_selected,
      apd_selected,
      waspTact,
    } = req.params;
    db.query(
      "SELECT contact_person, email_id, secondry_email_id, mobile_one, mobile_two, company_name, salutation, skype, website, note, address_one, address_two, city, pin_zip_code, project_manager, country, bank_name, bank_account_no, ifsc_code, bank_detail, bank_address, swift_code, tact_paypal, money_booker, other_pay_option, bill_indian, bill_foreign, gst_applicable, limit_allot, show_in_tact, approved_disapproved, source, our_company FROM `guru_tact_tbl` WHERE (category = ?, status = ?, country = ?, our_company = ?, gst_applicable = ?, approved_disapproved = ?, show_in_tact = ?)",
      [
        category_selected,
        status_selected,
        country_selected,
        company_selected,
        gst_selected,
        apd_selected,
        waspTact,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  }
);

module.exports = router;
