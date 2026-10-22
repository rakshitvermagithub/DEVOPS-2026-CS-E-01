import registerUser from '../services/auth.service.js';

export const registerUser = wrapAsync(async (req, res) => {
    const {name, email, password} = req.body
    const user = await registerUser(name, email, password);
    res.status(200).json(user);
});

