import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};

// Initial route
app.get('/', (req, res) => {
res.send('Welcome to the backend! 🚀');
});

app.listen(PORT, () => { 
console.log(`Server running on port ${PORT}`);
});
