import express from "express";
const router = express.router();
import { generateId } from "../utils/helper.js"

router.post("/", (req, res) => {
	const {url} = req.body;
    const shortUrl = generateId(7);
	const newUrl = new urlSchema ({
		full_url: url,
		short_url: shortUrl,
	});
	console.log(newUrl)
	newUrl.save();
	res.send(shortUrl); 
})

export default router;