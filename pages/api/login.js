import User from "@/models/User"
import connectDb from "@/middleware/mongoose"
import { toast } from "react-toastify"

var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ "email": req.body.email })

        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email == user.email && req.body.password == decryptedData) {
                var token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: '2d' });
                res.status(200).json({ success: true, token, email: user.email })
            }
            else {
                res.status(200).json({ error: "invalid credentials" })
            }
        }
        else {
            res.status(200).json({ error: "user not exist" })
        }
    }

    else {
        res.status(400).json({ error: "Invalid method" })
    }

}

export default connectDb(handler);