export function Chapter({
  label,
  title,
  lede,
  tone = "light",
}: {
  label: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
        {label}
      </p>
      <h2
        className={`mt-3 font-serif text-4xl leading-[1.1] md:text-5xl ${dark ? "text-paper" : "text-navy-ink"}`}
      >
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-crimson" />
      {lede ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-white/75" : "text-steel"}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
