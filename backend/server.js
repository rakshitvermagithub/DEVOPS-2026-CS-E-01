import express from 'express'
import path from 'path'
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'
dotenv.config('./.env')
import connectDB from './src/config/mongo.config.js'

const app = express()
const PORT = process.env.PORT || 3500

// app.use('/', express.static(path.join(__dirname, '/public'))) // serve static files
// app.use('/', require('./routes/root')) // serve routes

app.all('*', (req, res) => {
  res.status(404)
  
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
})
