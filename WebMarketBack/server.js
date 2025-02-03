import express from "express";
import User from "./Model/UserModel.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import UserRouter from "./Routes/UserRouter.js";
import cors from "cors";
import productRouter from "./Routes/ProductsRouter.js";
//import ProductRouter from "./Routes/ProductsRouter.js";
import config from "./config.js";
console.log(`Running in environment: ${config.dev}`);
let app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/Users", UserRouter);
app.use("/Products", productRouter);

const uri = "mongodb://localhost:27017/classdb";
const clientOptions = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};
await mongoose.connect(uri, clientOptions);
const router = new express.Router();
let port = 3000;
router.use(express.json());
app.listen(port, function () {
  console.log("Running on port " + port);
});
