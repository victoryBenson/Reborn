import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import productRoute from "./routes/productRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import rateLimitMiddleware from "./middleware/rateLimit.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./utils/errorhandler.js";


const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;


const allowedOrigin = ['https://reborn-9uk3.onrender.com/', 'http://127.0.0.1:3000/', 'http://localhost:5173']
const corsOptions = {
  origin: (origin, callback) => {
    if(allowedOrigin.indexOf(origin) !== -1 || !origin){
        callback(null, true)
    }else{
        callback(new Error("Not allowed by CORS"))
    }
  },
  optionsSuccessStatus : 200
};

//middleware
app.use(express.json());
app.use(cookieParser(process.env.ACCESS_TOKEN_SECRET));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
// app.use(rateLimitMiddleware);


//routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


//view your token
app.get("/get", (req, res) => {
  const cookies = req.cookies;
  console.log("not singed cookie", cookies);

  const singedCookies = req.signedCookies;
  console.log("signedCookies:", singedCookies);
});

app.get("/", (req,res) => res.send('Welcome to Reborn'))


// Custom ErrorHandler middleware
app.use(errorHandler)

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}!`);
    console.log(`build competence!...build Capacity!`);
  });
});
