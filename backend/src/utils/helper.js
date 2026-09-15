import { nanoid } from "nanoid";

export const generateId = (len) => {
	return nanoid(len);
}
