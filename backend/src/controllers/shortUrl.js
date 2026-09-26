import { createShortUrlServiceWithoutUser } from "../services/shortUrl.js";
import { getLongUrl } from "../dao/shortUrl.js";

export const createShortUrlController = async (req, res, next) => {
	try {	
		const { longUrl } = req.body;
		console.log(longUrl)
		const shortUrl = await createShortUrlServiceWithoutUser(longUrl);
		res.send(process.env.APP_URL + shortUrl); 
	} catch (err) {
		next(err)
	}
}

export const redirectFromShortUrl = async (req, res) => {
	const { id } = req.params;
	const { full_url } = await getLongUrl(id);
	res.redirect(full_url);
}