"use client";

const stats = [
  { value: "Nettisivut", label: "alk. 49 €/kk", company: "Suunnittelusta ylläpitoon" },
  { value: "SEO + GEO", label: "", company: "Jatkuva näkyvyyden kehitys" },
  { value: "Helppo", label: "kumppanuus", company: "Muutokset ja tuki yhdellä viestillä" },
  { value: "Kaikki", label: "samasta", company: "Toteutus, ylläpito ja kehitys" },
];

export function StatsMarquee({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`absolute bottom-10 lg:bottom-18 left-0 right-0 transition-all duration-700 delay-500 z-10 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex gap-16 lg:gap-32 marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 lg:gap-32">
            {[...stats, ...stats, ...stats].map((stat, j) => (
              <div key={`${stat.company}-${i}-${j}`} className="flex flex-col items-start gap-1">
                <span className="text-3xl lg:text-4xl font-display text-[#f0f0f0]">{stat.value}</span>
                <span className="text-xs text-[#a0a0a0]">
                  {stat.label}
                  <span className="block font-mono text-[10px] mt-0.5">{stat.company}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
