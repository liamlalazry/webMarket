import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [
      {
        validator: function (value) {
          return /^\S+@\S+\.\S+$/.test(value); // Regex for email format
        },
        message: "Invalid email format",
      },
      {
        validator: async function (value) {
          const count = await User.countDocuments({
            email: value,
          });
          return count === 0; // Ensure email is unique
        },
        message: "Email already exists! Try another.",
      },
    ],
  },
  firstname: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name must have at least 2 characters"],
  },
  lastname: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    validate: {
      validator: (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
          value
        ); // Strong password validation
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    },
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["admin", "seller", "customer"],
  },
  created: {
    type: Date,
    default: Date.now, // Automatically set creation date
  },
  modified: {
    type: Date,
    default: Date.now,
  },
  profilePic: {
    type: String,
  },
  phone: {
    type: String,
    required: function (value) {
      if (this.role === "seller") {
        return true;
      }
      return false;
    },
    validate: {
      validator: (value) => {
        return /^\d{7,}$/.test(value); // Validate minimum 7 digits
      },
      message: "Phone number must be at least 7 digits",
    },
  },
  category: {
    type: String,
  },
  country: {
    type: String,
    required: function (value) {
      if (this.role === "seller") return true;
    },
  },
  website: {
    type: String,
  },
});

// Hash password before saving
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = bcrypt.genSaltSync(12);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

// Add instance methods
UserSchema.methods = {
  authenticate: function (plainTextPassword) {
    return bcrypt.compareSync(plainTextPassword, this.password);
  },
  toJson: function () {
    const obj = this.toObject();
    delete obj.password; // Exclude password from response
    return obj;
  },
};

// Create the model
const User = mongoose.model("Users", UserSchema);

export default User;
