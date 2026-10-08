export const createShortUrl = async (url) => {
    const submitUrl = "http://localhost:3500/api/create";
    const reqObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({longUrl: url})
    };

    const response = await fetch(submitUrl, reqObj);
    const { shortUrl } = await response.json();
    return shortUrl;
};