const express = require("express");
const db = require("../../config/db");
const router = express.Router();

//------------------------------For Client-------------------------------------
router.get("/task/approval/client", (req, res) => {
  db.query(``, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//------------------------------For Translator-------------------------------------
router.get("/task/approval/translator", (req, res) => {
  db.query(``, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//------------------------------For Project-------------------------------------
router.get("/task/approval/project", (req, res) => {
  db.query(``, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
