const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const app = express()

app.use(express.static('frontend/build'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
})


app.listen(process.env.PORT, console.log(`server lisiten port ${process.env.PORT}`))