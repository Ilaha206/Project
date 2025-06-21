import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.DB_Connection)
    .then(() => console.log("Connected"))
    .catch(() => console.log("Not connected"))