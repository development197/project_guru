const express = require("express");
const db = require("../../config/db");
const router = express.Router();

router.get("/orange/language/:tact_id", (req, res) => {
  const { tact_id } = req.params;

  db.query(
    "SELECT l.language_name, e.client_enquiry_source_lang, e.client_enquiry_target_lang FROM guru_language_tbl l LEFT JOIN guru_client_enquiry_tbl e ON e.client_enquiry_source_lang = l.language_id OR e.client_enquiry_target_lang = l.language_id WHERE e.tact_id = ? AND e.status = '1'",
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

module.exports = router;
