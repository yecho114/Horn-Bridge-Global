import type { CSSProperties, ReactNode } from "react";
import type { Company } from "@/lib/data";

export function BrandScope({
  brand,
  children,
}: {
  brand: Company["brand"];
  children: ReactNode;
}) {
  return (
    <div
      className="brand-scope"
      style={
        {
          "--brand": brand.primary,
          "--brand-dark": brand.primaryDark,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
