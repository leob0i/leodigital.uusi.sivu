"use client";

const stats = [
  { value: "100%", label: "räätälöity koodi", company: "yrityksesi näköiseksi" },
  { value: "24/7", label: "tuki saatavilla", company: "WhatsApp" },
  { value: "SEO", label: "alusta alkaen", company: "Hakukoneoptimointi" },
  { value: "Nopea", label: "latausaika", company: "Optimoitu" },
];

export function StatsMarquee({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`absolute bottom-10 lg:bottom-18 left-0 right-0 transition-all duration-700 delay-500 z-10 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex gap-16 marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16">
            {stats.map((stat) => (
              <div key={`${stat.company}-${i}`} className="flex items-baseline gap-4">
                <span className="text-4xl lg:text-5xl font-display text-[#f0f0f0]">{stat.value}</span>
                <span className="text-sm text-[#a0a0a0]">
                  {stat.label}
                  <span className="block font-mono text-xs mt-1">{stat.company}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
