import { createShortUrlService } from "../services/shortUrl";

export const createShortUrlController = (req, res) => {
	const { longUrl } = req.body;
    const shortUrl = createShortUrlService(longUrl);
	res.send(shortUrl); 
}