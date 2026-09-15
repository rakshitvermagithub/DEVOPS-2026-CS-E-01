import { generateId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js"

export const createShortUrlService = (longUrl) => { 
    const shortUrl = generateId(7);
	const newUrl = new urlSchema ({
		full_url: longUrl,
		short_url: shortUrl,
	});
	console.log(newUrl);
	newUrl.save();

    return shortUrl;
}