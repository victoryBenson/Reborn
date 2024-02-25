import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { cookieConfig } from "./authController.js";



//register
export const register = asyncHandler(async (req, res, next) => {
  const { username, email, password, role} = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All field are required" });
  }

  const duplicate = await User.findOne({ email }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "User already exists" });
  }

  //create user data
  const userObject = {
    username,
    password,
    email,
    role
  };

  // create new user
  const newUser = await User.create(userObject);

  if (newUser) {
    const { username, email, profilePicture, role } = newUser;

    return res.status(201).json({ username, email, profilePicture, role});
  } else {
    return res.status(400).json({ message: "Invalid user details" });
  }
});


//getusers
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password").sort('-createdAt');

  if (!users?.length) {
    return res.status(400).json({ message: "No user found!" });
  }

  res.status(200).json(users);
});

//updateUser
export const updateUser = asyncHandler(async (req, res) => {
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
});

//deleteuser
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (user) {
    res.status(200).json({ message: "User deleted" });
  } else {
    res.status(400).json("User not found");
  }
});

