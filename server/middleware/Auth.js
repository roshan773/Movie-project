const jwt = require("jsonwebtoken");
require("dotenv").config();

function chechIsAuth (req, res, next) {
    const {access_token}=req.cookies;
    if (!access_token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    const decoded = jwt.verify(access_token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
        return res.status(401).json({ message: "Invalid token" });
    } 
    // console.log("Decoded token:", decoded);
    req.user=decoded
    next();
}

module.exports = chechIsAuth