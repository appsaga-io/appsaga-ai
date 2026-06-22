import { usePrefersReducedMotion } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

const watermarkTile = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="220" viewBox="0 0 360 220" fill="none">
  <g transform="rotate(-18 180 110)" opacity="0.9">
    <path
      d="M72 108c14-16 34-27 56-27 18 0 35 7 50 18 5 4 10 8 14 14-4 5-9 10-14 14-15 11-32 18-50 18-22 0-42-11-56-27z"
      fill="%230EA5E9"
      fill-opacity="0.22"
    />
    <text
      x="118"
      y="118"
      fill="%231D4ED8"
      fill-opacity="0.18"
      font-family="system-ui,-apple-system,sans-serif"
      font-size="26"
      font-weight="700"
      letter-spacing="0.12em"
    >${siteConfig.shortName.toUpperCase()}</text>
  </g>
</svg>
`.trim());

export function WatermarkBackground() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`watermark-layer ${reduced ? "watermark-layer--static" : "watermark-layer--animated"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,${watermarkTile}")`,
        }}
      />
      <div className="watermark-vignette" />
    </div>
  );
}
