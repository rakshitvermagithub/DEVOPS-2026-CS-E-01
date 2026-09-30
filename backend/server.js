import express from 'express'
import dotenv from 'dotenv'
dotenv.config('./.env')
import connectDB from './src/config/mongo.config.js'
import shortUrlRoute from "./src/routes/short_url.js";
import { redirectFromShortUrl } from './src/controllers/shortUrl.js'
import { errorHandler } from './src/utils/errorHanlder.js'
import cors from 'cors'

const app = express()
app.use(cors()) // Means allow all origins other than the backend, to request it
// Okay for development but a list of whitelisted cross origins should be given for production

const PORT = process.env.PORT || 3500

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/create", shortUrlRoute);

// Basic redirection route
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
})
