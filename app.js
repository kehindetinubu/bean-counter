require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "127.0.0.1"

const authRoutes = require("./routes/auth.routes")

app.use(express.json())
app.use("/api", authRoutes)

app.listen(PORT, HOST, () => {
	try {
		console.log(`[server] running on ${HOST}:${PORT}`)
	} catch(error) {
		console.error(error)
	}
})