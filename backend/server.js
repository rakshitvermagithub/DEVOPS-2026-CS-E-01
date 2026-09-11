import express from 'express'
import path from 'path'
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'
dotenv.config('./.env')
import connectDB from './src/config/mongo.config.js'
import urlSchema from './src/models/shorturl.model.js'
import { fileURLToPath } from 'url'
import rootRoutes from './routes/root.js'

const __filename = fileURLToPath(import.meta.url) // current file path
const __dirname = path.dirname(__filename) // current directory path

const app = express()
const PORT = process.env.PORT || 3500

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/api/create', (req, res) => {
	const {url} = req.body;
	const shortUrl = nanoid(7);
	const newUrl = new urlSchema ({
		full_url: url,
		short_url: shortUrl,
	});
	console.log(newUrl)
	newUrl.save();
	res.send(shortUrl); 
})

// Basic redirection route
app.get("/:id", async (req, res) => {
	const {id} = req.params;
	const url = await urlSchema.findOne({short_url: id});
	if(url) {
		res.redirect(url.full_url);
	}
	else {
		res.status(404).send("Not found");
	}
})

app.use('/', express.static(path.join(__dirname, '/public'))) // serve static files
app.use('/', rootRoutes) // serve routes

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
