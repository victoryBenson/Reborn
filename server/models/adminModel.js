import mongoose from "mongoose";
import bcryt from "bcryptjs";

const adminSchema = mongoose.Schema(
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
      match: [ /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a vaild email"]
    },
    password: {
      type: String,
      required: [true, "Please add your Access Token"]
    }, 
    profilePicture: {
      type: String,
      require: [true, "Please add a profile picture"],
      default:
        "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg",
    }
  },
  {
    timestamps: true,
  }
);

//hash the password before saving to database!
adminSchema.pre("save", async function (next) {
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
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
