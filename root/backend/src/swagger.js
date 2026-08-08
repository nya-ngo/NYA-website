const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    title: "NYA Backend API",
    version: "1.0.0",
    description: "Swagger UI for NYA backend REST API",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Local development server",
    },
  ],
  paths: {
    "/health": {
      get: {
        summary: "Health check",
        description: "Returns the backend health status.",
        responses: {
          200: {
            description: "Application is healthy",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: { type: "string" },
                    message: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/process-payment": {
      post: {
        summary: "Process donation payment",
        description:
          "Create a Razorpay order or verify a completed payment. Sends success or failure email based on payment result.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProcessPaymentRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Payment verified successfully",
          },
          201: {
            description:
              "Order created successfully; complete payment on frontend",
          },
          400: {
            description: "Invalid request or payment failed",
          },
          401: {
            description: "Razorpay authentication failed",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      ProcessPaymentRequest: {
        type: "object",
        properties: {
          amount: { type: "number", example: 50000 },
          currency: { type: "string", example: "INR" },
          receipt: { type: "string", example: "receipt_12345" },
          order_id: { type: "string", example: "order_xxxxx" },
          payment_id: { type: "string", example: "pay_xxxxx" },
          signature: { type: "string", example: "signature_xxxxx" },
          userId: { type: "string", example: "user_123" },
          email: { type: "string", example: "donor@example.com" },
          name: { type: "string", example: "John Doe" },
          phone: { type: "string", example: "9876543210" },
          pan: { type: "string", example: "ABCDE1234F" },
          paymentMethod: { type: "string", example: "RAZORPAY" },
        },
        required: ["amount", "email", "name", "phone", "pan"],
      },
    },
  },
};

export default swaggerDocument;
