const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");
const doctoreRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

MONGO_URI = "mongodb://localhost:27017/hospitalDB";

// connect to MongoDB
mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected t MongoDB!");
});

// routes
app.use("/api/patient", patientRoutes);
app.use("/api/doctor", doctoreRoutes);
app.use("/api/appointment", appointmentRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});