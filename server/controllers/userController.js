import User from "../models/userModel.js";


//getUsers
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

  //getUsersCount
export const getUsersCount = async (req, res, next) => {
  try {
    const users = await User.find({}).count();

    res.status(200).json(users);
    
  } catch (err) {
    next(err)
  }
  };

//updateUser
export const updateUser = async (req, res, next) => {
  try {
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
  } 
  catch (error) {
    next(err);
  }
};

//deleteUser
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(400).json("User not found");
    }
  } catch (error) {
    next(error);
  }
};
