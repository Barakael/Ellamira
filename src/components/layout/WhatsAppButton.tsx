"use client";

import { usePathname } from "next/navigation";
import { vehicles } from "@/content/vehicles";
import {
  genericWhatsappMessage,
  vehicleWhatsappMessage,
  whatsappHref,
} from "@/lib/whatsapp";

export function WhatsAppButton() {
  const pathname = usePathname();
  const vehicle = vehicles.find(
    (item) => pathname === `/vehicles/${item.category}/${item.slug}`,
  );
  const message = vehicle
    ? vehicleWhatsappMessage(vehicle.name)
    : genericWhatsappMessage;

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        vehicle
          ? `Chat with Ellamira Trading on WhatsApp about the ${vehicle.name}`
          : "Chat with Ellamira Trading on WhatsApp"
      }
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#062816] shadow-[0_12px_30px_rgba(0,16,48,0.28)] transition hover:bg-[#1ebe5d]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.8.9-3.1-.2-.3A9 9 0 1 1 12 21zm4.9-6.6c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.1-.3 0-.4.1-.5l.5-.6.2-.4c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
      </svg>
      WhatsApp
    </a>
  );
}
