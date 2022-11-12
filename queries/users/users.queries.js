const db = require("../../config/database/index.js");
const { Pool } = require("pg");
const { hashPassword } = require("../../utils/utils.js");

exports.findUserPerEmail = (email) => {
  const pool = new Pool(db);
  return pool
    .query("SELECT * FROM users WHERE email = $1::text", [email])
    .then((result) => {
      pool.end();
      console.log(result.rows[0]);
      return new Promise((resolve) => {
        resolve(result.rows[0]);
      });
    })
    .catch((error) => {
      pool.end();
      console.log(error);
    });
};

exports.findUserPerId = (id) => {
  const pool = new Pool(db);
  return pool
    .query("SELECT * FROM users WHERE id = $1::text", [id])
    .then((result) => {
      pool.end();
      // console.log(result.rows[0]);
      return new Promise((resolve) => {
        resolve(result.rows[0]);
      });
    })
    .catch((error) => {
      pool.end();
      console.log(error);
    });
};

exports.createUser = async (user) => {
  console.log("je passe ici: create")
  const hashedPassword = await hashPassword(user.password);
  const pool = new Pool(db);
  const role="user";
  return pool
    .query("INSERT INTO users(username, password,type, email)VALUES ($1, $2, $3,$4) returning *;", [
      user.username,
      hashedPassword,
      role,
      user.email,
    ])
    .then((result) => {
      pool.end();
      console.log(result.rows[0]);
      return new Promise((resolve) => {
        resolve(result.rows[0]);
      });
    })
    .catch((error) => {
      pool.end();
      console.log(error);
    });
};
