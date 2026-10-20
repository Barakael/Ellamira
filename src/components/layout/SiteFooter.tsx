import Link from "next/link";
import { company, nav, phones } from "@/content/company";
import { whatsappHref, genericWhatsappMessage } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-4">
        <div>
          <p className="font-serif text-3xl">{company.shortName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {company.tagline}. Vehicle importation and dealership from Ilala, Tanzania.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">
            Visit
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{company.office}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">
            Talk
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="text-white/80 hover:text-white">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappHref(genericWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                WhatsApp {phones[0].display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="text-white/80 hover:text-white"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>TIN {company.tin}</li>
            <li>Registration {company.registration}</li>
            <li>Registered {company.registered}</li>
          </ul>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:justify-between md:px-8">
          <p>© {company.registered} {company.name}</p>
          <p>{company.website}</p>
        </div>
      </div>
    </footer>
  );
}
