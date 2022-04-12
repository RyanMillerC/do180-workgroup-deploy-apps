const express = require('express')
const http = require('http')

const app = express()

app.get('/', (request, result) => {
    result.send('World!')
})

app.listen(3333,"0.0.0.0",function(){
    console.log('hello world app is listening on port 3333')
})
