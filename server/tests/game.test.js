const request = require('supertest')
const app = require('../app.js')

describe(
  'should return game play', () => {
    test('should return objects representing each round of play', async() => {
      const test = await request(app).get('/api/game')
      expect(test.statusCode).toEqual(200)
      expect(test.body.length)<5001
    })
  }
)
