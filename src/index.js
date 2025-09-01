import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}) 
.catch((err) => {
    console.error("Error connecting to the database:", err);
})















/*
import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.error("Error starting the server:", error);
            throw error;
        })

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})
*/