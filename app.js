 const https = require('https')
 const fs = require('fs')
 const express = require('express')
 const app = express()
 const port = 3000

require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const elkRouter = require('./routers/elk')

app.use(express.json())
app.use(userRouter)
app.use(elkRouter)


 app.get('/', (req, res) => {
     res.send('Hello World!!!')
 })

 app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
 })

