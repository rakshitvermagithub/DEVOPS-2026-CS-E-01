import { createShortUrlService } from "../services/shortUrl.js";

export const createShortUrlController = async (req, res) => {
	const { longUrl } = req.body;
    const shortUrl = await createShortUrlService(longUrl);
	res.send(process.env.APP_URL + shortUrl); 
}