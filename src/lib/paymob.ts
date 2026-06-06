const PAYMOB_BASE = "https://accept.paymob.com/api";

export async function getAuthToken(): Promise<string> {
  const res = await fetch(`${PAYMOB_BASE}/auth/tokens`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: process.env.PAYMOB_API_KEY }),
  });
  const data = await res.json();
  return data.token;
}

export async function createPaymobOrder(
  authToken: string,
  amountCents: number,
  items: { name: string; amount_cents: number; description: string; quantity: number }[]
): Promise<number> {
  const res = await fetch(`${PAYMOB_BASE}/ecommerce/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      auth_token:     authToken,
      delivery_needed: false,
      amount_cents:   amountCents,
      currency:       "EGP",
      items,
    }),
  });
  const data = await res.json();
  return data.id;
}

export async function getPaymentKey(
  authToken: string,
  paymobOrderId: number,
  amountCents: number,
  billing: {
    first_name: string;
    last_name:  string;
    email:      string;
    phone:      string;
  }
): Promise<string> {
  const res = await fetch(`${PAYMOB_BASE}/acceptance/payment_keys`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      auth_token:      authToken,
      amount_cents:    amountCents,
      expiration:      3600,
      order_id:        paymobOrderId,
      billing_data: {
        first_name:     billing.first_name,
        last_name:      billing.last_name,
        email:          billing.email,
        phone_number:   billing.phone,
        apartment:      "NA",
        floor:          "NA",
        street:         "NA",
        building:       "NA",
        shipping_method:"NA",
        postal_code:    "NA",
        city:           "NA",
        country:        "EG",
        state:          "NA",
      },
      currency:        "EGP",
      integration_id:  Number(process.env.PAYMOB_CARD_INTEGRATION_ID),
    }),
  });
  const data = await res.json();
  return data.token;
}
