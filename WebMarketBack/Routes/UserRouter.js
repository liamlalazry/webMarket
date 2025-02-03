// export default userRouter;
import express from "express";
let userRouter = express.Router();
import userController from "../Controller/UserController.js";
import signup from "../Controller/AuthController.js";
import Login from "../Controller/AuthControllerLog.js";

// Sign up routes
//userRouter.post("/signup", authController.signup);
userRouter.post("/sellersSignup", signup.signup);
userRouter.post("/signup", signup.signup);
// Log in
userRouter.post("/login", Login.login);

// User CRUD routes
userRouter.post("/", userController.createUser); // Not clear why needed both this and signup func
userRouter.get("/:id", userController.getUserById);
userRouter.patch("/:id", userController.updateUserById);
userRouter.delete("/:id", userController.deleteUserById);

// Adding the getUsers route (for fetching all users)
//userRouter.get("/", userController.getUsers);

export default userRouter;
