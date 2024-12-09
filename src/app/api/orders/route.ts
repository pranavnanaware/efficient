import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia",
});

// Initialize DynamoDB Client

const ddbClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, address, phoneNumber } =
      await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !address || !phoneNumber) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Amount in cents. For $3000, it's 300,000 cents.
    const amountInCents = 300000;

    // Create a Payment Intent with manual capture to place a hold
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd",
      payment_method_types: ["card"],
      capture_method: "manual",
      receipt_email: email,
      description: `Hold for ${firstName} ${lastName}`,
      metadata: {
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
      },
    });

    const id = await randomUUID();
    // Prepare the order data to store in DynamoDB
    const orderData = {
      orderId: paymentIntent.id,
      firstName,
      lastName,
      email,
      address,
      phoneNumber,
      status: "AUTHORIZED", // You can use a status field to track order state
      amount: 3000,
      createdAt: new Date().toISOString(),
      id: id,
    };

    // Insert the order into DynamoDB
    await ddbDocClient.send(
      new PutCommand({
        TableName: process.env.DYNAMODB_TABLE_NAME as string,
        Item: orderData,
      })
    );

    // Return success response
    return NextResponse.json({
      success: true,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error("Error in order creation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
