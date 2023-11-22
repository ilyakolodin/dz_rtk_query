const mongoose = require('mongoose')

const querySchema = mongoose.Schema(
    {
        time: [String],
		pm10: [Number],
		pm2_5: [Number]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Query', querySchema)