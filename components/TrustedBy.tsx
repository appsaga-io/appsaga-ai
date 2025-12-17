import Image from "next/image";
import { Container } from "@/components/Container";

const brands = [
  { src: "/brands/brand-1.svg", alt: "Brand One" },
  { src: "/brands/brand-2.svg", alt: "Brand Two" },
  { src: "/brands/brand-3.svg", alt: "Brand Three" },
  { src: "/brands/brand-4.svg", alt: "Brand Four" },
  { src: "/brands/brand-5.svg", alt: "Brand Five" },
];

export function TrustedBy() {
  const items = [...brands, ...brands]; // duplicate for seamless loop
  return (
    <section className="border-y border-border/60 bg-bg py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Trusted by founders and teams shipping fast
        </p>

        <div className="marquee relative mt-6">
          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-bg to-transparent" />

          <div className="marquee-track gap-4 py-1">
            {items.map((b, i) => (
              <div
                key={`${b.src}-${i}`}
                className="flex w-[180px] shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card/60 px-6 py-4"
              >
                <Image src={b.src} alt={b.alt} width={160} height={44} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


