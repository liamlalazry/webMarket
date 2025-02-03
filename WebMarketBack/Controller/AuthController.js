import User from "../Model/UserModel.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import { ExpressValidator } from "express-validator";
const signup = async (req, res, next) => {
  try {
    let newUser = await User.create(req.body);
    let token = jwt.sign({ id: newUser._id }, config.secrets.jwt, {
      expiresIn: config.expireTime,
    });

    console.log("token:", token);
    res.status(201).json({ status: "Success sign-up", token, data: newUser });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((error) => ({
        field: error.path,
        message: error.message,
      }));
      res.status(400).json({ status: "failed", errors: errors });
      console.error("Validation errors", errors);
      return;
    } else
      return res
        .status(400)
        .json({ status: "Failed to create", msg: `Error: ${err.message}` });
  }
};

export default { signup };
