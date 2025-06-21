import express from "express"

import cors from "cors";
import './src/config/config.js'
import { giftRouter } from "./src/routers/giftRouter.js";
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use("/gifts", giftRouter)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})