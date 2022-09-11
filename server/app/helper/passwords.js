const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = async (plainTextPassword) => {
  const promise = new Promise((resolve, reject) => {
    bcrypt
      .hash(plainTextPassword, saltRounds)
      .then((hashedPassword) => {
        resolve(hashedPassword);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
};

const checkUser = async (plainTextPassword, hashedPassword) => {
  const promise = new Promise((resolve, reject) => {
    bcrypt
      .compare(plainTextPassword, hashedPassword)
      .then((match) => {
        console.log("match at password:", match);
        if (match) {
          resolve(match);
        } else {
          reject(match);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

module.exports = {
  hashPassword,
  checkUser,
};
