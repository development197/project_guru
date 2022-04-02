const express = require("express");
const db = require("../config/db");
//const { validateToken } = require("../middleWares/authMiddleWare");
const router = express.Router();

//---------------------------------Wasp Client List----------------------------------
//WHERE tact_id BETWEEN '1' AND '1000'
// SELECT t.tact_id, t.company_name, t.contact_person, t.mobile_one, t.email_id, co.country_name, ct.country_timezone, t.country, c.companies_name, t.our_company, t.note, t.project_manager, t.limit_allot, t.show_in_tact, t.approved_by, t.status FROM guru_tact_tbl t LEFT JOIN guru_companies_tbl c ON t.our_company = c.companies_id LEFT JOIN guru_country_timezone_tbl ct ON t.country = ct.country_timezone_name LEFT JOIN guru_country_tbl co ON ct.country_timezone_name = co.country_code;
// SELECT tact_id,company_name, contact_person, mobile_one, email_id, country, our_company, note, project_manager, limit_allot, show_in_tact, approved_by, status FROM guru_tact_tbl WHERE company_name LIKE '%' ? '%' OR contact_person LIKE '%' ? '%' OR mobile_one LIKE '%' ? '%' OR email_id LIKE '%' ? '%' OR country LIKE '%' ? '%' OR our_company LIKE '%' ? '%' AND status = '1'

router.post("/waspclient", (req, res) => {
  const data = req.body.testData;
  db.query(
    "SELECT t.tact_id, t.company_name, t.contact_person, t.mobile_one, t.email_id, co.country_name, ct.country_timezone, t.country, c.companies_name, t.our_company, t.note, t.project_manager, t.limit_allot, t.show_in_tact, t.approved_by, s.status_name, t.tact_status, t.approved_disapproved FROM guru_tact_tbl t LEFT JOIN guru_companies_tbl c ON t.our_company = c.companies_id LEFT JOIN guru_country_timezone_tbl ct ON t.country = ct.country_timezone_name LEFT JOIN guru_country_tbl co ON ct.country_timezone_name = co.country_code LEFT JOIN guru_status_tbl s ON t.tact_status = s.status_id WHERE t.company_name LIKE '%' ? '%' OR t.contact_person LIKE '%' ? '%' OR t.mobile_one LIKE '%' ? '%' OR t.email_id LIKE '%' ? '%' OR t.country LIKE '%' ? '%' OR t.our_company LIKE '%' ? '%' AND t.status = '1'",
    [data, data, data, data, data, data],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        //console.log("success");
      }
    }
  );
});

//-------------------------------New Enquiry----------------------------------
router.post(`/enquirydata/:tact_id`, (req, res) => {
  const { tact_id } = req.params;

  db.query(
    "SELECT ce.*, l.language_name, w.work_type, co.companies_name FROM guru_client_enquiry_tbl ce LEFT JOIN guru_language_tbl l ON l.language_id = ce.client_enquiry_source_lang LEFT JOIN guru_work_type_tbl w ON ce.client_enquiry_service_type = w.work_type_id LEFT JOIN guru_companies_tbl co ON ce.enquiry_company = co.companies_id WHERE ce.tact_id = ? AND ce.status = '1'",
    [tact_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result[0].language_name);
      }
    }
  );
});

//-------------------------------New Client----------------------------------

router.post("/waspNewClient", (req, res) => {
  const contactPerson = req.body.contactPerson;
  const emailId = req.body.emailId;
  const status = req.body.status;
  const company = req.body.company;
  const countryName = req.body.countryName;
  const category = req.body.category;
  const mobileNo1 = req.body.mobileNo1;
  const ourCompany = req.body.ourCompany;
  const note = req.body.note;
  const skype = req.body.skype;
  const website = req.body.website;
  const waspTact = req.body.waspTact;

  db.query(
    "INSERT INTO guru_tact_tbl (contact_person, email_id, tact_status, company_name, country, category, mobile_one, our_company, note, skype, website, show_in_tact) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      contactPerson,
      emailId,
      status,
      company,
      countryName,
      category,
      mobileNo1,
      ourCompany,
      note,
      skype,
      website,
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
});

router.get(`/wasp/update/client/:tact_id`, (req, res) => {
  const { tact_id } = req.params;

  db.query(
    "SELECT t.*, s.status_name, co.country_name, ca.category_name, c.companies_name FROM guru_tact_tbl t LEFT JOIN guru_companies_tbl c ON t.our_company = c.companies_id LEFT JOIN guru_status_tbl s ON s.status_id = t.status LEFT JOIN guru_category_tbl ca ON t.category = ca.category_id LEFT JOIN guru_country_tbl co ON t.country = co.country_code WHERE t.tact_id = ?",
    [tact_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put(`/edit/client/:updateId`, (req, res) => {
  const { updateId } = req.params;
  const contactPerson = req.body.contactPerson;
  const emailId = req.body.emailId;
  const status = req.body.status;
  const company = req.body.company;
  const countryName = req.body.countryName;
  const category = req.body.category;
  const mobileNo1 = req.body.mobileNo1;
  const ourCompany = req.body.ourCompany;
  const note = req.body.note;
  const skype = req.body.skype;
  const website = req.body.website;
  const w_t = req.body.w_t;

  db.query(
    "UPDATE guru_tact_tbl SET contact_person = ?, email_id = ?, tact_status = ?, company_name = ?, country = ?, category = ?, mobile_one = ?, our_company = ?, note = ?, skype = ?, website = ?, show_in_tact = ? WHERE tact_id = ?",
    [
      contactPerson,
      emailId,
      status,
      company,
      countryName,
      category,
      mobileNo1,
      ourCompany,
      note,
      skype,
      website,
      w_t,
      updateId,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//----------------------Send Approval----------------------------------

router.post("/waspNewClient", (req, res) => {
  const contactPerson = req.body.contactPerson;
  const emailId = req.body.emailId;
  const status = req.body.status;
  const company = req.body.company;
  const countryName = req.body.countryName;
  const category = req.body.category;
  const mobileNo1 = req.body.mobileNo1;
  const ourCompany = req.body.ourCompany;
  const note = req.body.note;
  const skype = req.body.skype;
  const website = req.body.website;
  const waspTact = req.body.waspTact;

  db.query(
    "INSERT INTO guru_tact_tbl (contact_person, email_id, tact_status, company_name, country, category, mobile_one, our_company, note, skype, website, show_in_tact, approved_disapproved) VALUES (?,?,?,?,?,?,?,?,?,?,?,?, 'D')",
    [
      contactPerson,
      emailId,
      status,
      company,
      countryName,
      category,
      mobileNo1,
      ourCompany,
      note,
      skype,
      website,
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
});

//-------------------------------Green Section----------------------------------
router.post("/submission", (req, res) => {
  const finalFile = req.files.finalFile;
  const propertyChange = req.files.propertyChange;
  const clientsPO = req.files.clientsPO;
  const measure = req.body.measure;
  const quantity = req.body.quantity;
  const offeredRate = req.body.offeredRate;
  const currency = req.body.currency;
  const taxes = req.body.taxes;
  const invoiceAmount = req.body.invoiceAmount;
  const notes = req.body.notes;
  const letterType = req.body.letterType;

  db.query(
    "INSERT INTO green_submission (final_file, property_change, clients_po, measure_name, quantity, offered_rate, currency_name, taxes, invoice_amount, notes, letter_type) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [
      finalFile,
      propertyChange,
      clientsPO,
      measure,
      quantity,
      offeredRate,
      currency,
      taxes,
      invoiceAmount,
      notes,
      letterType,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/resubmission", (req, res) => {
  const comments = req.files.comments;
  const uploadFile = req.files.uploadFile;
  const cancelPropertyChange = req.files.cancelPropertyChange;
  const cancelLetterType = req.body.cancelLetterType;

  db.query(
    "INSERT INTO green_resubmission_cancel (comments, file, property_change, letter_type) VALUES (?,?,?,?)",
    [comments, uploadFile, cancelPropertyChange, cancelLetterType],
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
