import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const cookieConfig = {
  httpOnly: true,
  secure: true,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  sameSite: "None",
};

//generateToken
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

//register
export const register = async (req, res, next) => {
  try {
    const { email } = req.body;
  
    const duplicate = await User.findOne({ email }).lean().exec();
  
    if (duplicate) {
      return res.status(409).json({ message: "User already exists" });
    }

    if (!validator.isEmail(email))
    return res.status(400).json("Email must be a valid email...");
  
    const newUser  = await User.create(req.body);

    const token = generateToken(User._id)
    console.log(accessToken)
    
    if (newUser) {
      const { password, ...rest } = newUser._doc;
      return res
      .status(201)
      .json(rest)
      .cookie("token", token, cookieConfig)
      .header("Authorization", token)
      .status(201)
      .json(newUser)
    }
    
  } catch (err) {
    next(err)
  }
}


//loginUser
export const Login = async (req, res, next) => {
  try {
    
    const { email, password } = req.body;
  
    const findUser = await User.findOne({ email }).lean(); //check if email already exist
    if (!findUser) {
      return res.status(403).json({ message: "User does no exist!" });
    }
  
    // verify password
    const verifyPwd = await bcrypt.compare(password, findUser.password);
    if (!verifyPwd) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }
   
    //generate token
    const token = generateToken(findUser._id)
  
    if (findUser && verifyPwd) {
      const newUser = await User.findOne({ email }).select("-password")
      res
        .cookie("token", token, cookieConfig)
        .header("Authorization", token)
        .status(201)
        .json(newUser)
    } 
  
  } catch (err) {
    next(err)
  }
}

//Login status
export const getLoginStatus = async (req, res, next) => {
  const token = req.cookies.token
  try {
    if(!token){
            return res.json(false)
        }
    
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        if(verified){
            res.json(true)
        } else{
            res.json(false)
    }
  } catch (err) {
    next(err)
  }
  
};

//refresh token
// export const refreshToken = (req, res) => {
//   const cookies = req.cookies;

//   if (!cookies?.jwt) {
//     return res
//       .status(401)
//       .json({ message: "Access Denied. No refresh token provided" });
//   }

//   const refreshToken = cookies.jwt; //select a particular cookie by name

//   try {
//     const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//     const accessToken = jwt.sign(
//       { userInfo: decoded.userInfo },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: "1h" }
//     );

//     res
//       .header("Authorization", accessToken)
//       .json(decoded.userInfo.email)
//       .cookie("jwt", accessToken, cookieConfig);
//   } catch (error) {
//     return res.status(400).send("Invalid refresh token.");
//   }
// };

//logout
export const Logout = async (req, res, next) => { 
    try {
        
        const cookies = req.cookies;
        if (!cookies?.token) {
          return res.status(204).json("No content!"); //no content
        } else {
          res.clearCookie("token", cookieConfig);
          res.json({ message: "Cookie Cleared" });
        }
    } catch (err) {
        next(err)
    }
}