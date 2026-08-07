import { Resend } from "resend";

const requiredFields = ["name", "phone", "pestIssue"] as const;

export async function POST(request: Request) {
  const form = await request.formData();
  const values = Object.fromEntries(form.entries());
  if (requiredFields.some((field) => !String(values[field] ?? "").trim())) {
    return Response.json({ error: "Please provide your name, phone number, and pest issue." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.LEAD_RECIPIENT_EMAIL) {
    console.error("Missing Resend configuration.");
    return Response.json({ error: "Online requests are not configured yet. Please call 559-321-6230." }, { status: 503 });
  }
  const lines = [
    ["Name", values.name], ["Phone", values.phone], ["Email", values.email || "Not provided"],
    ["Property type", values.propertyType || "Not provided"], ["Pest issue", values.pestIssue],
  ].map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(String(value))}</p>`).join("");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: process.env.LEAD_RECIPIENT_EMAIL,
    replyTo: String(values.email || process.env.LEAD_RECIPIENT_EMAIL),
    subject: `New estimate request from ${String(values.name)}`,
    html: `<h1>New Bug Dude estimate request</h1>${lines}`,
  });
  if (error) {
    console.error("Resend delivery error", error);
    return Response.json({ error: "We couldn’t send that request. Please call 559-321-6230." }, { status: 502 });
  }
  return Response.json({ ok: true });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}
