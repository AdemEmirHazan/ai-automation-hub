import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return NextResponse.json({
      hasStripeKey: !!stripeKey,
      hasPublishableKey: !!publishableKey,
      hasBaseUrl: !!baseUrl,
      stripeKeyPrefix: stripeKey ? stripeKey.substring(0, 7) : null,
      publishableKeyPrefix: publishableKey ? publishableKey.substring(0, 7) : null,
    });
  } catch (error) {
    console.error('Error in test-env API:', error);
    return NextResponse.json(
      { error: 'Error checking environment variables' },
      { status: 500 }
    );
  }
} 