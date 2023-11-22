const express = require('express')
const queryController = require("../controllers/queryController")
const queryRouter = express.Router()

queryRouter.post('/history-query', queryController.addQuery)
queryRouter.get('/get-history', queryController.getQueries)

module.exports = queryRouter