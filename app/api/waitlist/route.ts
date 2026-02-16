import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_PAT = process.env.AIRTABLE_PAT!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME ?? "Waitlist";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 },
      );
    }

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "A name is required." },
        { status: 400 },
      );
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: name.trim(),
              Email: email,
            },
          },
        ],
      }),
    });

    if (!airtableRes.ok) {
      const body = await airtableRes.text();
      console.error("Airtable error:", airtableRes.status, body);
      return NextResponse.json(
        { error: "Failed to save email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
