const express = require("express");
const db = require("../../config/db");
const router = express.Router();

//-----------------------------Cost list API----------------------------------
router.get("/cost", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, l.language_id, l.language_name AS s_lang, ln.language_name AS t_lang, s.* FROM guru_selling_tbl s LEFT JOIN guru_language_tbl l ON s.source_language = l.language_id LEFT JOIN guru_language_tbl ln ON s.target_language = ln.language_id, (SELECT @a:= 0) AS a WHERE ( s.staus = '1' AND l.status = '1' AND ln.status = '1')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// SELECT @a:=@a + 1 serial_number, s.selling_id, l.language_id, l.language_name AS s_lang, s.source_language, ln.language_name, s.target_language, s.strengh, s.cost, s.sp_inr, s.sp_usd, s.fixed FROM guru_selling_tbl s LEFT JOIN guru_language_tbl l ON s.source_language = l.language_id LEFT JOIN guru_language_tbl ln ON s.target_language = ln.language_id, (SELECT @a:= 0) AS a WHERE ( s.staus = '1' AND l.status = '1' AND ln.status = '1') ORDER BY s_lang ASC
// SELECT @a:=@a + 1 serial_number, s.selling_id, l.language_id, l.language_name, s.source_language, ln.language_name, s.target_language, s.strengh, s.cost, s.sp_inr, s.sp_usd, s.fixed FROM guru_language_tbl l LEFT JOIN guru_selling_tbl s ON s.source_language = l.language_id LEFT JOIN guru_language_tbl ln ON s.target_language = ln.language_id WHERE( s.staus = '1' AND l.status = '1' AND ln.status = '1') ORDER BY l.language_name ASC

//"SELECT @a:=@a + 1 serial_number, l.language_name, l.language_id, s.source_language, s.target_language, s.strengh, s.cost, s.sp_inr, s.sp_usd, s.fixed FROM guru_language_tbl l LEFT JOIN guru_selling_tbl s ON s.source_language = l.language_id OR s.target_language = l.language_id, (SELECT @a:= 0) AS a WHERE( s.staus = '1' AND l.status = '1') ORDER BY l.language_name ASC"

router.post("/search", (req, res) => {
  const sourceLanguage = req.body.sourceLanguage;
  const targetLanguage = req.body.targetLanguage;
  const workType = req.body.workType;

  db.query(
    "SELECT l.language_id, l.language_name AS s_lang, ln.language_name AS t_lang, s.* FROM guru_selling_tbl s LEFT JOIN guru_language_tbl l ON s.source_language = l.language_id LEFT JOIN guru_language_tbl ln ON s.target_language = ln.language_id WHERE( s.staus = '1' AND l.status = '1' AND ln.status = '1' AND s.source_language = ? ANd s.target_language = ? AND s.work_type = ?)",
    [sourceLanguage, targetLanguage, workType],
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

router.post("/addspcost/check/input", (req, res) => {
  const sourceLanguage = req.body.sourceLanguage;
  const targetLanguage = req.body.targetLanguage;
  // const workType = req.body.workType;

  db.query(
    "SELECT * FROM guru_selling_tbl WHERE( source_language = ? AND target_language = ?)",
    [sourceLanguage, targetLanguage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addspcost", (req, res) => {
  const sourceLanguage = req.body.sourceLanguage;
  const targetLanguage = req.body.targetLanguage;
  const workType = req.body.workType;
  const sp_inr = req.body.sp_inr;
  const sp_usd = req.body.sp_usd;
  const cost = req.body.cost;
  const fixed = req.body.fixed;
  const strength = req.body.strength;

  db.query(
    "INSERT INTO guru_selling_tbl (source_language, target_language, work_type, strengh, sp_inr, sp_usd, fixed, cost) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    [
      sourceLanguage,
      targetLanguage,
      workType,
      strength,
      sp_inr,
      sp_usd,
      fixed,
      cost,
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

router.post("/update/selling/:selling_id", (req, res) => {
  const { selling_id } = req.params;

  db.query(
    "SELECT l.language_id, l.language_name AS s_lang, ln.language_name AS t_lang, s.*, w.work_type AS work_name FROM guru_selling_tbl s LEFT JOIN guru_language_tbl l ON s.source_language = l.language_id LEFT JOIN guru_language_tbl ln ON s.target_language = ln.language_id LEFT JOIN guru_work_type_tbl w ON s.work_type = w.work_type_id WHERE ( s.staus = '1' AND l.status = '1' AND ln.status = '1' AND s.selling_id = ?)",
    [selling_id],
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

router.put("/edit/selling/:selling_id", (req, res) => {
  const { selling_id } = req.params;
  const sourceLanguage = req.body.sourceLanguage;
  const targetLanguage = req.body.targetLanguage;
  const workType = req.body.workType;
  const sp_inr = req.body.sp_inr;
  const sp_usd = req.body.sp_usd;
  const cost = req.body.cost;
  const fixed = req.body.fixed;
  const strength = req.body.strength;

  db.query(
    "UPDATE guru_selling_tbl SET work_type = ?, source_language = ?, target_language = ?, strengh = ?, cost = ?, sp_inr = ?, sp_usd = ?, fixed = ? WHERE selling_id = ?",
    [
      workType,
      sourceLanguage,
      targetLanguage,
      strength,
      cost,
      sp_inr,
      sp_usd,
      fixed,
      selling_id,
    ],
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

router.delete("/delete/selling/:selling_id", (req, res) => {
  const { selling_id } = req.params;

  db.query(
    "DELETE FROM guru_selling_tbl WHERE selling_id = ?",
    [selling_id],
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

router.get("/SampleFile/cost", (req, res) => {
  res.download("./SP_Excel.xlsx");
  console.log("downloaded");
});

router.post("/test/upload", (req, res) => {
  const file = req.body.excel_file;
  db.query(
    `INSERT INTO guru_quality_check_reviewer_tbl (reviewed_by_file) VALUES (?);`,
    [file],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("uploaded");
      }
    }
  );
});

router.get("/re/checker/list", (req, res) => {
  db.query(
    `SELECT @a:=@a + 1 serial_number, ce.*, t.*, co.companies_name, w.work_type, so.language_name AS s_lang, tar.language_name AS t_lang FROM guru_client_enquiry_tbl ce LEFT JOIN guru_tact_tbl t ON ce.tact_id = t.tact_id LEFT JOIN guru_companies_tbl co ON t.our_company = co.companies_id LEFT JOIN guru_work_type_tbl w ON ce.client_enquiry_service_type = w.work_type_id LEFT JOIN guru_language_tbl so ON ce.client_enquiry_source_lang = so.language_id LEFT JOIN guru_language_tbl tar ON ce.client_enquiry_target_lang = tar.language_id,(SELECT @a:= 0) AS a WHERE (ce.status = '1' AND ce.checker_status = '2' AND ce.account_transfer_status = '2') ORDER BY ce.added_date DESC`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/checker/list", (req, res) => {
  db.query(
    `SELECT @a:=@a + 1 serial_number, ce.*, t.*, co.companies_name, w.work_type, so.language_name AS s_lang, tar.language_name AS t_lang FROM guru_client_enquiry_tbl ce LEFT JOIN guru_tact_tbl t ON ce.tact_id = t.tact_id LEFT JOIN guru_companies_tbl co ON t.our_company = co.companies_id LEFT JOIN guru_work_type_tbl w ON ce.client_enquiry_service_type = w.work_type_id LEFT JOIN guru_language_tbl so ON ce.client_enquiry_source_lang = so.language_id LEFT JOIN guru_language_tbl tar ON ce.client_enquiry_target_lang = tar.language_id,(SELECT @a:= 0) AS a WHERE (ce.status = '1' AND ce.checker_status = '1' AND ce.account_transfer_status = '2') ORDER BY ce.added_date DESC`,
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
