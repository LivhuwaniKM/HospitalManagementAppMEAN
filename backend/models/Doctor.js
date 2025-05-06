const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    speciality: { type: String, required: true },
});
const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
// import { Schema, Model } from "mongoose";

// const doctorSchema = new Schema({
//     name: { type: String, required: ture },
//     specialty: { type: String, required: true },
// });
// const Doctor = Model("Doctor", doctorSchema);

// export default Doctor;