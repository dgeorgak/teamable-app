const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', function(req, res) {
    const response = {
        name: "Dim Georgak",
        email: "dgeorgak@example.com",
        interests: "bird watching"
    }
    res.send(response)
})

app.post('/update-profile', function(req, res) {
    const payload = req.body
    console.log(payload)
    if (Object.keys(payload).length === 0) {
        res.status(400).send({info: "empty payload. Couldn't update user profile data."})
    } else {
        res.status(200).send({info: "user profile data updated successfully"})
    }
})

app.listen(3000, function () {
    console.log("app listening on port 3000")
})