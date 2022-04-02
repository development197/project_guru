const path = require("path");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const buildPath = path.join(__dirname, "..", "build");
router.use(express.static(buildPath));

router.post("/users", (req, res) => {
  db.query("SELECT * ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yoobro412@gmail.com",
      pass: "tpnurtrcgbzxleni",
    },
  });

  var mailOptions = {
    from: "yoobro412@gmail.com", // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.description,
    img: req.body.image,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new mail from GURU</p>
        <span>Hello this is an email from guru </span>
        <h3>Contact Details</h3>
        <ul>
        <li><img src=${req.body.image}> Header Image</li>
            <li>Email: ${req.body.to}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.description}</li>
            <li><img src=${req.body.image}> Footer Image</li>
        </ul>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: "error in the code" });
    } else {
      res.json({ status: true, respMesg: "Email Sent Successfully" });
    }
  });
});

module.exports = router;
