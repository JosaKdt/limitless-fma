const items = [
  "NO LIMIT",
  "FULL STRUCTURE",
  "SCALE TON BUSINESS",
  "OFFERS",
  "LEADS",
  "MODELS",
  "ZERO EXCUSE",
  "SYSTEMES > MOTIVATION",
  "900+ SCRIPTS",
  "6 PERSONAS",
  "3 PILIERS",
]

export function Ticker() {
  return (
    <div className="overflow-hidden bg-primary py-3" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-[family-name:var(--font-heading)] text-2xl tracking-wider text-accent-foreground md:text-3xl"
          >
            {item}
            <span className="text-accent-foreground/40">{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
