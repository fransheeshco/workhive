import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "🚀 API is running" })
});

app.use("/user", userRouter)

export default app