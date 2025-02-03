import mongoose from "mongoose";
import bcrypt from "bcrypt";
//phone category country website
// Define schema directly
const SellerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // Use unique index at DB level
    lowercase: true,
    trim: true,
    validate: [
      {
        validator: function (value) {
          // Check if the email is in a valid format
          return /^\S+@\S+\.\S+$/.test(value);
        },
        message: "Invalid email format",
      },
      {
        validator: async function (value) {
          const count = await Seller.countDocuments({
            email: value,
          });
          return count === 0;
        },
        message: "try another Email it already Exists! ",
      },
    ],
  },
  firstname: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "no such a name with one letter..."],
    // validate: { validator: async (value) => {} },
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [2, "minimum length of any name is 2 😡"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    validate: {
      validator: (value) => {
        const passRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return passRegex.test(value);
      },
      message:
        "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character.",
    },
  },
  profilePic: {
    type: String,
  },
  phone: {
    type: Number,
    required: [true, "we need your phone number only for client-seller issues"],
    minlength: [7, "minimum digit in phone number is 7"],
  },
  category: {
    type: String,
  },
  country: {
    type: String,
  },
  website: {
    type: String,
  },
  created: {
    type: Date,
  },
  modified: {
    type: Date,
  },
  permission: {
    type: Object,
  },
});
SellerSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = bcrypt.genSaltSync(12);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});
SellerSchema.methods = {
  authenticate: function (plainTextPword) {
    console.log("this password is " + this.password);
    return bcrypt.compareSync(plainTextPword, this.password);
  },
  toJson: function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
  },
};
const Seller = mongoose.model("Sellers", SellerSchema);
export default Seller;
