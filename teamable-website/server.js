const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { MongoClient } = require("mongodb")
const { isEmptyPayload, isInvalidEmail } = require('./validator')

const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)
const dbName = "company_db"
const collName = "employees"

app.use(bodyParser.json())
app.use("/", express.static(__dirname + "/dist"))

app.get('/get-profile', async function(req, res) {
    await client.connect()
    console.log('Connected successfully to server')

    const db = client.db(dbName)
    const collection = db.collection(collName)
    
    const result = await collection.findOne({id: 1})
    console.log(result)
    client.close()

    let response = {}
    if (result !== null) {
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests
        }
    }
    res.send(response)
})


app.post("/update-profile", async function (req, res) {
    const payload = req.body
    console.log(payload)

    if (isEmptyPayload(payload) || isInvalidEmail(payload)) {
        res.status(400).send({
            info: "invalid payload. Couldn't update user profile data.",
        })
    } else {
        await client.connect()
        console.log("Connected successfully to server")

        const db = client.db(dbName)
        const collection = db.collection(collName)

        payload["id"] = 1
        const updatedValues = { $set: payload }
        await collection.updateOne({ id: 1 }, updatedValues, { upsert: true })
        client.close()

        res.status(200).send({
            info: "user profile data updated successfully",
        })
    }
})

app.listen(3000, function () {
    console.log("app listening on port 3000")
})
