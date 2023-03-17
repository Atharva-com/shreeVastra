import User from "@/models/User"
import connectDb from "@/middleware/mongoose"

var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const {name, phone, email} = req.body
        let u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET ).toString(), phone})
        await u.save()
        var token = jwt.sign({ email: email, name: name }, process.env.JWT_SECRET, { expiresIn: '2d' });
        res.status(200).json({ success: "Success", token, email: email })
    }
    else {
        res.status(400).json({ error: "Invalid method" })
    }

}

export default connectDb(handler);
