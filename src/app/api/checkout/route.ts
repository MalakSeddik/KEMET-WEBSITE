import { NextRequest, NextResponse } from "next/server";
import { getAuthToken, createPaymobOrder, getPaymentKey } from "@/lib/paymob";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, items } = body as {
    firstName: string;
    lastName:  string;
    email:     string;
    phone:     string;
    items: {
      id:       string;
      nameEn:   string;
      price:    number;
      quantity: number;
    }[];
  };

  if (!items?.length) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const totalCents = Math.round(
    items.reduce((sum, i) => sum + i.price * i.quantity, 0) * 100
  );

  // 1. Paymob auth
  const authToken = await getAuthToken();

  // 2. Paymob order
  const paymobOrderId = await createPaymobOrder(
    authToken,
    totalCents,
    items.map((i) => ({
      name:         i.nameEn,
      amount_cents: Math.round(i.price * 100),
      description:  i.nameEn,
      quantity:     i.quantity,
    }))
  );

  // 3. Payment key
  const paymentToken = await getPaymentKey(authToken, paymobOrderId, totalCents, {
    first_name: firstName,
    last_name:  lastName,
    email,
    phone,
  });

  // 4. Save a pending order in our DB
  await prisma.order.create({
    data: {
      guestEmail:    email,
      status:        "PENDING",
      totalAmount:   items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      paymobOrderId: String(paymobOrderId),
      items: {
        create: items.map((i) => ({
          productId: i.id,
          quantity:  i.quantity,
          unitPrice: i.price,
        })),
      },
    },
  });

  return NextResponse.json({
    iframeUrl: `https://accept.paymob.com/api/acceptance/iframes/${process.env.PAYMOB_IFRAME_ID}?payment_token=${paymentToken}`,
  });
}
