const express = require('express');
const morgan = require('morgan');
const config = require('./config');
require('colors')

const server = express();
server.use(morgan('dev'))

const port = config.port;
const host = config.host;

const posts = [];

server.post('/post', express.json(), (req, res) => {
    let name = req.body.name;
    let message = req.body.message;
    if (!name || !message) {
        res.status(400).send('Campos incompletos')
    } else {
        posts.push(req.body)
        console.log('posts'.inverse.red, posts)
        res.send('OK')
    }
})

server.get('/post/:name', (req, res) => {
    let name = req.params.name;
    let name_result = posts.filter(post => post.name === name) 
    let messages = [];
    name_result.forEach(result => {
        messages.push(result.message)
    })
    console.log('Messages'.inverse.yellow, messages)
    console.log('Result'.inverse.blue, name_result)
    res.send(messages)  
 
})
server.get('/post', (req, res) => {
 res.send('Por favor ingresa un nombre') 
})

server.listen(port, host, () => {
    console.log(`Server running on ${host}:${port}`)
});