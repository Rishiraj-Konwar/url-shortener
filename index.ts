import express from "express"
import type { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

const port = process.env.PORT

app.get("/", (req: Request, res: Response) => {
  res.send("Basic url shortner")
})

app.listen(port, () => {
  console.log(`url shortner running on : http://localhost:${port}`)
})
