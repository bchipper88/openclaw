import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProfessionBySlug } from "@/lib/professions";
import { SITE_CONFIG } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { professionSlug } = body;

    const profession = getProfessionBySlug(professionSlug);
    if (!profession) {
      return NextResponse.json(
        { error: "Invalid profession" },
        { status: 400 }
      );
    }

    // Always use the server-side price ID to prevent price manipulation
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: profession.stripePriceId,
          quantity: 1,
        },
      ],
      success_url: `${SITE_CONFIG.url}/success?session_id={CHECKOUT_SESSION_ID}&profession=${professionSlug}`,
      cancel_url: `${SITE_CONFIG.url}/guides/${professionSlug}`,
      metadata: {
        professionSlug: profession.slug,
        professionTitle: profession.title,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
