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
    "/donations/create-order": {
      post: {
        summary: "Create donation order",
        description:
          "Create an order ID and store the donation request in the database.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateOrderRequest",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Order created and stored successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    order_id: { type: "string" },
                  },
                },
              },
            },
          },
          400: {
            description: "Invalid request",
          },
          409: {
            description: "Order ID already exists",
          },
        },
      },
    },
    "/donations/verify-payment": {
      post: {
        summary: "Verify payment and store details",
        description:
          "Store payment results after payment completion, including success or failure.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/VerifyPaymentRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Payment details stored successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    order_id: { type: "string" },
                    payment_id: { type: "string" },
                    payment_status: { type: "string" },
                  },
                },
              },
            },
          },
          400: {
            description: "Invalid request",
          },
          404: {
            description: "Order not found",
          },
        },
      },
    },
    "/donations/recent-donation": {
      get: {
        summary: "Recent donations",
        description:
          "Returns the 5 most recent donations with names and relative creation date.",
        responses: {
          200: {
            description: "Recent donation list",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/DonationSummary",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/donations/top-donations": {
      get: {
        summary: "Top donations",
        description:
          "Returns the top 5 successful donations by amount with relative creation date.",
        responses: {
          200: {
            description: "Top donation list",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/DonationSummary",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      CreateOrderRequest: {
        type: "object",
        properties: {
          name: { type: "string", example: "John Doe" },
          email: { type: "string", example: "donor@example.com" },
          phonenumber: { type: "string", example: "9876543210" },
          pancard: { type: "string", example: "ABCDE1234F" },
          amount: { type: "number", example: 500 },
        },
        required: ["name", "amount"],
      },
      VerifyPaymentRequest: {
        type: "object",
        properties: {
          name: { type: "string", example: "John Doe" },
          email: { type: "string", example: "donor@example.com" },
          phonenumber: { type: "string", example: "9876543210" },
          pancard: { type: "string", example: "ABCDE1234F" },
          amount: { type: "number", example: 500 },
          payment_id: { type: "string", example: "pay_12345" },
          order_id: { type: "string", example: "order_12345" },
          payment_status: {
            type: "string",
            example: "success",
          },
        },
        required: ["order_id", "payment_id", "payment_status"],
      },
      DonationSummary: {
        type: "object",
        properties: {
          name: { type: "string" },
          amount: { type: "number" },
          order_id: { type: "string" },
          payment_id: { type: "string" },
          payment_status: { type: "string" },
          created_date: { type: "string", example: "1 day ago" },
        },
      },
    },
  },
};

export default swaggerDocument;
