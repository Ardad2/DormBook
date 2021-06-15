const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token"); // header key to be sent to the token

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" }); // Error 401: Not Authorized
  }

  //Verify the token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret")); // Decodes the token

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
