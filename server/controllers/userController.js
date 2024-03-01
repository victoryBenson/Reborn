import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";



//register
export const register = async (req, res, next) => {
  try {
    const { email } = req.body;
  
    const duplicate = await User.findOne({ email }).lean().exec();
  
    if (duplicate) {
      return res.status(409).json({ message: "User already exists" });
    }
  
    const newUser = await User.create(req.body);
  
    if (newUser) {
      const { password, ...rest } = newUser._doc;
      return res.status(201).json(rest);
    }
    
  } catch (err) {
    next(err)
  }
}

//getusers
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password").sort("-createdAt");

    if (!users?.length) {
      return res.status(400).json({ message: "No user found!" });
    }

    res.status(200).json(users);
    
  } catch (err) {
    next(err)
  }
  };

//updateUser
export const updateUser = asyncHandler(
  async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if (user) {
      const { username, email, role, password } = user;
      user.username = req.body.username || username;
      user.email = req.body.email || email;
      user.role = req.body.role || role;
      user.password = req.body.password || password;

      const updateUser = await user.save();
      res.status(200).json(updateUser);
    } else {
      res.status(400).json("User not found!");
    }
  },
  (err, req, res, next) => {
    next(err);
  }
);

//deleteuser
export const deleteUser = asyncHandler(
  async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (user) {
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(400).json("User not found");
    }
  },
  (err, req, res, next) => {
    next(err);
  }
);
