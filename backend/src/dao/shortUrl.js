import urlSchema from "../models/shorturl.model.js";

const saveShortUrlSchema = (shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema ({
        full_url: longUrl,
        short_url: shortUrl,
	});
    if (userId) {
        newUrl.user_id = userId;
    }
	newUrl.save();
};

export default saveShortUrlSchema;