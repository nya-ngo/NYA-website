# NYA Backend

This backend is a simple Node.js API for the NYA website.

## Available Scripts

- `npm install`
- `npm run dev`
- `npm start`

## Environment

Copy `.env.example` to `.env` and fill in your MongoDB credentials.

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/nya-ngo?retryWrites=true&w=majority
```

## API Endpoints

### Health

- `GET /api/health`

Response:

```json
{
  "status": "ok",
  "message": "NYA backend is healthy"
}
```

### Donations

- `GET /api/donations`
- `POST /api/donations`
- `GET /api/donations/:id`
- `PUT /api/donations/:id`
- `DELETE /api/donations/:id`

#### Create donation

Request:

```json
{
  "donorName": "John Doe",
  "amount": 500,
  "email": "john@example.com",
  "message": "Keep up the good work!"
}
```

Response:

```json
{
  "_id": "64c1d0f3f2ad4ca7215d2123",
  "donorName": "John Doe",
  "amount": 500,
  "email": "john@example.com",
  "message": "Keep up the good work!",
  "createdAt": "2026-06-29T12:00:00.000Z",
  "updatedAt": "2026-06-29T12:00:00.000Z",
  "__v": 0
}
```

### Users

- `GET /api/users`
- `POST /api/users`
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

#### Create user

Request:

```json
{
  "name": "Tasila Poorna Shree",
  "email": "tasila@gmail.com",
  "phone": "9876543210",
  "pan": "ABCDE1234F",
  "address": "123 Main Street, Hyderabad, Telangana"
}
```

Response:

```json
{
  "_id": "686ac1230000000000000000",
  "name": "Tasila Poorna Shree",
  "email": "tasila@gmail.com",
  "phone": "9876543210",
  "pan": "ABCDE1234F",
  "address": "123 Main Street, Hyderabad, Telangana",
  "createdAt": "2026-06-25T00:00:00.000Z",
  "updatedAt": "2026-06-25T00:00:00.000Z",
  "__v": 0
}
```

### Payments

- `GET /api/payments`
- `POST /api/payments`
- `GET /api/payments/:id`
- `PUT /api/payments/:id`
- `DELETE /api/payments/:id`

#### Create payment

Request:

```json
{
  "userId": "686ac1230000000000000000",
  "amount": 5000,
  "paymentMethod": "UPI",
  "transactionId": "TXN987654",
  "status": "SUCCESS"
}
```

Response:

```json
{
  "_id": "99ab34000000000000000000",
  "userId": "686ac1230000000000000000",
  "amount": 5000,
  "paymentMethod": "UPI",
  "transactionId": "TXN987654",
  "status": "SUCCESS",
  "createdAt": "2026-06-25T00:00:00.000Z",
  "updatedAt": "2026-06-25T00:00:00.000Z",
  "__v": 0
}
```

### Razorpay

- `POST /api/create-order`
- `POST /api/verify-payment`

#### Create order

Request:

```json
{
  "amount": 10000,
  "currency": "INR",
  "receipt": "receipt#1"
}
```

Response:

```json
{
  "order_id": "order_1234567890abcdef",
  "amount": 10000,
  "currency": "INR",
  "receipt": "receipt#1"
}
```

#### Verify payment

Request:

```json
{
  "order_id": "order_1234567890abcdef",
  "payment_id": "pay_0987654321abcdef",
  "signature": "generated_signature"
}
```

Response:

```json
{
  "success": true,
  "message": "Payment signature verified successfully"
}
```
