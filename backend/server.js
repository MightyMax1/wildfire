import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('hellllo')
})


app.listen(process.env.PORT, console.log(`server lisiten port ${process.env.PORT}`))