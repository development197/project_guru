const express = require("express");
const db = require("../../config/db");
const router = express.Router();

router.get("/white/translator/:tact_id", (req, res) => {
  db.query("", [tact_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
