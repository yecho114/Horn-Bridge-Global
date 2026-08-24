import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-bg pt-36 pb-16 sm:pt-40 sm:pb-20">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
      <div className="radial-glow absolute inset-0" />

      <div className="container-page relative z-10">
        <span className="label-mono text-[11px] text-primary">{eyebrow}</span>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
