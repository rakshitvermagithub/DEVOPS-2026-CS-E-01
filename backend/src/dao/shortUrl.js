import urlSchema from "../models/shorturl.model.js";

export const saveShortUrlSchema = async (shortUrl, longUrl, userId) => {
    try {
        const newUrl = new urlSchema ({
            full_url: longUrl,
            short_url: shortUrl,
        });
        if (userId) {
            newUrl.user_id = userId;
        }
	    await newUrl.save();
    } catch(err) {
        throw new Error(err)
    } 
};

export const getLongUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short_url:shortUrl}, {$inc:{clicks:1}});
};