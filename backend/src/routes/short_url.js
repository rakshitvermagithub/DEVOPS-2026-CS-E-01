import express from "express";
const router = express.router();

import { nanoid } from 'nanoid'

router.post("/", (req, res) => {
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

export default router;