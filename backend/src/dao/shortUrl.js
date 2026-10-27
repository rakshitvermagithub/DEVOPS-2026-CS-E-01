import urlSchema from "../models/shorturl.model.js";

export const saveShortUrlSchema = async (shortUrl, longUrl, userId) => {
    try {
        const newUrl = new urlSchema ({
            full_url: longUrl,
            short_url: shortUrl,
            user: userId,
        });
	    await newUrl.save();
    } catch(err) {
        throw new Error(err)
    } 
};

export const getLongUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short_url:shortUrl}, {$inc:{clicks:1}});
};

export const getCustomShortUrl = async (slug) => {
    return await urlSchema.findOne({short_url:slug});
}