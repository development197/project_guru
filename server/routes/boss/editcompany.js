// const express = require("express");
// const db = require("../../config/db");
// const router = express.Router();

// //--------------------------Fetching data with id---------------------------------
// router.get("/edit/company/:companies_id", (req, res) => {
//   const { companies_id } = req.params;
//   db.query(
//     "SELECT * FROM guru_companies_tbl WHERE companies_id = ?",
//     [companies_id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// module.exports = router;
