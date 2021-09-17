
const app = require('../app.js')
const request = require('supertest')

describe(
  'should return win record and update when after a game is played', () => {
    test('should return win record', async() => {
      const test = await request(app).get('/api/record')
      expect(test.statusCode).toEqual(200)
      expect(test.body[1].username).toBeTruthy()
    }),
    test('should update if player wins', async() => {
      const test = await request(app).put('/api/record').send({ id: 2 })
      expect(test.statusCode).toBe(200),
      expect(test.body[1].wins).toBeTruthy()
    })
})
