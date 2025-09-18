
const request = require('supertest');
const express = require('express');
const tasksRouter = require('../routes/tasks');

const app = express();
app.use(express.json());
app.use('/api/tasks', tasksRouter);

describe('Task API', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4000);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test Task', description: 'Test Description' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Task');
  });

  it('should return all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return a task by ID', async () => {
    const res = await request(app).get('/api/tasks/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put('/api/tasks/1')
      .send({ completed: true });
    expect(res.statusCode).toEqual(200);
    expect(res.body.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const res = await request(app).delete('/api/tasks/1');
    expect(res.statusCode).toEqual(204);
  });

  it('should return 404 for non-existent task', async () => {
    const res = await request(app).get('/api/tasks/999');
    expect(res.statusCode).toEqual(404);
  });

  it('should validate missing title on creation', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ description: 'Missing title' });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});
