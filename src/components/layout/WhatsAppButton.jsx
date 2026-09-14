import { MessageCircle } from "lucide-react";
import { waLink, defaultWaMessage } from "../../data/business";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink(defaultWaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Casa De Cars on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-amber text-onAmber flex items-center justify-center shadow-[0_8px_28px_-6px_rgba(223,160,80,0.55)] hover:scale-105 active:scale-95 transition-transform duration-300"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2.25} fill="#171310" />
    </a>
  );
}
