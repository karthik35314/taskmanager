
# Task Management RESTful API

A simple RESTful API for managing tasks using Node.js, Express.js, and in-memory data storage. This project demonstrates CRUD operations, input validation, error handling, and testing with Jest.

## 🚀 Features
- Create, Read, Update, Delete (CRUD) tasks
- Input validation and error handling
- In-memory data storage
- Jest test suite
- Postman and curl usage examples

## 📁 Project Structure
```
task-api/
├── server.js
├── routes/
│   └── tasks.js
├── __tests__/
│   └── tasks.test.js
```

## ⚙️ Setup Instructions
1. Clone or unzip the project.
2. Navigate to the project folder:
   ```bash
   cd task-api
   ```
3. Install dependencies:
   ```bash
   npm install express jest supertest
   ```
4. Run the server:
   ```bash
   node server.js
   ```
5. Run tests:
   ```bash
   npm test
   ```

## 📬 API Endpoints
### Create a Task
- `POST /api/tasks`
```json
{
  "title": "Learn Express",
  "description": "Build a REST API"
}
```

### Get All Tasks
- `GET /api/tasks`

### Get Task by ID
- `GET /api/tasks/:id`

### Update a Task
- `PUT /api/tasks/:id`
```json
{
  "completed": true
}
```

### Delete a Task
- `DELETE /api/tasks/:id`

## 🧪 Testing with Jest
- Tests are located in `__tests__/tasks.test.js`
- Run tests with:
  ```bash
  npm test
  ```

## 🧰 Usage with curl
```bash
# Create a task
curl -X POST http://localhost:3000/api/tasks   -H "Content-Type: application/json"   -d '{"title": "Learn Express", "description": "Build a REST API"}'

# Get all tasks
curl http://localhost:3000/api/tasks

# Get task by ID
curl http://localhost:3000/api/tasks/1

# Update a task
curl -X PUT http://localhost:3000/api/tasks/1   -H "Content-Type: application/json"   -d '{"completed": true}'

# Delete a task
curl -X DELETE http://localhost:3000/api/tasks/1
```

