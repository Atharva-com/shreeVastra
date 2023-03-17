import mongoose from "mongoose";

const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){           // check the Previous connections
        return handler(req,res)
    }
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        
    }
    await mongoose.connect(process.env.MONGO_URI)            // New Connection
    return handler(req,res)
}

export default connectDb;