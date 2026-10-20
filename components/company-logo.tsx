import Image from "next/image";
import type { Company } from "@/lib/data";

const sizes = {
  sm: { box: "h-9 w-9 rounded-lg", icon: "h-4.5 w-4.5", px: 36 },
  md: { box: "h-12 w-12 rounded-2xl", icon: "h-6 w-6", px: 48 },
  lg: { box: "h-16 w-16 rounded-2xl", icon: "h-8 w-8", px: 64 },
};

// Shows the company logo when one is set in lib/data.ts, otherwise a
// brand-colored icon badge as a placeholder.
export function CompanyLogo({
  company,
  size = "md",
}: {
  company: Company;
  size?: keyof typeof sizes;
}) {
  const s = sizes[size];

  if (company.logo) {
    return (
      <span className={`flex shrink-0 items-center justify-center overflow-hidden bg-white p-1.5 ${s.box}`}>
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={s.px}
          height={s.px}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center text-white ${s.box}`}
      style={{
        background: `linear-gradient(135deg, ${company.brand.primary}, ${company.brand.primaryDark})`,
      }}
    >
      <company.icon className={s.icon} strokeWidth={1.75} />
    </span>
  );
}
