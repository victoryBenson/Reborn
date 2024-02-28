import mongoose from "mongoose";
import bcryt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password!"],
      minLength: [6, "Password must be up to 6 character"],
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
      required: [true, 'Pls choose a role!']
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
  const salt = await bcryt.genSalt(10);
  const hashedPassword = await bcryt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

//export
const User = mongoose.model("User", userSchema);
export default User;
