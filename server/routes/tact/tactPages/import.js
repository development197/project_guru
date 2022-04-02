const express = require("express");
const db = require("../../../config/db");
const multer = require("multer");
const router = express.Router();

//-------------------------------Importing Excel file-----------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../../../image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single("file");

router.post("/addimportdata", (req, res) => {
  const excelFile = req.body.excelFile;
  upload(req, res, (err) => {
    if (err) {
      return err;
    } else {
      res.send(excelFile);
    }
  });
});

router.get("/downloadSampleFile", (req, res) => {
  res.download("./TACT_Excel.xlsx");
  console.log("downloaded");
});

module.exports = router;

// let xlsxFile;
// let uploadPath;

// if (req.files || Object.keys(req.files).length === 0) {
//   return res.status(400).send("No files were uploaded.");
// }

// xlsxFile = req.file.excelFile;
// console.log(xlsxFile + "xlsxFile uploaded");

// db.query(
//   "SELECT status_id, status_name FROM guru_status_tbl",
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   }
// );
