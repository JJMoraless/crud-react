import { Strategy } from "passport-local";
import { compare } from "bcrypt";
import db from "../../../../db/conection.js";
import { ClientError } from "../../errors.js";
const User = db.collection("users");

// validar las credenciales
// agrega un objeto user al request (el que viene de la busqueda a la db)

const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    console.log("🚀 ~ file: local.strategy.js:16 ~ email:", email);
    console.log("🚀 ~ file: local.strategy.js:16 ~  password:", password);
    try {
      const user = await User.findOne({ email });
      console.log("🚀 ~ file: local.strategy.js:20 ~ user:", user);
      if (!user) {
        throw new ClientError("email error");
      }
      console.log(
        "🚀 ~ file: local.strategy.js:24 ~ user.password:",
        user.password
      );

      const isMatchPass = await compare(password, user.password);
      console.log(
        "🚀 ~ file: local.strategy.js:25 ~ isMatchPass:",
        isMatchPass
      );
      if (!isMatchPass) {
        throw new ClientError("password incorrect");
      }

      delete user.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export default localStrategy;
