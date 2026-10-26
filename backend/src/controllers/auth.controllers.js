import { registerUser, loginUser } from '../services/auth.service.js';
import { cookieOptions } from '../config/config.js';

export const register_user = async (req, res, next) => {
    try {
        const {name, email, password} = req.body
        const token = await registerUser(name, email, password);
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({"message": "Login success!"});   
    } catch (err) {
        next(err);
    }
};

export const login_user = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const token = await loginUser(email, password);
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({"message": "Login success!"});   
    } catch (err) {
        next(err);
    }
}
