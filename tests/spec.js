// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../app");

//given the request for test case
const service = {
    startDate: "2016-01-29",
    endDate: "2017-01-28",
    minCount: 1000,
    maxCount: 1500
};

//check if response is on correct format or not
describe("POST /getir ", () => {
    test("It should respond 200 code that means success.", async () => {
        const response = await request(app).post("/getir").send(service);
        expect(response.status).toBe(200);
    });
});