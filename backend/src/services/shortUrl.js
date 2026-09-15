import { generateId } from "../utils/helper";

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