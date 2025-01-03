import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(req: NextRequest) {
  try {
    // Extract form data from request if needed
    const { email, firstName, lastName, address, phoneNumber } =
      await req.json();

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      // Set a line_item with a price of 3000 USD (300000 cents)
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID as string,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}`,

      metadata: {
        email,
        firstName,
        lastName,
        address,
        phoneNumber,
      },
      payment_intent_data: {
        capture_method: "manual",
        metadata: {
          email,
          firstName,
          lastName,
          address,
          phoneNumber,
        },
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
