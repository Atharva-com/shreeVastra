import User from "@/models/User"
import connectDb from "@/middleware/mongoose"
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token = req.body.token
        let user = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(user)
        let dbuser = await User.findOne({email: user.email})
        const {name, email, phone, street, house, colony, pincode} = dbuser
        res.status(200).json({ name, email, phone, street, house, colony, pincode })
    }
    else {
        res.status(400).json({ error: "Error" })
    }

}

export default connectDb(handler);