import { createUser, findUserByEmail } from "../dao/user.dao";
import { signToken } from "../utils/helper";

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email);
    if(user) throw new Error("User already exists");

    const newUser = createUser(name, email, password);
    const token = signToken({userId: newUser._id});
    return token;
}