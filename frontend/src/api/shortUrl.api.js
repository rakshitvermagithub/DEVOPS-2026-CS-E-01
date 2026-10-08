import axiosInstance from "../utils/axiosInstance";

export const createShortUrl = async (url) => {
    // data is a response object that contains the data returned from the server
    const {data} = await axiosInstance.post("api/create", { longUrl: url });
    return data.shortUrl;
};