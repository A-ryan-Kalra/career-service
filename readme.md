# Carrier Integration Service (UPS Rating)

Simple MVC-style backend in TypeScript/Node.js (Express). It integrates with UPS Rating API using OAuth2 client-credentials, validates input, normalizes responses, and is structured to add more carriers/operations.

# 📁 Project Structure

```src/
├── app.ts # Express app setup
├── server.ts # Server entry point
│
├── config/
│ └── env.ts # Environment configuration
│
├── carriers/ # Carrier abstraction & implementations
│ ├── carrier.registry.ts
│ ├── carrier.types.ts
│ └── ups/
│ ├── ups.auth.ts # UPS OAuth (client-credentials, stubbed)
│ ├── ups.mapper.ts # UPS response normalization
│ └── ups.rate.ts # UPS rate logic
│
├── controller/
│ └── rate.controller.ts # HTTP controller
│
├── service/
│ └── rate.service.ts # Business logic
│
├── routes/
│ └── rate.route.ts # API routes
│
├── models/ # Domain models & validation
│ ├── address.ts
│ ├── package.ts
│ ├── rate-request.ts
│ ├── rate-quote.ts
│ └── error.ts
│
├── http/
│ └── httpClient.ts # Stubbed HTTP client
│
├── middleware/
│ └── errorHandler.ts # Global error handling
│
└── tests/
└── rate.integration.test.ts
```

# ▶️ How to run the Project

##  Clone the Repository
    
  ```
  git clone https://github.com/A-ryan-Kalra/career-service
    
  # Enter the working directory
  cd career-service
  ```

### 1. Install dependencies

```
npm install
```

### 2. Create environment file

Create a .env file in the project root:

```
PORT=5000
UPS_CLIENT_ID=dummy
UPS_CLIENT_SECRET=dummy
```

### 3. Start the server

```
npm run dev
```

You should see:

```
 Server is running on 5000
```

### 4. Health check

```
curl http://localhost:5000/healthz
Or
http://localhost:5000/healthz
```

Expected response:

```
{ "message": "Healthy.." }
```

### 5. Rate API request

```
curl -X POST http://localhost:5000/api/rates \
  -H "Content-Type: application/json" \
  -d '{
    "origin": { "postalCode": "10001", "countryCode": "US" },
    "destination": { "postalCode": "90001", "countryCode": "US" },
    "packages": [{ "weight": 2 }]
  }'
```

The rate API accepts input parameters (origin, destination, packages) in the request body.
Please make a POST request with a JSON payload

```
{
  "origin": { "postalCode": "10001", "countryCode": "US" },
  "destination": { "postalCode": "90001", "countryCode": "US" },
  "packages": [{ "weight": 2 }]
}

```

Response

```
[{"carrier":"UPS","service":"Ground","totalAmount":120,"currency":"USD"}]
```

### 🧪 Running Tests

```
npm test
```
