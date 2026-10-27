import express from 'express'
import {nanoid} from "nanoid"
import dotenv from 'dotenv'
dotenv.config('./.env')
import connectDB from './src/config/mongo.config.js'
import shortUrlRoute from "./src/routes/short_url.route.js";
import authRoutes from "./src/routes/auth.routes.js";
import { redirectFromShortUrl } from './src/controllers/shortUrl.controllers.js'
import { errorHandler } from './src/utils/errorHanlder.js'
import cors from 'cors'
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";
import user_routes from "./src/routes/user.routes.js";

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

const PORT = process.env.PORT || 3500

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(attachUser);

app.get("/health", (_req, res) => {
    res.status(200).json({status: "ok"});
});

app.use("/api/user",user_routes)
app.use("/api/auth", authRoutes);
app.use("/api/create", shortUrlRoute);
// Basic redirection route
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
})
