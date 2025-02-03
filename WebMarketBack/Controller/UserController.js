import User from "../Model/UserModel.js";
// createUser
export const createUser = async (req, res, next) => {
  try {
    const userDataReceived = req.body;
    const newUser = await User.create(userDataReceived);
    res
      .status(201)
      .json({ status: "User created successfully", user: newUser });
  } catch (err) {
    res.status(400).json({
      status: "Failed to create user",
      msg: `Error msg: ${err.message}`,
    });
  }
};

// Read about user by their id
export const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userData = await User.find({ _id: id });
    res.status(200).json({ status: "Success", Selecteduser: userData });
  } catch (err) {
    res
      .status(400)
      .json({ status: "Failed", msg: `Error msg: ${err.message}` });
  }
};

// Find & Update by ID
export const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      status: "Success, updated and found the user",
      UserUpdatedData: user,
    });
  } catch (err) {
    res
      .status(400)
      .json({ status: "Failed to update", msg: `Error msg: ${err.message}` });
  }
};

// Delete user by ID
export const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ status: "Deleted the selected user successfully", data: null });
  } catch (err) {
    res.status(400).json({ status: "Failed", msg: `Error: ${err.message}` });
  }
};

// Export the controller functions (no need to export as an object in ESM)
export default {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
