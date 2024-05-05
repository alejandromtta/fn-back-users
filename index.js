
import express from 'express'
import userRoutes from "./routes/user.routes.js"
import  cors from "cors"
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use('/api',userRoutes )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})