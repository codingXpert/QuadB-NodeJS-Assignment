# QuadB_TECH-Assignement


## Table of Contents

- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
- [Installation](#installation)


## API Documentation

This section provides documentation for the APIs used in your project.

### Endpoints

List and describe the available API endpoints here.

#### `/details` - GET Request
- GET `/users/details/:id` - Get the user's details from the database by ID.
#### `/update` - PUT Request
- PUT `/users/update/:user_id` - Update an existing user by its id.

#### `/image` - GET Request
- GET `/users/image/:id` - Retrieve a specific image by its user id.
#### `/insert` - POST Request
- GET `/users/insert` - Create User data and store in the database.

### `/delete` - DELETE Request
- DELETE `/users/delete/:user_id` - Delete an item by its ID.
  
...


## Installation
1. Ensure you have Node.js, Nodemon, Express, Sequelize, and mySQL workbench installed on your system.
2. Clone the repository: `https://github.com/codingXpert/QuadB-NodeJS-Assignment`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`
5. The API will be available at `http://localhost:5000`.