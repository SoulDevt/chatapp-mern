const express = require('express')
const { chats } = require("./data/data")
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')

const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler } = require('./middleware/errorMiddleware')




dotenv.config()
connectDB();
const app = express()

app.use(express.json()) //to accept JSON data

app.get('/', (req, res) => { 
    res.send('api running')
})

app.use("/api/user", userRoutes)
app.use("/api/chat", chatRoutes)

app.use(notFound)
app.use(errorHandler)

// app.get('/api/chat', (req, res) => { 
//     res.send(chats);
// })
// app.get('/api/chat/:id', (req, res) => { 
//     console.log(req.params.id);

//     const singleChat = chats.find(chat => chat._id === req.params.id)
//     console.log(singleChat)
// })

const PORT = process.env.PORT || 4000

app.listen(16000, console.log(`server started on port  + ${PORT}`.yellow.bold))