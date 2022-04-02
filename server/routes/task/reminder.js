const express = require("express");
const db = require("../../config/db");
const router = express.Router();

router.get("/task/reminder", (req, res) => {
  db.query(
    `SELECT @a:=@a + 1 serial_number, r.* FROM guru_reminder_tbl r, (SELECT @a:= 0) AS a WHERE r.added_by = '1'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/add/task/reminder", (req, res) => {
  const addText = req.body.addText;
  const addDate = req.body.addDate;

  db.query(
    `INSERT INTO guru_reminder_tbl (text, date_time, added_by) VALUES (?, ?, '1')`,
    [addText, addDate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/update/task/reminder/:reminder_id", (req, res) => {
  const { reminder_id } = req.params;

  db.query(
    `SELECT * FROM guru_reminder_tbl WHERE reminder_id = ?`,
    [reminder_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.delete("/delete/task/reminder/:reminder_id", (req, res) => {
  const { reminder_id } = req.params;

  db.query(
    `DELETE FROM guru_reminder_tbl WHERE reminder_id = ?`,
    [reminder_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/edit/task/reminder/:editId", (req, res) => {
  const { editId } = req.params;
  const addText = req.body.addText;
  const addDate = req.body.addDate;

  db.query(
    `UPDATE guru_reminder_tbl SET text = ?, date_time = ? WHERE reminder_id = ?`,
    [addText, addDate, editId],
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
