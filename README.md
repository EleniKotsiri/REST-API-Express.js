# REST-API-expressjs
This is a simple REST API built using Express.js, which handles basic CRUD operations for a dummy items resource.

Will be continuously updated with more functionality.

## Installation

Initialize Node.js:
```
npm init -y
```

Install Express, nodemon, dotenv packages for development:
```
npm install express
npm install --save-dev nodemon
npm install --save-dev dotenv
```

## Project Structure
```
/rest-api-express.js
│
├── /node_modules         # Installed npm modules
├── index.js              # Main server file
├── package.json          # Project dependencies and scripts
├── route.rest            # File to send HTTP requests and view response directly in VS code using REST Client extension
└── README.md             # Project documentation
```

## Usage

### Create the Server in your index.js file

### Configure your .env file in case you want to use a different port

### Update package.json file to include a start script using nodemon
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
```

### Run the server using nodemon for development, node for production
```
npm run dev
```

```
npm run start
```

## API Endpoints

### GET /items
#### Retrieve all items
#### Response example
```json
[
  {
    "id": 1,
    "name": "item 1",
    "description": "This is the first item"
  },
  {
    "id": 2,
    "name": "item 2",
    "description": "This is the second item"
  },
  {
    "id": 3,
    "name": "item 3",
    "description": "This is the third item"
  }
]
```

### GET /items/:id
#### Retrieve a single item
#### Response example
```json
{
  "id": 1,
  "name": "item 1",
  "description": "This is the first item"
}
```

### POST /items
#### Create a new item. The request body must contain name and description.
#### Request example
```json
{
  "name": "Item 4",
  "description": "This is a new item on the list"
}
```
#### Response example
```json
{
  "id": 4,
  "name": "Item 4",
  "description": "This is a new item on the list"
}
```

### PUT /items/:id
#### Update an existing item by its id. The request body must contain name and description.
#### Request example
```json
{
  "name": "Item 1 updated",
  "description": "This is the first item with an updated description."
}
```
#### Response example
```json
{
  "id": 1,
  "name": "Item 1 updated",
  "description": "This is the first item with an updated description."
}
```

### DELETE /items/:id
#### Deletes an item by its id
#### Response example
```json
HTTP/1.1 204 No Content
```

## Validation
The `POST` and `PUT` requests use middleware to validate the request body. When the name or description fields are missing, the API returns a `400 Bad Request` response
```json
{
  "message": "Name and description are required"
}
```

## License
### This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
