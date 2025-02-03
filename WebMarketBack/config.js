import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const config = {
  dev: "development",
  test: "testing",
  prod: "production",
  port: process.env.PORT || 3000,
  // Ten days in minutes
  expireTime: 60 * 60 * 1000,
  getDbConnectionString: function () {
    return `mongodb+srv://${process.env.UNAME}:${process.env.PWD}@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority`;
  },
  secrets: {
    jwt: process.env.JWT || "mysecret",
  },
};

export default config;
