"use client";

import { motion, useReducedMotion } from "framer-motion";
import { company, phones } from "@/content/company";
import { BrandImage } from "@/components/ui/BrandImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = reduce ? 0 : 16;

  return (
    <section className="relative min-h-[100svh] bg-navy-deep text-paper">
      <div className="absolute inset-0">
        <BrandImage
          src="/images/hero.jpg"
          alt="Dark showroom of vehicles with headlights on"
          tone="hero"
          priority
          className="h-full w-full"
          sizes="100vw"
        />
      </div>
      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pt-32 pb-16">
        <motion.p
          className="text-xs font-semibold tracking-[0.24em] text-white/75 uppercase"
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vehicle importers and dealers · Tanzania
        </motion.p>
        <motion.h1
          className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl"
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Your trusted vehicle partner.
        </motion.h1>
        <motion.div
          className="mt-6 h-px w-16 origin-left bg-crimson"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduce ? 0.15 : 0.55, delay: 0.25 }}
        />
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {company.positioning}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <ButtonLink href="/vehicles">Browse vehicles</ButtonLink>
          <ButtonLink href="/contact" variant="ghost-light">
            Request a vehicle
          </ButtonLink>
        </motion.div>
        <p className="mt-8 text-sm text-white/65">
          Ilala, Dar es Salaam ·{" "}
          <a href={`tel:${phones[0].tel}`} className="text-white hover:underline">
            {phones[0].display}
          </a>
        </p>
      </Container>
    </section>
  );
}
