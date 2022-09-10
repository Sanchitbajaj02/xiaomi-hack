const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    operatorID: user._id,
    exp: new Date().setDate(new Date().getDate() + 1), // current time + 1 day ahead
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { algorithm: "HS256" });
};

const verifyToken = (reqHeaders) => {
  const token = reqHeaders.authorization.split(" ")[1];
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithm: "HS256" },
    (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "error verifying token"
        })
      }
    }
  );
};

module.exports = {
  generateToken,
  verifyToken,
};
