export const WHATSAPP_NUMBER = "255753103533";

export const genericWhatsappMessage =
  "Hello Ellamira Trading, I would like to inquire about a vehicle.";

export function vehicleWhatsappMessage(name: string) {
  return `Hello Ellamira Trading, I would like to inquire about the ${name}.`;
}

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(subject: string, body: string) {
  return `mailto:ellamiratrading@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
