"use client";

import { FormEvent, useState } from "react";

export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const result = await fetch("/api/estimate", { method: "POST", body: new FormData(form) });
    const body = await result.json().catch(() => ({}));
    if (!result.ok) {
      setStatus("error");
      setMessage(body.error ?? "We couldn’t send that request. Please call us at 559-321-6230.");
      return;
    }
    form.reset();
    setStatus("success");
    setMessage("Thanks—we got your note. We’ll be in touch soon.");
  }

  return <form className="estimate-form" onSubmit={submit}>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" required type="tel" autoComplete="tel" /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" /></div>
      <div className="field"><label htmlFor="propertyType">Property type</label><select id="propertyType" name="propertyType" defaultValue=""><option value="" disabled>Select one</option><option>Commercial property</option><option>Residential home</option><option>Apartment or rental</option><option>Other</option></select></div>
      <div className="field full"><label htmlFor="pestIssue">What’s going on?</label><textarea id="pestIssue" name="pestIssue" required placeholder="Pest, where you’re seeing it, and when you’d like help." /></div>
    </div>
    <button className="button button-primary" disabled={status === "sending"} type="submit">{status === "sending" ? "Sending…" : "Request an estimate"}</button>
    <p className={`form-message ${status}`} aria-live="polite">{message}</p>
  </form>;
}
