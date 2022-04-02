const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const access_token = req.headers["token"];
  if (!access_token) {
    res.send({ message: "User is not logged in" });
  }
  //   } else {
  //     console.log("access_token");
  //     const valid_token = verify(access_token, "guruProject");
  //     console.log(valid_token + " --validToken");
  //     if (valid_token) {
  //       console.log("next if called ");
  //       return next();
  //     } else {
  //       return res.send({ message: err });
  //     }
  //   }

  try {
    const validToken = verify(access_token, "guruProject");

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }

  //return res.send({ message: err });
};

module.exports = { validateToken };
