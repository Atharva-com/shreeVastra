import User from "@/models/User"
import connectDb from "@/middleware/mongoose"
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token = req.body.token
        let user = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(user)
        let dbuser = await User.findOneAndUpdate({email: user.email}, {phone: req.body.phone, street: req.body.street, house: req.body.house, colony: req.body.colony, pincode: req.body.pin, name: req.body.name})
        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ error: "Error" })
    }

}

export default connectDb(handler);