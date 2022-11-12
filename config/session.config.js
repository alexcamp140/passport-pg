const { app } = require("../app.js");
const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const { clientPromise } = require("../database");

app.use(
  session({
    secret: "sdfhqsmfhsqdmlfhgamrigl:nvc",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
    // },
    // store: new MongoStore({
    //   clientPromise: clientPromise.then((m) => m.connection.getClient()),
    //   ttl: 60 * 60 * 24 * 14,
    // }),
  })
);
