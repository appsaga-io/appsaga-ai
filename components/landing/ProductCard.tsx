import Link from "next/link";
import { Badge } from "@/components/Badge";
import { LandingCard } from "@/components/landing/LandingCard";
import { ProductPreview } from "@/components/landing/ProductPreview";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  variant?: "listing" | "homepage";
};

export function ProductCard({ product, variant = "listing" }: ProductCardProps) {
  const showSecondaryLinks = variant === "listing";

  return (
    <LandingCard interactive className="group flex h-full flex-col p-5">
      <ProductPreview
        name={product.name}
        accent={product.previewAccent}
        iconPath={product.iconPath}
        status={product.status}
        logo={product.logo}
        logoAlt={product.logoAlt}
      />

      <div className="flex flex-wrap items-center gap-2">
        <Badge>{product.category}</Badge>
      </div>

      <Link href={`/products/${product.slug}`} className="mt-3 block">
        <h3 className="text-lg font-semibold text-fg transition-colors group-hover:text-primary">
          {product.name}
        </h3>
      </Link>
      <p className="mt-1 text-sm font-medium text-muted">{product.tagline}</p>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed text-muted",
          variant === "homepage" && "line-clamp-2"
        )}
      >
        {product.description}
      </p>

      <ul className="mt-4 grid gap-2 text-sm text-muted">
        {product.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/40" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Link
          href={`/products/${product.slug}`}
          className="hover-link-primary text-sm font-semibold"
        >
          View product →
        </Link>

        {showSecondaryLinks ? (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {product.url ? (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-link text-xs font-semibold"
              >
                Visit app →
              </a>
            ) : null}
            {product.docsUrl ? (
              <a
                href={product.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-link text-xs font-semibold"
              >
                Read docs →
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </LandingCard>
  );
}
