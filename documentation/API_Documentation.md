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
