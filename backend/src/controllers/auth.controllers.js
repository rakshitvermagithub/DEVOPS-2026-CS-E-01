import { registerUser, loginUser } from '../services/auth.service.js';
import { cookieOptions } from '../config/config.js';
import wrapAsync from "../utils/tryCatchWrapper.js"

export const register_user = async (req, res, next) => {
    try {
        const {name, email, password} = req.body
        const {token, user} = await registerUser(name, email, password);
        req.user = user; // Store the user in the request object for further use
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({"message": "User registered successful!"});   
    } catch (err) {
        next(err);
    }
};

export const login_user = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const {token, user} = await loginUser(email, password);
        req.user = user;
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({"message": "Login success!"});   
    } catch (err) {
        next(err);
    }
}

export const logout_user = wrapAsync( async (req, res) => {
    res.clearCookie("accessToken", cookieOptions)
    res.status(200).json({message:"logout success"})
})

export const get_current_user = wrapAsync( async (req, res) => {
    res.status(200).json({user:req.user})
})
