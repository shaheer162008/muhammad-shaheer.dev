import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href="https://wa.me/923072853163" target="_blank" rel="noreferrer" aria-label="Chat with Muhammad Shaheer on WhatsApp" title="WhatsApp">
      <HugeiconsIcon icon={WhatsappIcon} size={22} color="currentColor" strokeWidth={1.8} aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
