const passport = require("passport");
const { app } = require("../app.js");
const {
  findUserPerEmail,
  findUserPerId
} = require('../queries/users/users.queries.js');
const {comparePassword} = require('../utils/utils.js')

const LocalStrategy = require("passport-local").Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
    username: user.username,
    email:user.email
  }
    );
});

passport.deserializeUser(async (user, done) => {
  try {
    // const user = await findUserPerId(id);
    done(null, {
      id: user.id,
      username: user.username,
      email:user.email
    });
  } catch (error) {
    done(error);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        console.log(email);
        console.log(password);
        const user = await findUserPerEmail(email);
        console.log("je suis ici");
        if (user) {
          console.log("j'ai un user");
          console.log(user.password);
          const match = await comparePassword(password,user.password);
          if (match) {
            console.log("match");
            done(null, user);
          } else {
            console.log("no match");
            done, false, { message: "wrong password" };
          }
        } else {
          console.log("j'ai pas de user");
          done(null, false, { message: "User Not Found" });
        }
      } catch (error) {
        done(error);
      }
    }
  )
);


