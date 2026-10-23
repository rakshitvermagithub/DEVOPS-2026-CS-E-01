import jsonwebtoken from "jsonwebtoken";
import { nanoid } from "nanoid";
import { cookieOptions } from '../config/config.js'

export const generateId = (len) => {
	return nanoid(len);
}

export const signToken = (payload) => {
	return jsonwebtoken.sign(payload, process.env.JWT_SECRET, cookieOptions);
}

export const verifyToken = (token) => {
	return jsonwebtoken.verify(token, process.env.JWT_SECRET);
}