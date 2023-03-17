import Forgot from "@/models/Forgot";
import User from "@/models/User";

const handler = async (req, res) => {
    if (req.body.sendEmail) {
        // let dbUser = await User.findOne({email: req.body.email})
        // let forgot = new Forgot({
        //     email: req.body.email,
        //     token: token
        // })

        // let email = "body of an email"
    }
    else{
        // reset password code

    }

    res.status(400).json({ success: "true" })

}

export default connectDb(handler);