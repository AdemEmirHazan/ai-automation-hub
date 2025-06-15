import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Stripe API anahtarını kontrol et
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.error('STRIPE_SECRET_KEY is not defined in environment variables');
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

// Stripe istemcisini başlat
let stripe: Stripe;
try {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2023-10-16',
  });
} catch (error) {
  console.error('Error initializing Stripe:', error);
  throw new Error('Failed to initialize Stripe');
}

export async function POST(request: Request) {
  try {
    console.log('API route: Creating checkout session...');
    
    // Request body'yi parse et
    let body;
    try {
      body = await request.json();
      console.log('Request body:', body);
    } catch (error) {
      console.error('Error parsing request body:', error);
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    
    const { price, serviceName } = body;

    // Gerekli alanları kontrol et
    if (!price || !serviceName) {
      console.error('Missing required fields:', { price, serviceName });
      return NextResponse.json(
        { error: 'Price and service name are required' },
        { status: 400 }
      );
    }

    // Stripe checkout session oluştur
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'try',
              product_data: {
                name: serviceName,
              },
              unit_amount: Math.round(price * 100), // Stripe uses cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      });

      console.log('Checkout session created successfully:', session.id);
      return NextResponse.json({ sessionId: session.id });
    } catch (stripeError) {
      console.error('Stripe API error:', stripeError);
      return NextResponse.json(
        { error: 'Error creating Stripe checkout session' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unexpected error in create-checkout-session API:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      });
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 