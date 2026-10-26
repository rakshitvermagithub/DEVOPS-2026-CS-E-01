import { createUser, findUserByEmail } from "../dao/user.dao";
import { signToken } from "../utils/helper";

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email);
    if(user) throw new Error("User already exists");

    const newUser = createUser(name, email, password);
    const token = await signToken({userId: user._id});
    return {token, user: newUser};
}

export const loginUser = async (email, password) => {
    const user = await findUserByEmail(email);

    if(!user || user.password !== password) throw new Error("Invalid credentials");

    const token = await signToken({userId: user._id});
    return {token, user};
}