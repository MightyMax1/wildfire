import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('hellllo')
})


app.listen(process.env.PORT, console.log(`server lisiten port ${process.env.PORT}`))