const express = require('express')
const http = require('http')

const app = express()

app.get('/', (request, result) => {
    result.send('World says "Hi back"!')
})

app.listen(8080,"0.0.0.0",function(){
    console.log('hello world app is listening on port 8080')
})
