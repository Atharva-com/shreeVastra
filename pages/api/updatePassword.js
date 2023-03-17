import User from "@/models/User"
import connectDb from "@/middleware/mongoose"
import Jsonwebtoken from "jsonwebtoken"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if(req.method == 'POST'){
        let token = req.body.token
        let user = Jsonwebtoken.verify(token, process.env.JWT_SECRET)
        let dbUser = await User.findOne({email: user.email})
        const bytes = CryptoJS.AES.decrypt(dbUser.password, process.env.AES_SECRET);
        let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        if(decryptedData == req.body.currPassword && req.body.password == req.body.cpassword){
            let dbUser = await User.findOneAndUpdate({email: user.email}, {password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET ).toString()})
            res.status(200).json({ success: true })
        }
        res.status(200).json({ success: false })
    }
    else{
        res.status(400).json({ error: error })
    }
  
}

export default connectDb(handler);