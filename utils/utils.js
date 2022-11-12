const bcrypt = require("bcrypt");

exports.comparePassword = (password, stockedPassword) => {
    return new Promise((resolve) => {
      resolve(bcrypt.compare(password, stockedPassword));
    });
  };
  
  exports.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
  };