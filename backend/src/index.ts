import express from "express"
import blogRoutes from "./view/blog.routes.ts"

const app = express()

app.use(express.json())
app.use("/blogs", blogRoutes)
const PORT = process.env["PORT"]
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})