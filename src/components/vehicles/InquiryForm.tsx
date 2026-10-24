"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState, type ReactNode } from "react";
import { company, customerTypes, partnerTypes } from "@/content/company";
import { vehicles } from "@/content/vehicles";
import { mailtoHref, whatsappHref } from "@/lib/whatsapp";

type Mode = "vehicle" | "partner";

type Errors = Partial<Record<"name" | "phone" | "email" | "customerType" | "interest" | "message", string>>;

export function InquiryForm({ mode = "vehicle" }: { mode?: Mode }) {
  const params = useSearchParams();
  const preset = mode === "vehicle" ? params.get("vehicle") ?? "" : "";
  return <InquiryFields key={`${mode}:${preset}`} mode={mode} preset={preset} />;
}

function InquiryFields({ mode, preset }: { mode: Mode; preset: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [customerType, setCustomerType] = useState(mode === "partner" ? "Partner" : "");
  const [interest, setInterest] = useState(preset);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<{ whatsapp: string; email: string } | null>(null);

  const interestOptions =
    mode === "partner"
      ? partnerTypes.map((item) => ({ value: item, label: item }))
      : [
          { value: "not-sure", label: "Not sure yet" },
          ...vehicles.map((vehicle) => ({ value: vehicle.slug, label: vehicle.name })),
        ];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (phone.trim().length < 7) nextErrors.phone = "Enter a phone number we can reach.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!customerType) nextErrors.customerType = "Choose a customer type.";
    if (!interest) nextErrors.interest = mode === "partner" ? "Choose a partnership area." : "Choose a vehicle interest.";
    if (message.trim().length < 12) nextErrors.message = "Tell us a little more about the request.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const interestLabel =
      interestOptions.find((option) => option.value === interest)?.label ?? interest;
    const text = [
      mode === "partner"
        ? "Hello Ellamira Trading, I would like to discuss a partnership."
        : "Hello Ellamira Trading, I would like to inquire about a vehicle.",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Customer: ${customerType}`,
      `${mode === "partner" ? "Partnership" : "Interest"}: ${interestLabel}`,
      "",
      message.trim(),
    ].join("\n");

    const whatsapp = whatsappHref(text);
    const emailLink = mailtoHref(
      mode === "partner" ? "Partnership inquiry — Ellamira Trading" : "Vehicle inquiry — Ellamira Trading",
      text,
    );
    setReady({ whatsapp, email: emailLink });
    window.open(whatsapp, "_blank", "noopener,noreferrer");
  }

  if (ready) {
    return (
      <div className="border border-mist bg-white p-6 md:p-8" role="status">
        <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
          Inquiry ready
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy-ink">
          Your message is ready on WhatsApp.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-steel">
          If the chat did not open, use the button below. You can also send the same inquiry by email.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={ready.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#062816]"
          >
            Open WhatsApp
          </a>
          <a
            href={ready.email}
            className="inline-flex justify-center border border-navy/20 px-5 py-3 text-sm font-semibold text-navy"
          >
            Email this inquiry
          </a>
        </div>
        <button
          type="button"
          className="mt-6 text-sm text-steel underline"
          onClick={() => setReady(null)}
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-mist bg-white p-6 md:p-8" noValidate>
      <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
        {mode === "partner" ? "Partner inquiry" : "Vehicle inquiry"}
      </p>
      <h2 className="mt-3 font-serif text-3xl text-navy-ink">
        {mode === "partner" ? "Propose a partnership." : "Request a vehicle."}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-steel">
        Sending opens WhatsApp to +255 753 103 533 with your message and prepares the
        same inquiry for {company.email}. Nothing is stored on the website.
      </p>
      <div className="mt-6 grid gap-4">
        <Field label="Name" error={errors.name} id="inquiry-name">
          <input
            id="inquiry-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Phone" error={errors.phone} id="inquiry-phone">
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Email" error={errors.email} id="inquiry-email">
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Customer type" error={errors.customerType} id="inquiry-customer">
          <select
            id="inquiry-customer"
            name="customerType"
            value={customerType}
            onChange={(event) => setCustomerType(event.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {customerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label={mode === "partner" ? "Partnership area" : "Vehicle interest"}
          error={errors.interest}
          id="inquiry-interest"
        >
          <select
            id="inquiry-interest"
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" error={errors.message} id="inquiry-message">
          <textarea
            id="inquiry-message"
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={inputClass}
          />
        </Field>
      </div>
      <div className="mt-6 pr-24 sm:pr-0">
        <button
          type="submit"
          className="bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b91524]"
        >
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "mt-2 w-full border border-[#d5dde6] bg-white px-3 py-3 text-sm text-ink outline-none focus:border-navy";

function Field({
  label,
  error,
  id,
  children,
}: {
  label: string;
  error?: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold text-navy" htmlFor={id}>
      {label}
      {children}
      {error ? (
        <span className="mt-1 block text-xs font-medium text-crimson" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
