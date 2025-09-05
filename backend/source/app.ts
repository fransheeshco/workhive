import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes'
import projectRouter from './routes/projectRoutes'

const app: Application = express()

app.use(cors())
app.use(express.json())

// default
app.get("/", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "🚀 API is running" })
});

// routers
app.use("/users" , userRouter)
app.use("/projects", projectRouter)

export default app