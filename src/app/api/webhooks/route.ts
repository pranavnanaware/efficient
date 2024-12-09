import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia",
});

const ddbClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature") as string;
  let event: Stripe.Event;

  // Get the raw body
  const rawBody = await req.arrayBuffer();
  const bodyBuffer = Buffer.from(rawBody);

  try {
    event = stripe.webhooks.constructEvent(
      bodyBuffer,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed.`, err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // Payment Intent ID references the underlying PaymentIntent
      const paymentIntentId = session.payment_intent as string;
      console.log("Checkout session completed:", session);

      // Metadata from the session (passed in during checkout session creation)
      const { email, firstName, lastName, address, phoneNumber } =
        session.metadata as {
          email: string;
          firstName: string;
          lastName: string;
          address: string;
          phoneNumber: string;
        };

      console.log("Checkout session completed:", session);

      // Insert order data into DynamoDB
      const orderData = {
        orderId: paymentIntentId,
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        status: "AUTHORIZED", // Initial status
        amount: 3000,
        createdAt: new Date().toISOString(),
      };

      try {
        await ddbDocClient.send(
          new PutCommand({
            TableName: process.env.DYNAMODB_TABLE_NAME as string,
            Item: orderData,
          })
        );
        console.log("Order data saved to DynamoDB:", orderData);
      } catch (dbError: any) {
        console.error("Error saving order to DynamoDB:", dbError);
        return NextResponse.json({ error: "DynamoDB Error" }, { status: 500 });
      }
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
