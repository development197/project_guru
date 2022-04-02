const express = require("express");
const db = require("../config/db");
//const session = require("express-session");
//const cookieParser = require("cookie-parser");
const { sign } = require("jsonwebtoken");
const router = express.Router();

// router.use(cookieParser());
// router.use(
//   session({
//     // You could actually store your secret in your .env file - but to keep this example as simple as possible...
//     secret: "supersecret difficult to guess string",
//     cookie: { expires: 60 * 60 * 24 },
//     resave: false,
//     saveUninitialized: false,
//   })
// );

router.post("/login", (req, res) => {
  const user_email = req.body.user_email;
  const user_password = req.body.user_password;
  //req.session.user_email = req.body.user_email;
  //req.session.user_password = req.body.user_password;

  //console.log(req.session.user_email);

  // console.log(req.session.user_email + ", " + req.session.user_password);
  //req.session.save();

  db.query(
    "SELECT * FROM guru_login_tbl WHERE user_email = ? AND user_password = ? AND status = '1'",
    [user_email, user_password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length === 0) {
          res.send({ message: "Wrong useremail and password" });
        } else {
          const accessToken = sign(
            { user_id: result[0].user_id, user_email: result[0].user_email },
            "guruProject"
          );
          res.send(accessToken);
        }
      }
    }
  );
});

// router.get("/log", (req, res) => {
//   if (req.session.user_email) {
//     res.send({ message: "User is logged in" });
//     console.log(`user logged in ${req.session.user_email}`);
//   } else {
//     res.send({ message: "User is not logged in" });
//     console.log(`user not logged in ${req.session.user_email}`);
//   }
// });

router.get("/logout", (req, res) => {
  // const accessToken = sign("", "secret", { expiresIn: 1 });
  // res.send(accessToken);
  res.send({ message: "User is logged out" });
});

module.exports = router;
