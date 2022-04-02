const express = require("express");
const db = require("../../../config/db");
const router = express.Router();

router.post("/searchTact", (req, res) => {
  const category = req.body.category;
  const status = req.body.status;
  const country = req.body.country;
  const ourCompany = req.body.ourCompany;
  const codes = req.body.codes;
  const email = req.body.email;
  const ratingFrom = req.body.ratingFrom;
  const ratingTo = req.body.ratingTo;
  const waspTact = req.body.waspTact;
  const sourceLang = req.body.sourceLang;
  const targetLang = req.body.targetLang;
  //const keyword = req.body.keyword;

  console.log(
    category +
      " " +
      status +
      " " +
      country +
      " " +
      ourCompany +
      " " +
      codes +
      " " +
      email +
      " " +
      ratingFrom +
      " " +
      ratingTo +
      " " +
      waspTact +
      " " +
      sourceLang +
      " " +
      targetLang
  );
  db.query(
    "SELECT t.company_name, t.email_id, t.mobile_one, t.show_in_tact, sub.name_subuser, w.work_rate,  ct.category_name, s.status_name, c.country_name, tz.country_timezone, co.companies_name, cod.code_name, l.language_name FROM guru_tact_tbl t LEFT JOIN guru_work_info_tbl w ON t.tact_id = w.tact_id LEFT JOIN guru_category_tbl ct ON t.category = ct.category_id LEFT JOIN guru_status_tbl s ON t.tact_status = s.status_id LEFT JOIN guru_country_tbl c ON t.country = c.country_code LEFT JOIN guru_companies_tbl co ON t.our_company = co.companies_id LEFT JOIN guru_codes_tbl cod ON w.code = cod.code_name LEFT JOIN guru_language_tbl l ON w.target = l.language_id LEFT JOIN guru_country_timezone_tbl tz ON t.country = tz.country_timezone_name LEFT JOIN guru_subuser_tbl sub ON t.updated_by = sub.user_id WHERE t.category = ? OR t.tact_status = ? OR t.country = ? OR t.our_company = ? OR w.code = ? OR t.email_id = ? OR w.rating BETWEEN ? AND ? OR t.show_in_tact = ? OR w.source = ? OR w.target = ?",
    [
      category,
      status,
      country,
      ourCompany,
      codes,
      email,
      ratingFrom,
      ratingTo,
      waspTact,
      sourceLang,
      targetLang,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log("result");
      }
    }
  );
});

// SELECT t.*, w.*, ct.category_name, s.status_name, c.country_name, tz.country_timezone, co.companies_name, cod.code_name, l.language_name FROM guru_tact_tbl t LEFT JOIN guru_work_info_tbl w ON t.tact_id = w.tact_id LEFT JOIN guru_category_tbl ct ON t.category = ct.category_id LEFT JOIN guru_status_tbl s ON t.tact_status = s.status_id LEFT JOIN guru_country_tbl c ON t.country = c.country_code LEFT JOIN guru_companies_tbl co ON t.our_company = co.companies_id LEFT JOIN guru_codes_tbl cod ON w.code = cod.code_name LEFT JOIN guru_language_tbl l ON w.target = l.language_id LEFT JOIN guru_country_timezone_tbl tz ON t.country = tz.country_timezone_name WHERE t.category = ? OR t.tact_status = ? OR t.country = ? OR t.our_company = ? OR w.code = ? OR t.email_id = ? OR w.rating BETWEEN ? AND ? OR t.show_in_tact = ? OR w.source = ? OR w.target = ?

module.exports = router;
