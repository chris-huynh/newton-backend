const request = require('supertest');
const app = require('../app');

test('should return 200 when valid api key is set up in dev env ', async () => {
    request(app).get('/newtonMovie/1')
        .set('Accept', 'application/json')
        .expect(200, "ok")
})

/*Modify the environment to replicate a missing api key, test, and restore environment back to how it was*/
describe('absent api key', () => {
    const env = process.env;

    beforeEach(() => {
        process.env.KEY = '';
        console.log('hello')
    })

    test('should return 500 when api key is absent', async () => {
        request(app).get('/newtonMovie/1')
            .set('Accept', 'application/json')
            .expect(500)
    })

    afterEach(() => {
        process.env = {...env};
    })
})

//TODO test for when 'pageNumber' is not a number and expect a 400, due to malformed request
//TODO test when OMDb returns HTTP 400/500 and expect a 400/500 with a meaningful error response