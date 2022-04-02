const express = require("express");
//const multer = require("multer");
//const path = require("path");
const db = require("../config/db");
const { validateToken } = require("../middleWares/authMiddleWare");
const fileUpload = require("express-fileupload");
const router = express.Router();

router.use(fileUpload());

//--------------------------------Country----------------------------------
router.get("/countryListTbl", validateToken, (req, res) => {
  db.query(
    "SELECT ct.*, c.country_name, c.country_id, @a:=@a + 1 serial_number FROM guru_country_timezone_tbl ct LEFT JOIN guru_country_tbl c ON ct.country_timezone_name = c.country_code, (SELECT @a:= 0) AS a WHERE (ct.status ='1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/country", (req, res) => {
  const countryCode = req.body.countryCode;
  db.query(
    "SELECT country_timezone_name FROM guru_country_timezone_tbl WHERE country_timezone_name = ?",
    [countryCode],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addCountry", (req, res) => {
  const countryCode = req.body.countryCode;
  const countryTimezone = req.body.timezone;
  const countryAlias = req.body.alias;

  db.query(
    `INSERT INTO guru_country_timezone_tbl (country_timezone_name, country_timezone_alias, country_timezone) VALUES (?,?,?)`,
    [countryCode, countryAlias, countryTimezone],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/country/:country_timezone_id", (req, res) => {
  const { country_timezone_id } = req.params;

  db.query(
    `DELETE FROM guru_country_timezone_tbl WHERE (country_timezone_id = ?)`,
    [country_timezone_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/update/country/:country_timezone_id", (req, res) => {
  const { country_timezone_id } = req.params;
  console.log(country_timezone_id);

  db.query(
    `SELECT ct.*, c.country_name FROM guru_country_timezone_tbl ct LEFT JOIN guru_country_tbl c ON ct.country_timezone_name = c.country_code WHERE (ct.status ='1' AND c.status = '1' AND ct.country_timezone_id = ?)`,
    [country_timezone_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/edit/country/:edit_id", (req, res) => {
  const { edit_id } = req.params;
  const countryCode = req.body.countryCode;
  const countryTimezone = req.body.timezone;
  const countryAlias = req.body.alias;

  db.query(
    `UPDATE guru_country_timezone_tbl SET country_timezone = ?, country_timezone_alias = ?, country_timezone_name = ? WHERE  country_timezone_id = ?`,
    [countryTimezone, countryAlias, countryCode, edit_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Language----------------------------------
router.get("/language", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, guru_language_tbl.language_id, guru_language_tbl.language_name, guru_language_tbl.language_alias, guru_language_tbl.language_country, guru_country_tbl.country_name, guru_country_tbl.country_code FROM guru_language_tbl JOIN guru_country_tbl, (SELECT @a:= 0) AS a WHERE(guru_language_tbl.language_country = guru_country_tbl.country_code) ORDER BY guru_language_tbl.language_name ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/language", (req, res) => {
  const languageName = req.body.languageName;
  db.query(
    "SELECT language_name FROM guru_language_tbl WHERE language_name = ?",
    [languageName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addlanguage", (req, res) => {
  const languageName = req.body.languageName;
  const languageAlias = req.body.language_alias;
  const languageCountry = req.body.language_country;

  db.query(
    `INSERT INTO guru_language_tbl (language_name, language_alias, language_country) VALUES (?,?,?)`,
    [languageName, languageAlias, languageCountry],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/language/:language_id", (req, res) => {
  const { language_id } = req.params;

  db.query(
    `DELETE FROM guru_language_tbl WHERE language_id = ?`,
    [language_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/update/language/:language_id", (req, res) => {
  const { language_id } = req.params;
  console.log(language_id);

  db.query(
    `SELECT l.*, c.country_name FROM guru_language_tbl l LEFT JOIN guru_country_tbl c ON l.language_country = c.country_code WHERE (l.status ='1' AND c.status = '1' AND l.language_id = ?)`,
    [language_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/edit/lang/:edit_id", (req, res) => {
  const { edit_id } = req.params;
  const languageName = req.body.languageName;
  const languageAlias = req.body.language_alias;
  const languageCountry = req.body.language_country;

  db.query(
    `UPDATE guru_language_tbl SET language_name = ?, language_alias = ?, language_country = ? WHERE language_id = ?`,
    [languageName, languageAlias, languageCountry, edit_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Currency----------------------------------
router.get("/currency", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, c.* FROM guru_currency_tbl c, (SELECT @a:= 0) AS a WHERE status = '1' ORDER BY c.display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/currency", (req, res) => {
  const currencyAlias = req.body.currency_alias;
  const currencyName = req.body.currencyName;
  db.query(
    "SELECT currency_alias, currency_name FROM guru_currency_tbl WHERE currency_alias = ? AND currency_name = ?",
    [currencyAlias, currencyName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addcurrency", (req, res) => {
  // let image_file;
  // image_file = req.files.currency_image;

  // console.log(image_file);

  const currencyName = req.body.currencyName;
  const currencyAlias = req.body.currency_alias;
  const currencySymbol = req.body.currency_symbol;
  // const currencyImage = req.body.currency_image;

  db.query(
    `INSERT INTO guru_currency_tbl (currency_name, currency_alias, currency_symbol, currency_image, display_order) VALUES (?,?,?,?,?)`,
    [currencyName, currencyAlias, currencySymbol, "null", "99"],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/currency/:currency_id", (req, res) => {
  const { currency_id } = req.params;

  db.query(
    `DELETE FROM guru_currency_tbl WHERE currency_id = ?`,
    [currency_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/update/currency/:currency_id", (req, res) => {
  const { currency_id } = req.params;

  db.query(
    `SELECT * FROM guru_currency_tbl WHERE status = '1' AND currency_id = ?`,
    [currency_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/edit/currency/:edit_id", (req, res) => {
  const { edit_id } = req.params;
  const currencyName = req.body.currencyName;
  const currencyAlias = req.body.currency_alias;
  const currencySymbol = req.body.currency_symbol;
  const currencyImage = req.body.currency_image;

  db.query(
    `UPDATE guru_currency_tbl SET currency_name = ?, currency_alias = ?, currency_symbol = ?, currency_image = ? WHERE currency_id = ?`,
    [currencyName, currencyAlias, currencySymbol, currencyImage, edit_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/currency/rate", (req, res) => {
  const baseRate = req.body.baseRate;
  const requiredRate = req.body.requiredRate;
  db.query(
    "SELECT base_rate, required_rate FROM guru_currency_rate_tbl WHERE base_rate = ? AND required_rate = ?",
    [baseRate, requiredRate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/add/conversion/rate", (req, res) => {
  const baseRate = req.body.baseRate;
  const requiredRate = req.body.requiredRate;
  const rate = req.body.rate;

  db.query(
    "INSERT INTO guru_currency_rate_tbl (base_rate, required_rate, rate, added_date) VALUES (?,?,?, CURRENT_TIMESTAMP)",
    [baseRate, requiredRate, rate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/base/rate", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, c.currency_name AS cb, cr.*, q.currency_name AS cr FROM guru_currency_rate_tbl cr LEFT JOIN guru_currency_tbl c ON c.currency_id = cr.base_rate LEFT JOIN guru_currency_tbl q ON q.currency_id = cr.required_rate, (SELECT @a:= 0) AS a WHERE cr.status = '1' ORDER BY cr.base_rate ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/required/rate", (req, res) => {
  db.query(
    "SELECT c.currency_name, cr.* FROM guru_currency_rate_tbl cr LEFT JOIN guru_currency_tbl c ON c.currency_id = cr.required_rate WHERE cr.status = 'e' ORDER BY cr.base_rate ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.delete("/delete/conversion/rate/:rate_id", (req, res) => {
  const { rate_id } = req.params;

  db.query(
    `DELETE FROM guru_currency_rate_tbl WHERE rate_id = ?`,
    [rate_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/update/rate/:rate_id", (req, res) => {
  const { rate_id } = req.params;

  db.query(
    `SELECT c.currency_name AS cb, cr.*, q.currency_name AS cr FROM guru_currency_rate_tbl cr LEFT JOIN guru_currency_tbl c ON c.currency_id = cr.base_rate LEFT JOIN guru_currency_tbl q ON q.currency_id = cr.required_rate WHERE cr.status = '1' AND rate_id = ?`,
    [rate_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/edit/rate/:editRateId", (req, res) => {
  const { editRateId } = req.params;
  const baseRate = req.body.baseRate;
  const requiredRate = req.body.requiredRate;
  const rate = req.body.rate;

  db.query(
    `UPDATE guru_currency_rate_tbl SET base_rate = ?, required_rate = ?, rate = ? WHERE rate_id = ?`,
    [baseRate, requiredRate, rate, editRateId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Measure----------------------------------
router.get("/measure", (req, res) => {
  db.query(
    "SELECT  @a:=@a + 1 serial_number, measure_name, measure_id FROM guru_measure_tbl, (SELECT @a:= 0) AS a",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/measure", (req, res) => {
  const measure = req.body.measure;
  db.query(
    "SELECT measure_name FROM guru_measure_tbl WHERE measure_name = ?",
    [measure],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addmeasure", (req, res) => {
  const measure = req.body.measure;

  db.query(
    `INSERT INTO guru_measure_tbl (measure_name) VALUES (?)`,
    [measure],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/measure/:measure_id", (req, res) => {
  const { measure_id } = req.params;

  db.query(
    `DELETE FROM guru_measure_tbl WHERE measure_id = ?`,
    [measure_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/edit/measure", (req, res) => {
  const newMeasure = req.body.measure;
  const editMeasure = req.body.edit_measure_name;

  db.query(
    "UPDATE guru_measure_tbl SET measure_name = ? WHERE measure_name = ?",
    [newMeasure, editMeasure],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Work Type----------------------------------
router.get("/worktype", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, wt.* FROM guru_work_type_tbl wt, (SELECT @a:= 0) AS a ORDER BY display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/work", (req, res) => {
  const workType = req.body.workname;
  db.query(
    "SELECT work_type FROM guru_work_type_tbl WHERE work_type = ?",
    [workType],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addworktype", (req, res) => {
  const workType = req.body.workname;

  db.query(
    `INSERT INTO guru_work_type_tbl (work_type, display_order) VALUES (?,?)`,
    [workType, "99"],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/work/:work_type_id", (req, res) => {
  const { work_type_id } = req.params;

  db.query(
    `DELETE FROM guru_work_type_tbl WHERE work_type_id = ?`,
    [work_type_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/edit/worktype", (req, res) => {
  const newWork = req.body.workname;
  const editWork = req.body.edit_worktype_name;

  db.query(
    "UPDATE guru_work_type_tbl SET work_type = ? WHERE work_type = ?",
    [newWork, editWork],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Category----------------------------------
router.get("/category", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, c.* FROM guru_category_tbl c, (SELECT @a:= 0) AS a",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/category", (req, res) => {
  const category = req.body.category;
  db.query(
    "SELECT category_name FROM guru_category_tbl WHERE category_name = ?",
    [category],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addcategory", (req, res) => {
  const category = req.body.category;

  db.query(
    `INSERT INTO guru_category_tbl (category_name) VALUES (?)`,
    [category],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/category/:category_id", (req, res) => {
  const { category_id } = req.params;

  db.query(
    `DELETE FROM guru_category_tbl WHERE category_id = ?`,
    [category_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/edit/category", (req, res) => {
  const newCategory = req.body.category;
  const editCategory = req.body.edit_category_name;

  db.query(
    "UPDATE guru_category_tbl SET category_name = ? WHERE category_name = ?",
    [newCategory, editCategory],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//--------------------------------Status----------------------------------
router.get("/status", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, s.* FROM guru_status_tbl s, (SELECT @a:= 0) AS a",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/status", (req, res) => {
  const status = req.body.status;
  db.query(
    "SELECT status_name FROM guru_status_tbl WHERE status_name = ?",
    [status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addstatus", (req, res) => {
  const status = req.body.status;

  db.query(
    `INSERT INTO guru_status_tbl (status_name) VALUES (?)`,
    [status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/status/:status_id", (req, res) => {
  const { status_id } = req.params;

  db.query(
    `DELETE FROM guru_status_tbl WHERE status_id = ?`,
    [status_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/edit/status", (req, res) => {
  const newStatus = req.body.status;
  const editStatus = req.body.edit_status_name;

  db.query(
    "UPDATE guru_status_tbl SET status_name = ? WHERE status_name = ?",
    [newStatus, editStatus],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Code----------------------------------
router.get("/codes", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, co.* FROM guru_codes_tbl co, (SELECT @a:= 0) AS a",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/codes", (req, res) => {
  const codeName = req.body.codename;
  db.query(
    "SELECT code_name FROM guru_codes_tbl WHERE code_name = ?",
    [codeName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addcodes", (req, res) => {
  const codeName = req.body.codename;
  const codeDefined = req.body.codedefined;

  db.query(
    `INSERT INTO guru_codes_tbl (code_name, code_defined) VALUES (?,?)`,
    [codeName, codeDefined],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/code/:code_id", (req, res) => {
  const { code_id } = req.params;

  db.query(
    `DELETE FROM guru_codeS_tbl WHERE code_id = ?`,
    [code_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.get("/update/code/:code_id", (req, res) => {
  const { code_id } = req.params;
  db.query(
    "SELECT co.* FROM guru_codes_tbl co WHERE code_id = ?",
    [code_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/edit/codes/:updateId", (req, res) => {
  const { updateId } = req.params;
  const codeName = req.body.codename;
  const codeDefined = req.body.codedefined;

  console.log(updateId + " " + codeName + " " + codeDefined);
  db.query(
    "UPDATE guru_codes_tbl SET code_name = ?, code_defined = ? WHERE code_id = ?",
    [codeName, codeDefined, updateId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Outgoing Mail----------------------------------
router.get("/emailmaster", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, em.* FROM guru_outgoing_email_tbl em, (SELECT @a:= 0) AS a ORDER BY outgoing_master_email_id ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/update/email/master/:outgoing_email_id", (req, res) => {
  const { outgoing_email_id } = req.params;

  db.query(
    `SELECT * FROM guru_outgoing_email_tbl WHERE outgoing_email_id = ?`,
    [outgoing_email_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/edit/email/master/:editId", (req, res) => {
  const { editId } = req.params;
  const editEmail = req.body.editEmail;
  const editPortNo = req.body.editPortNo;
  const editSmtp = req.body.editSmtp;
  const editPassword = req.body.editPassword;

  db.query(
    `UPDATE guru_outgoing_email_tbl SET outgoing_master_email_id = ?, outgoing_port_no = ?, outgoing_smtp = ?, outgoing_password = ? WHERE outgoing_email_id = ?`,
    [editEmail, editPortNo, editSmtp, editPassword, editId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});

router.delete("/delete/emailmaster/:outgoing_email_id", (req, res) => {
  const { outgoing_email_id } = req.params;

  db.query(
    `DELETE FROM guru_outgoing_email_tbl WHERE outgoing_email_id = ?`,
    [outgoing_email_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

//--------------------------------Company----------------------------------
router.get("/ourcompany", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, companies_id, companies_name, status FROM guru_companies_tbl, (SELECT @a:= 0) AS a WHERE(status = '1') ORDER BY display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/our/company", (req, res) => {
  const ourcompany = req.body.ourcompany;
  db.query(
    "SELECT companies_name FROM guru_companies_tbl WHERE companies_name = ?",
    [ourcompany],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addCompany", (req, res) => {
  const ourcompany = req.body.ourcompany;

  db.query(
    "INSERT INTO guru_companies_tbl (companies_name, display_order) VALUES (?,?)",
    [ourcompany, "99"],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/company/:companies_id", (req, res) => {
  const { companies_id } = req.params;

  db.query(
    `DELETE FROM guru_companies_tbl WHERE companies_id = ?`,
    [companies_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/edit/ourcompany", (req, res) => {
  const newCompany = req.body.ourcompany;
  const editCompany = req.body.edit_ourCompany_name;

  console.log(newCompany + "+" + editCompany);

  db.query(
    "UPDATE guru_companies_tbl SET companies_name = ? WHERE companies_name = ?",
    [newCompany, editCompany],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//--------------------------------Domain----------------------------------
router.get("/domain", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, domain_id, domain_name FROM guru_domain_tbl, (SELECT @a:= 0) AS a ORDER BY display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/check/domain", (req, res) => {
  const domain = req.body.domain;
  console.log(domain);
  db.query(
    "SELECT domain_name FROM guru_domain_tbl WHERE domain_name = ?",
    [domain],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/adddomain", (req, res) => {
  const domain = req.body.domain;

  db.query(
    `INSERT INTO guru_domain_tbl (domain_name, display_order) VALUES (?,?)`,
    [domain, "99"],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.delete("/delete/domain/:domain_id", (req, res) => {
  const { domain_id } = req.params;

  db.query(
    `DELETE FROM guru_domain_tbl WHERE domain_id = ?`,
    [domain_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

router.post("/edit/domain", (req, res) => {
  const newDomain = req.body.domain;
  const editDomain = req.body.edit_domain_name;
  db.query(
    "UPDATE guru_domain_tbl SET domain_name = ? WHERE domain_name = ?",
    [newDomain, editDomain],
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
