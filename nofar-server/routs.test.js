const request = require('supertest')
// const app = require('../index')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request('http://localhost:9000')
      .post('/api/query')
      .send({
        payload: "hi",
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
  })
})

// const app = require('../index')
describe('Get Endpoints', () => {
  it('should create a new get', async () => {
    const res = await request('http://localhost:9000')
      .get('/api/popular/:id')
      .send({
          id: 5
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(10)
  })
})
