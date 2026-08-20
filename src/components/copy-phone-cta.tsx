"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

type CopyPhoneCtaProps = {
  className?: string;
  phoneNumber: string;
};

export function CopyPhoneCta({ className = "button button-primary", phoneNumber }: CopyPhoneCtaProps) {
  const [copied, setCopied] = useState(false);

  async function copyPhoneNumber() {
    try {
      await navigator.clipboard.writeText(phoneNumber);
    } catch {
      const input = document.createElement("textarea");
      input.value = phoneNumber;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button className={className} type="button" onClick={copyPhoneNumber} aria-live="polite">
      <Phone size={18} aria-hidden />
      <span className="copy-phone-content">
        <span>{copied ? "Number copied" : "Call / Text"}</span>
        {!copied && <small>{phoneNumber}</small>}
      </span>
    </button>
  );
}
