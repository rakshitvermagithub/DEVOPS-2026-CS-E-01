import { createShortUrlWithUser, createShortUrlWithoutUser } from "../services/shortUrl.js";
import { getLongUrl } from "../dao/shortUrl.js";

export const createShortUrl = async (req, res, next) => {
	try {	
		const data = req.body;
		let shortUrl
		// If user is logged in
		if(req.user){
			shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
		} else {  
			shortUrl = await createShortUrlWithoutUser(data.url)
		}
		res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
	} catch (err) {
		next(err)
	}
}

export const redirectFromShortUrl = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { full_url } = await getLongUrl(id);
		if (!full_url) throw new Error("Short URL not found")
		res.redirect(full_url);
	} catch(err) {
		next(err);
	}
}