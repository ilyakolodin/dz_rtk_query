const path = require('path')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const dbConfig = require('./config/database.config')

const userRouter = require("./routes/userRouter")
const queryRouter = require("./routes/queryRouter")

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.use("/", userRouter)
app.use("/query", queryRouter)

//Подключение к БД
mongoose.connect(dbConfig.url)
	.then(() => {
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`)
		})
	})
	.catch((error) => {
		console.log(error)
		process.exit()
	})