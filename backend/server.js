const express = require('express')
const { chats } = require("./data/data")
const dotenv = require('dotenv')


const app = express()
dotenv.config()


app.get('/', (req, res) => { 
    res.send('api running')
})

app.get('/api/chat', (req, res) => { 
    res.send(chats);
})
app.get('/api/chat/:id', (req, res) => { 
    console.log(req.params.id);

    const singleChat = chats.find(chat => chat._id === req.params.id)
    console.log(singleChat)
})

const PORT = process.env.PORT || 4000

app.listen(16000, console.log('server started on port ' + PORT))