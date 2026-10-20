"use client";

import { motion, useReducedMotion } from "framer-motion";
import { steps } from "@/content/company";
import { Container } from "@/components/ui/Container";

export function ProcessStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
          Our business approach
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-navy-ink md:text-5xl">
          Understand, source, import, deliver.
        </h2>
        <div className="relative mt-8">
          <motion.div
            className="absolute top-3 right-0 left-0 hidden h-px origin-left bg-crimson/40 lg:block"
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0.15 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.index}>
                <span className="relative z-10 inline-block h-2 w-2 bg-crimson" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-3xl text-navy-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
