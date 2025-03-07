# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data and creates a new user in the database.

### Request Body:
The request body must be a JSON object containing the following fields:

- `fullname`: An object containing the user's full name.
  - `firstname`: The user's first name (required, minimum 3 characters).
  - `lastname`: The user's last name (optional).
- `email`: The user's email address (required, must be a valid email).
- `password`: The user's password (required, minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201 Created):
- **Description**: User successfully registered.
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Client Error (400 Bad Request):
- **Description**: Validation failed or missing required fields.
- **Body**:
  ```json
  {
    "success": false,
    "message": "All fields are required"
  }
  ```
  or
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Server Error (500 Internal Server Error):
- **Description**: An error occurred on the server.
- **Body**:
  ```json
  {
    "success": false,
    "message": "Internal Server Error"
  }
  ```