const express = require("express");
const db = require("../config/db");
const router = express.Router();

//================================Country===============================
router.get("/countryDropD", (req, res) => {
  db.query(
    "SELECT country_code, country_name FROM guru_country_tbl WHERE (status = '1') ORDER BY country_name ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//================================ Wasp Country===============================
router.get("/waspCountryDropD", (req, res) => {
  db.query(
    "SELECT * FROM wasp_country_tbl WHERE (status = '1') ORDER BY country_name ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//================================Language===============================
router.get("/languageDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_language_tbl WHERE (status = '1') ORDER BY language_name ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//================================Wasp Language===============================
router.get("/waspLanguageDropD", (req, res) => {
  db.query(
    "SELECT * FROM wasp_language_tbl WHERE (status = '1') ORDER BY language_name ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//================================Work Type===============================
router.get("/workTypeDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_work_type_tbl WHERE (status = '1') ORDER BY display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Status===============================
router.get("/statusDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_status_tbl WHERE (status = '1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Measure===============================
router.get("/measureDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_measure_tbl WHERE (status = '1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================User===============================
router.get("/userDropD", (req, res) => {
  db.query(
    "SELECT user_id, user_email, user_type FROM guru_login_tbl WHERE (status = '1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Domain===============================
router.get("/domainDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_domain_tbl WHERE (status = '1') ORDER BY display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Measure===============================
router.get("/currencyDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_currency_tbl WHERE (status = '1') ORDER BY display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Our Company===============================
router.get("/ourCompanyDropD", (req, res) => {
  db.query(
    "SELECT companies_id, companies_name FROM guru_companies_tbl WHERE (status = '1') ORDER BY display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Codes===============================
router.get("/codesDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_codes_tbl WHERE (status = '1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Category===============================
router.get("/categoryDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_category_tbl WHERE (status = '1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Currency===============================
router.get("/currencyDropD", (req, res) => {
  db.query(
    "SELECT * FROM guru_currency_tbl WHERE (status = '1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//===========================Search Tact Language Drop Down===============================
router.get("/countryTact", (req, res) => {
  db.query(
    "SELECT c.*, ct.* FROM guru_country_tbl c LEFT JOIN guru_country_timezone_tbl ct ON c.country_code = ct.country_timezone_name WHERE (c.status = '1' AND ct.status = '1') ORDER BY c.country_name ASC",
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
