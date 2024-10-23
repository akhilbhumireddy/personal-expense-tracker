# Personal Expense Tracker

## Objective

Develop a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Tech Stack

- Backend Framework: Node.js with Express.js
- Database: SQLite
- Authentication: JSON Web Tokens (JWT)

## Features

### Must Have

- User authentication (register and login)
- CRUD operations for transactions (Create, Read, Update, Delete)
- Retrieve all transactions with pagination
- Get transaction summary (total income, total expenses, balance)
- Filter transactions by date range and category

### Nice to Have

- User authentication and transaction association with users
- Pagination for retrieving transactions
- Generate reports (e.g., monthly spending by category)

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/akhilbhumireddy/personal-expense-tracker.git
   cd personal-expense-tracker
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```
   PORT=3000
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. Start the server:
   ```
   npm start
   ```

## github link : [https://github.com/akhilbhumireddy/personal-expense-tracker.git]

## Deployment link : [https://personal-expense-tracker-1-vm6a.onrender.com]

## API Documentation

### Authentication

#### Register a new user

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Success Response**: `201 Created`

#### Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Success Response**: `200 OK`
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### Transactions

#### Create a new transaction

- **URL**: `/api/transactions`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer your_jwt_token`
- **Body**:
  ```json
  {
    "type": "expense",
    "category": "entertainment",
    "amount": 100.5,
    "date": "2023-10-21",
    "description": "movie"
  }
  ```
- **Success Response**: `201 Created`

#### Get all transactions

- **URL**: `/api/transactions?limit=10&page=1`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer your_jwt_token`
- **Success Response**: `200 OK`

#### Get a specific transaction

- **URL**: `/api/transactions/:id`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer your_jwt_token`
- **Success Response**: `200 OK`

#### Update a transaction

- **URL**: `/api/transactions/:id`
- **Method**: `PUT`
- **Headers**: `Authorization: Bearer your_jwt_token`
- **Body**:
  ```json
  {
    "type": "expense",
    "category": "entertainment",
    "amount": 120.75,
    "date": "2023-10-22",
    "description": "movies"
  }
  ```
- **Success Response**: `200 OK`

#### Delete a transaction

- **URL**: `/api/transactions/:id`
- **Method**: `DELETE`
- **Headers**: `Authorization: Bearer your_jwt_token`
- **Success Response**: `200 OK`

### Summary

#### Get transaction summary

- **URL**: `/api/summary`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer your_jwt_token`
- **Success Response**: `200 OK`

#### Get summary by category

- **URL**: `/api/summary/category`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer your_jwt_token`
- **Success Response**: `200 OK`

## Postman Screenshots

![Login](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e6h2HYbXrlg2WYhCnY2ktgC5TGkuUi.png)
_Login API call_

![Create Transaction](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kfoYZL7IEeUxJtZXRz9ufbUVLGidvq.png)
_Create Transaction API call_

![Get All Transactions](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h5BZcJCYX24RuXCfyiDK9Mlp0DXZd4.png)
_Get All Transactions API call with pagination_

![Get Transaction by ID](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-76y3LFN191aIX3Yoy8mEs30c0JDXhF.png)
_Get Transaction by ID API call_

![Update Transaction](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OH8X5dXSkkwxBvIZxRM14YISA1lu2q.png)
_Update Transaction API call_

![Delete Transaction](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xJ4upJ5CtQbnf3oeESz5s2ZOsOgyoP.png)
_Delete Transaction API call_

![Get Summary](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NYoDiM8oCi68ahqGe2Cj1qkNP4QG1M.png)
_Get Summary API call_

![Get Summary by Category](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SdkUxvzDKLSwUzJGklS6jb00vgquZN.png)
_Get Summary by Category API call_
