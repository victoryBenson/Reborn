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


const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

//middleware
app.use(express.json());
app.use(cookieParser(process.env.ACCESS_TOKEN_SECRET));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(rateLimitMiddleware);


//routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


//view your token
app.get("/get", (req, res) => {
  const cookies = req.cookies;
  console.log("not singed coookie", cookies);

  const singedCookies = req.signedCookies;
  console.log("signedCookies:", singedCookies);
});

// app.get("/", (req,res) => res.send('Welcome to Reborn'))
app.get('/', (req, res) => {
  res.send("Welcome to Reborn");
});

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}!`);
    console.log(`...build Capacity!`);
    //the cure for shame is competence
    //the real reward come when kings reward you!
  });
});
