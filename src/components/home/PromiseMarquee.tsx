import { promises } from "@/content/company";

export function PromiseMarquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy-deep py-4 text-paper">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {promises.map((item) => (
              <li key={`${copy}-${item}`} className="flex items-center">
                <span className="px-6 text-xs font-semibold tracking-[0.22em] uppercase">
                  {item}
                </span>
                <span className="text-crimson" aria-hidden="true">
                  ◆
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
