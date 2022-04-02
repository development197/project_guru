const express = require("express");
const db = require("../../config/db");
const router = express.Router();

router.get("/task/other", (req, res) => {
  db.query(
    `SELECT @a:=@a + 1 serial_number, ce.account_transfer_status,ce.added_by,ce.tact_id,ce.inquiry_generated_id,ce.inquiry_received_by, ce.client_enquiry_source_lang, ce.client_enquiry_target_lang, ce.enquiry_expected_delivery_date, ce.offer_delivery_commited_date, wo.inquiry_generated_split_id, wo.work_order_delivery_commited, wo.translator_id, wt.expected_delivery_date_time, l.user_email FROM guru_client_enquiry_tbl ce LEFT JOIN guru_work_order_tbl wo ON ce.inquiry_generated_id = wo.inquiry_generated_id LEFT JOIN guru_work_translator_tbl wt ON ce.inquiry_generated_id = wt.inquiry_generated_id LEFT JOIN guru_login_tbl l ON ce.added_by = l.user_id, (SELECT @a:= 0) AS a WHERE ce.status = '1' AND ce.account_transfer_status='1' ORDER BY ce.offer_delivery_commited_date ASC`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/task/other/:userSelected/:referenceSelected", (req, res) => {
  const { userSelected, referenceSelected } = req.params;

  const query = ``;

  db.query(query, [userSelected, referenceSelected], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
