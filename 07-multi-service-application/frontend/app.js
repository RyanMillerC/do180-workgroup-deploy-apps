const express = require('express')
const http = require('http')

const app = express()

app.get('/', (request, result) => {
    http.get(process.env.BACKEND_SERVICE, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        })
        response.on('end', () => {
            result.send('Hello ' + data)
        })
    }).on('error', (err) => {
        result.send('Error: ' + err.message)
    })
})

app.listen(8080,"0.0.0.0",function(){
    console.log('hello world app is listening on port 8080')
})
