import axios from "axios"

export const createShortUrl = async (url) => {
    const submitUrl = "http://localhost:3500/api/create";
    const { shortUrl } = await axios.post(submitUrl, { longUrl: url });
    return shortUrl;
};