import jsonwebtoken from "jsonwebtoken";
import { nanoid } from "nanoid";

export const generateId = (len) => {
	return nanoid(len);
}

export const signToken = (payload) => {
	return jsonwebtoken.sign(payload, process.env.JWT_SECRET, cookieOptions);
}

export const verifyToken = (token) => {
	return jsonwebtoken.verify(token, process.env.JWT_SECRET);
}