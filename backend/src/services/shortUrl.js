import { generateId } from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrlSchema } from "../dao/shortUrl.js"

export const createShortUrlWithoutUser = async (longUrl) => { 
    const shortUrl = generateId(7);
    if (!shortUrl) throw new Error("Short URL not generated")
	await saveShortUrlSchema(shortUrl, longUrl);
    return (shortUrl);
}

export const createShortUrlWithUser = async (longUrl, userId, slug=null) => {
    // slug is optional and is used to create custom short urls.
    const shortUrl = slug || generateId(7);
    const exists = await getCustomShortUrl(shortUrl);
    if (exists) throw new Error("Custom short URL already exists");
	await saveShortUrlSchema(shortUrl, longUrl, userId);
    return shortUrl;
}