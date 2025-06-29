import express from "express"
import cors from "cors";
import './src/config/config.js'
import { giftRouter } from "./src/routers/giftRouter.js";
import { userRouter } from "./src/routers/userRouter.js";
import 'dotenv/config'
import { authRouter } from "./src/routers/authRouter.js";
import { categoryRouter } from "./src/routers/categoryRouter.js";
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use("/gifts", giftRouter)
app.use("/user",userRouter)
app.use("/", authRouter)
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})