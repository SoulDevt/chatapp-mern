const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`mongodb connected: ${conn.connection.host}`.cyan.underline)

    } catch (err) {
        console.error(`Error: ${err.message}`.red.bold)
        process.exit()
    }
}

module.exports = connectDB;