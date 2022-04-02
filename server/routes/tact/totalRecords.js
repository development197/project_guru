const express = require("express");
const db = require("../../config/db");
const router = express.Router();

//-----------------------Record list---------------------------------
router.get("/getRecordList", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, l.user_email, u.file, u.total_inserted_record, u.added_date, c.category_name, u.source FROM guru_login_tbl l JOIN guru_tact_upload_detail_tbl u ON l.user_id = u.added_by JOIN guru_category_tbl c ON u.category = c.category_id, (SELECT @a:= 0) AS a ORDER BY added_date DESC",
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
