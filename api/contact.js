module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const { name, email, product } = body || {};
  if (!name || !email) return res.status(400).json({ error: "name and email required" });

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Leviathan <onboarding@resend.dev>",
      to: "kiel@kijacreative.com",
      subject: `Demo request — ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${product || "Not specified"}</p>
      `,
    }),
  });

  if (!r.ok) {
    const err = await r.text();
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Email failed to send" });
  }

  res.status(200).json({ ok: true });
};
