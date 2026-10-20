import type { Metadata } from "next";
import { Suspense } from "react";
import { company, phones } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { InquiryForm } from "@/components/vehicles/InquiryForm";
import { genericWhatsappMessage, whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${company.name} in Ilala, Tanzania. Call, WhatsApp or email an inquiry.`,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact us"
        title={company.tagline}
        lede="Call, write, or send the vehicle you have in mind. We reply with a clear next step."
      />
      <section className="bg-paper py-12 pb-24 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                  Phone
                </p>
                <ul className="mt-3 space-y-2">
                  {phones.map((phone) => (
                    <li key={phone.tel}>
                      <a href={`tel:${phone.tel}`} className="font-serif text-2xl text-navy">
                        {phone.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                  WhatsApp
                </p>
                <a
                  href={whatsappHref(genericWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-serif text-2xl text-navy"
                >
                  {phones[0].display}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                  Email
                </p>
                <a href={`mailto:${company.email}`} className="mt-3 inline-block text-navy">
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                  Office
                </p>
                <p className="mt-3 leading-relaxed text-steel">{company.office}</p>
              </div>
              <div className="border border-mist bg-white p-5 text-sm text-steel">
                <p>TIN {company.tin}</p>
                <p className="mt-1">Registration {company.registration}</p>
                <p className="mt-1">Registered {company.registered}</p>
              </div>
            </div>
            <Suspense
              fallback={<div className="h-96 border border-mist bg-white" aria-hidden="true" />}
            >
              <InquiryForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
