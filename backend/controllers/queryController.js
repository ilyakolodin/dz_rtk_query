const Query = require('../models/queryModel')

exports.addQuery = async (req, res) => {
	try {
		const query = await Query.create(req.body)
		res.status(200).json(query)
	} catch (error) {
		console.log(error.mesage)
		res.status(500).json({message: error.message})
	}
}

exports.getQueries = async (req, res) => {
	try {
		const queries = await Query.find({})
		res.status(200).json(queries)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}
