const { app, server } = require('./server')
const request = require('supertest')

test("test request with valid payload", async function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "testing"
    }
    const response = await request(app)
        .post('/update-profile')
        .send(testPayload)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("user profile data updated successfully")

    server.close()
})

test("test request with empty payload", async function() {
    const testPayload = { }
    const response = await request(app)
        .post('/update-profile')
        .send(testPayload)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("invalid payload. Couldn't update user profile data.")

    server.close()
})

test("test request with invalid email", async function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        interests: "testing"
    }
    const response = await request(app)
        .post('/update-profile')
        .send(testPayload)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("invalid payload. Couldn't update user profile data.")

    server.close()
})