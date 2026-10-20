"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav, phones } from "@/content/company";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;
  const onHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-300 ${
        open
          ? "bg-[#001030]"
          : onHero
            ? "bg-transparent"
            : "bg-navy-deep/95 shadow-[0_12px_40px_rgba(0,16,48,0.28)] backdrop-blur"
      }`}
    >
      <div
        className={`relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 transition-[padding] duration-300 md:px-8 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="relative z-10 leading-none text-paper">
          <span className="block font-serif text-[1.7rem] tracking-tight">
            {company.shortName}
          </span>
          <span className="mt-1 block text-[10px] font-semibold tracking-[0.28em] text-white/70 uppercase">
            Trading
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition ${
                isActive(pathname, item.href)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <a
            href={`tel:${phones[0].tel}`}
            className="hidden text-sm text-white/80 hover:text-white xl:inline"
          >
            {phones[0].display}
          </a>
          <Link
            href="/contact"
            className="hidden bg-crimson px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b91524] sm:inline-flex"
          >
            Request a vehicle
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/25 text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-0 flex flex-col bg-[#001030] px-6 pt-24 pb-8 lg:hidden"
        >
          <nav className="border-t border-white/15" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block border-b border-white/15 py-4 text-lg font-medium ${
                  isActive(pathname, item.href) ? "text-white" : "text-white/75"
                }`}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <a href={`tel:${phones[0].tel}`} className="text-base text-white">
              {phones[0].display}
            </a>
            <Link
              href="/contact"
              className="bg-crimson px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Request a vehicle
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
