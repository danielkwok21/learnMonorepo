const express = require('express')
const cors = require('cors')
const app = express()
const port = 400

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
