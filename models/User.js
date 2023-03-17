const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    street: {type: String, default: ''},
    house: {type: String, default: ''},
    colony: {type: String, default: ''},
    pincode: {type: String, default: ''},
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("User", UserSchema)