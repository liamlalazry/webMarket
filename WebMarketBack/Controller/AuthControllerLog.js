import User from "../Model/UserModel.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("needed email or password!");
      return;
    }
    let user = await User.findOne({ email: email });
    console.log(user);

    if (!user) {
      return res.status(401).send("there is no user with such an email!");
    } else {
      if (!user || !user.authenticate(password)) {
        return res.status(401).send("Wrong password");
      } else {
        let signToken = (id) => {
          return jwt.sign({ id: id }, config.secrets.jwt, {
            expiresIn: config.expireTime,
          });
        };
        let token = signToken(user._id);

        res
          .status(200)
          .json({
            status: "success",
            token: token,
            UserId: user._id,
            role: user.role,
          });
      }
    }
  } catch (err) {
    res.status(401).json({
      status: "failed to login in the database",
      msg: `Error ${err.message}`,
    });
  }
};
export default { login };
