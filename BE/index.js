import express from "express"
import mongoose from "mongoose"
import cors from "cors";
import './config/config.js'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})