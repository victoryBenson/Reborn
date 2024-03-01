import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import pkg from 'validator';
const {isEmail, isStrongPassword} = pkg;


const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
      minLength: [2, "minimum 2letters"],
      maxLength: 30,
      lowercase: true
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email address"]
    },
    password: {
      type: String,
      required: [true, "Please add a password!"],
      // select: false,
      validate: [isStrongPassword, "Please use a strong password!"],
    }, 
    profilePicture: {
      type: String,
      require: [true, "Please add a profile picture"],
      default:
        "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg",
    },
    role:{
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
      required: [true, 'Pls choose a role!'],
      lowercase: true
    },
    address: {
      type: Object,
    },
    phone: {
      type: String,
      default: "+234",
    },
    // accessToken: {
    //   type: String,
    //   enum: ['a13293', 'b23498',],
    //   required: true                             
    // }

  },
  {
    timestamps: true,
  }
);

//hash the password before saving to database!
userSchema.pre("save", async function(next){
  if (!this.isModified("password")) {
    return next;
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

//export
const User = mongoose.model("User", userSchema);
export default User;
