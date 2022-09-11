const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const promise = new Promise((resolve, reject) => {
    const payload = {
      operatorID: user._id,
      storeType: user.storeType,
      pos: user.pos,
      // exp: new Date().setDate(new Date().getDate() + 1), // current time + 1 day ahead
    };

    const signedToken = jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    if (signedToken) {
      resolve(signedToken);
    } else {
      reject("error signing token");
    }
  });

  return promise;
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithm: "HS256" },
    (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "error verifying token",
          error: err,
        });
      }

      req.tokenPayload = decoded;
      next();
    }
  );
};

module.exports = {
  generateToken,
  verifyToken,
};
