import { generateId } from "../utils/helper.js";
import { saveShortUrlSchema } from "../dao/shortUrl.js";

export const createShortUrlServiceWithoutUser = async (longUrl) => { 
    const shortUrl = await generateId(7);
	await saveShortUrlSchema(shortUrl, longUrl);
    return shortUrl;
}

export const createShortUrlServiceWithUser = async (longUrl, userId) => { 
    const shortUrl = await generateId(7);
	await saveShortUrlSchema(shortUrl, longUrl, userId);
    return shortUrl;
}