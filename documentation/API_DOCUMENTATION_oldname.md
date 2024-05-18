# CRUD Application API Documentation

This is a simple CRUD application built with Node.js for managing users. The API allows you to create, read, update, and delete users.

## Endpoints

### Create User

**URL**: `/users`

**Method**: `POST`

**Description**: Creates a new user.

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "dob": "number"
}
```
**Responses**:
```
201 Created: User created successfully.
400 Bad Request: Validation error.
```

## Get All Users

**URL**: `/users`

**Method**: `GET`

**Description**: Retrieves a list of all users.

**Responses**:
```
200 OK: List of users.
```

## Get User

**URL**: `/users/:id`

**Method**: `GET`

**Description**: Retrieves a user by their ID.

**URL Parameters**:
```
id: The ID of the user to retrieve.
```

**Responses**:
```
200 OK: User details.
404 Not Found: User not found.
```

## Update User

**URL**: `/users/:id`

**Method**: `PUT`

**Description**: Updates a user's information.

**URL Parameters**:
```
id: The ID of the user to update.
Request Body:
```

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "dob": "number"
}
```

**Responses**:
```
200 OK: User updated successfully.
400 Bad Request: Validation error.
404 Not Found: User not found.
```

## Delete User

**URL**: `/users/:id`

**Method**: `DELETE`

**Description**: Deletes a user by their ID.

URL Parameters:
```
id: The ID of the user to delete.
```

Responses:
```
200 OK: User deleted successfully.
404 Not Found: User not found.
```

## Error Handling
All endpoints return appropriate HTTP status codes to indicate the success or failure of the request. Common status codes include:
```
200 OK: The request was successful.
201 Created: A new resource was successfully created.
400 Bad Request: There was an error with the request (e.g., validation errors).
404 Not Found: The requested resource was not found.
```

## Example Requests

### Create User
```
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "Test1", "email": "test1@yopmail.com", "password": "123456", "dob": 1716053192000}'
```

### Get All Users
```
curl -X GET http://localhost:3000/users
```

### Get User
```
curl -X GET http://localhost:3000/users/1
```

### Update User
```
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name": "Test2", "email": "test2@yopmail.com", "password": "123456", "dob": 1716053192000}'
```

### Delete User
```
curl -X DELETE http://localhost:3000/users/1
```
