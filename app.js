const express = require("express");
const index = require("./routes");
const path = require("path");

const app = express();
exports.app = app;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

require("./config/session.config.js");
require("./config/passport.config.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);

app.listen(3001);
