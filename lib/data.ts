import type { LucideIcon } from "lucide-react";
import {
  Ship,
  Globe,
  Car,
  Zap,
  Cog,
  Bus,
  Truck,
  Package,
  ShieldCheck,
  Headset,
  Warehouse,
  FileCheck,
  Search,
  PackageCheck,
  Users,
  MapPin,
  Handshake,
  Building2,
  ShoppingCart,
  Sprout,
  Tv,
  Sofa,
  CookingPot,
  ShoppingBasket,
  BadgePercent,
  Store,
  Wheat,
  Beef,
  Tractor,
  GraduationCap,
  Leaf,
  ChartColumn,
  ShieldAlert,
  Target,
  ClipboardList,
  BadgeCheck,
  SearchCheck,
  FileText,
  HardHat,
  Award,
  Lightbulb,
  TrendingUp,
  Eye,
  Gem,
  Layers,
  HeartHandshake,
  Droplets,
  Boxes,
} from "lucide-react";

import type { StaticImageData } from "next/image";

// Group (Horn Bridge Global) logo — also used by Motors
import Logo_group from "../img/logo.png";

// Agab media imports
import Hero_agab from "../img/Hero_agab.png";
import Logo_agab from "../img/Logo_agab.png";

// Agro media imports
import Logo_agro from "../img/Logo_agro.png";
import Hero_agro from "../img/Hero_agro.png";

// Construction media imports
import Hero_tiir from "../img/Hero_construction.png";
import Logo_tiir from "../img/Logo_construction.png";

// TODO: replace phone / email / address with the confirmed group contact details.
export const siteConfig = {
  name: "Horn Bridge Global",
  legalName: "Horn Bridge Global PLC",
  shortName: "Horn Bridge",
  tagline: "Building Businesses for a Brighter Horn of Africa",
  description:
    "Horn Bridge Global PLC is a diversified business group driving sustainable growth, creating opportunities and delivering real value across the Horn of Africa — through its companies in automotive and mobility, retail and wholesale, agriculture and livestock, and construction advisory.",
  email: "info@hornbridgeglobalgroup.com",
  phone: "+252 63 442 9403",
  address: "Jijiga, Ethiopia; Hargeisa, Somaliland; Mogadishu, Somalia",
  region: "Horn of Africa",
  coreMarkets: ["Ethiopia", "Somalia", "Djibouti"],
};

/* ---------------------------------------------------------------------------
 * Group (Horn Bridge Global PLC)
 * ------------------------------------------------------------------------- */

export const groupVision =
  "To be a leading and trusted business group driving sustainable growth and value creation in the Horn of Africa.";

export const groupMission =
  "To build and manage successful businesses that deliver quality, create opportunities, and serve communities through innovation, integrity and excellence.";

export const groupValues: { title: string; icon: LucideIcon }[] = [
  { title: "Integrity", icon: ShieldCheck },
  { title: "Excellence", icon: Award },
  { title: "Innovation", icon: Lightbulb },
  { title: "People First", icon: Users },
  { title: "Sustainable Growth", icon: Leaf },
];

export const groupStats = [
  { value: "4", label: "Companies" },
  { value: "4", label: "Industries" },
  { value: "3", label: "Core Markets" },
  { value: "1", label: "Shared Vision" },
];

export const groupWhyPartner: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Diversified Portfolio",
    description:
      "Companies across mobility, retail, agriculture and construction advisory — one group partner for many needs.",
    icon: Layers,
  },
  {
    title: "Local Presence",
    description:
      "On-the-ground operations across the Horn of Africa, built around each market's customers and conditions.",
    icon: MapPin,
  },
  {
    title: "Trusted Partnerships",
    description:
      "Long-standing relationships with international manufacturers, suppliers and investors.",
    icon: Handshake,
  },
  {
    title: "Community Commitment",
    description:
      "We grow by creating jobs, supporting local producers and serving the communities we operate in.",
    icon: HeartHandshake,
  },
];

/* ---------------------------------------------------------------------------
 * Subsidiaries
 *
 * Every company page is generated from this list. To add a logo, either import
 * it from /img (e.g. `import Logo_agro from "../img/Logo_agro.png"`, then
 * `logo: Logo_agro`) or put it in /public/logos and use its path
 * (e.g. `logo: "/logos/agrisolt.png"`).
 * Leave `contact` fields empty to fall back to the group contact details.
 *
 * `heroMedia` is the background of this company's slide in the home page
 * hero. Put videos in /public/video and images in /public/hero, e.g.
 *   heroMedia: { type: "video", src: "/video/agrisolt.mp4" }
 *   heroMedia: { type: "image", src: "/hero/agrisolt.jpg" }
 *   heroMedia: { type: "image", src: Hero_agro }   // imported from /img
 * Without it the slide shows a gradient in the company's brand color.
 * ------------------------------------------------------------------------- */

export type Company = {
  slug: string;
  name: string;
  shortName: string;
  sector: string;
  tagline: string;
  headline: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  logo?: string | StaticImageData;
  heroMedia?:
    | { type: "video"; src: string }
    | { type: "image"; src: string | StaticImageData };
  brand: { primary: string; primaryDark: string };
  highlights: { title: string; icon: LucideIcon }[];
  offeringsLabel: string;
  offeringsTitle: string;
  offerings: { title: string; description: string; icon: LucideIcon }[];
  focusAreas?: { title: string; description: string; icon: LucideIcon }[];
  approach?: { title: string; description: string; icon: LucideIcon }[];
  contact?: { email?: string; phone?: string; address?: string };
};

export const companies: Company[] = [
  {
    slug: "motors",
    name: "Horn Bridge Global Motors",
    shortName: "Motors",
    logo: Logo_group,
    sector: "Automotive & Mobility",
    tagline: "Mobility. Without Borders.",
    headline: "Mobility. Without borders.",
    summary:
      "Import, distribution and trading of motor vehicles, electric vehicles, spare parts and accessories — plus public transport and logistics.",
    description:
      "Horn Bridge Global Motors bridges international manufacturers with the Horn of Africa — importing, exporting, distributing and trading motor vehicles, electric vehicles, spare parts and accessories, plus public transport and logistics services.",
    icon: Car,
    heroMedia: { type: "video", src: "/video/intro.mp4" },
    brand: { primary: "#1d4ed8", primaryDark: "#16359e" },
    highlights: [
      { title: "Vehicles & EVs", icon: Zap },
      { title: "Spare Parts", icon: Cog },
      { title: "Public Transport", icon: Bus },
      { title: "Logistics", icon: Truck },
    ],
    offeringsLabel: "What We Do",
    offeringsTitle: "One partner, the entire vehicle supply chain.",
    // Motors has its own page (app/companies/motors) built from the
    // automotive data further down this file.
    offerings: [],
    contact: {},
  },
  {
    slug: "agab-mixmart",
    name: "Agab MixMart",
    shortName: "Agab MixMart",
    logo: Logo_agab,
    sector: "Retail & Wholesale",
    tagline: "Grab More, Pay Less",
    headline: "Quality products for a better everyday.",
    summary:
      "A modern retail and wholesale store — your one-stop shop for electronics, home, kitchen and daily essentials.",
    description:
      "Agab MixMart is a modern retail and wholesale store offering a wide range of quality products for homes, businesses and communities across Hargeisa — your one-stop shop at prices that let you grab more and pay less.",
    icon: ShoppingCart,
    heroMedia: { type: "image", src: Hero_agab },
    brand: { primary: "#dc2626", primaryDark: "#b91c1c" },
    highlights: [
      { title: "Wide Range of Products", icon: Boxes },
      { title: "Competitive Prices", icon: BadgePercent },
      { title: "Retail & Wholesale", icon: Store },
      { title: "Friendly Service", icon: Headset },
    ],
    offeringsLabel: "Our Product Categories",
    offeringsTitle: "Everything your home and business needs.",
    offerings: [
      {
        title: "Electronics & Electrical",
        description:
          "TVs, refrigerators, appliances and electrical products from trusted brands.",
        icon: Tv,
      },
      {
        title: "Home Accessories",
        description:
          "Furniture, décor and accessories to make every home comfortable.",
        icon: Sofa,
      },
      {
        title: "Kitchen & Cookware",
        description:
          "Cookware, utensils and small kitchen appliances for everyday cooking.",
        icon: CookingPot,
      },
      {
        title: "Daily Essentials",
        description:
          "Groceries, household and personal care products, always in stock.",
        icon: ShoppingBasket,
      },
    ],
    contact: {},
  },
  {
    slug: "agrisolt",
    name: "Agrisolt",
    shortName: "Agrisolt",
    logo: Logo_agro,
    sector: "Agriculture & Livestock",
    tagline: "Agrilivestock Solutions & Trading",
    headline: "Sustainable solutions for food security and growth.",
    summary:
      "Modern agriculture, livestock and trading solutions that improve productivity and support local communities.",
    description:
      "Agrisolt is focused on modern agriculture, livestock and trading solutions. We work to improve productivity, support local communities, and contribute to a more food-secure and prosperous region.",
    icon: Sprout,
    heroMedia: { type: "image", src: Hero_agro },
    brand: { primary: "#15803d", primaryDark: "#166534" },
    highlights: [
      { title: "People", icon: Users },
      { title: "Productivity", icon: TrendingUp },
      { title: "Food Security", icon: Wheat },
      { title: "Sustainable Growth", icon: Leaf },
    ],
    offeringsLabel: "What We Do",
    offeringsTitle: "Farming today for a stronger tomorrow.",
    offerings: [
      {
        title: "Crop Production",
        description:
          "Modern crop and fodder production with improved seed, land preparation and irrigation.",
        icon: Sprout,
      },
      {
        title: "Livestock Development",
        description:
          "Farming and fattening of sheep, goats and cattle, with animal feed and nutrition.",
        icon: Beef,
      },
      {
        title: "Agricultural Inputs & Trading",
        description:
          "Supply and trading of inputs, tractors, implements and agricultural equipment.",
        icon: Tractor,
      },
      {
        title: "Training & Advisory",
        description:
          "Practical training and advisory services that help farmers raise productivity.",
        icon: GraduationCap,
      },
      {
        title: "Sustainable Growth",
        description:
          "Responsible practices that protect land and water for future generations.",
        icon: Leaf,
      },
    ],
    focusAreas: [
      {
        title: "Crop Production & Irrigation",
        description:
          "Greenhouse and open-field production supported by efficient irrigation systems.",
        icon: Droplets,
      },
      {
        title: "Livestock Development & Trading",
        description:
          "Healthier herds, better feed and reliable trading channels for livestock.",
        icon: Beef,
      },
      {
        title: "Agricultural Inputs & Equipment",
        description:
          "Access to quality inputs, machinery, livestock equipment and infrastructure.",
        icon: Tractor,
      },
      {
        title: "Community Development & Sustainability",
        description:
          "Healthy land and productive communities for a sustainable future.",
        icon: HeartHandshake,
      },
    ],
    contact: {},
  },
  {
    slug: "tiir-consultancy",
    name: "Tiir Consultancy",
    shortName: "Tiir Consultancy",
    logo: Logo_tiir,
    sector: "Construction & Advisory",
    tagline: "Construction · Advisory · Strategy",
    headline: "Guiding projects to success.",
    summary:
      "Professional construction advisory and strategic consulting that turns ideas into successful, sustainable projects.",
    description:
      "Tiir Consultancy provides professional construction advisory and strategic consulting services, helping clients turn ideas into successful and sustainable projects — from vision to reality.",
    icon: Building2,
    heroMedia: { type: "image", src: Hero_tiir },
    brand: { primary: "#0369a1", primaryDark: "#075985" },
    highlights: [
      { title: "Expertise", icon: Award },
      { title: "Insights", icon: Lightbulb },
      { title: "Quality Assured", icon: BadgeCheck },
      { title: "Real Results", icon: Target },
    ],
    offeringsLabel: "Our Services",
    offeringsTitle: "Expert guidance at every stage of your project.",
    offerings: [
      {
        title: "Market Share Analysis",
        description: "Understand your market, competitors and growth opportunities.",
        icon: ChartColumn,
      },
      {
        title: "Risk Assessments",
        description: "Identify and mitigate technical, financial and schedule risks early.",
        icon: ShieldAlert,
      },
      {
        title: "Strategy Management",
        description: "Clear, actionable strategies aligned with your business goals.",
        icon: Target,
      },
      {
        title: "Project Management",
        description: "Planning, coordination and control to deliver on time and on budget.",
        icon: ClipboardList,
      },
      {
        title: "Quality Control",
        description: "Independent checks that keep workmanship and materials to standard.",
        icon: BadgeCheck,
      },
      {
        title: "Handover Inspections",
        description: "Thorough inspections before handover so nothing is missed.",
        icon: SearchCheck,
      },
      {
        title: "Design & Quotation Review",
        description: "Review of designs, bills of quantities and quotations for value and accuracy.",
        icon: FileText,
      },
      {
        title: "Construction Advisory",
        description: "Trusted technical advice from concept through completion.",
        icon: HardHat,
      },
    ],
    approach: [
      {
        title: "Understand Your Goals",
        description: "We start by listening — your vision, constraints and priorities.",
        icon: Eye,
      },
      {
        title: "Analyze & Plan",
        description: "We study the market, risks and options to build a clear plan.",
        icon: ChartColumn,
      },
      {
        title: "Provide Solutions",
        description: "Practical, tailored recommendations you can act on.",
        icon: Lightbulb,
      },
      {
        title: "Ensure Quality",
        description: "Ongoing oversight and quality control throughout delivery.",
        icon: BadgeCheck,
      },
      {
        title: "Deliver Lasting Value",
        description: "Successful, sustainable projects that stand the test of time.",
        icon: Gem,
      },
    ],
    contact: {},
  },
];

export function getCompany(slug: string) {
  return companies.find((c) => c.slug === slug);
}

export function companyContact(company: Company) {
  return {
    email: company.contact?.email || siteConfig.email,
    phone: company.contact?.phone || siteConfig.phone,
    address: company.contact?.address || siteConfig.address,
  };
}

export const markets: { name: string; description: string }[] = [
  {
    name: "Ethiopia",
    description:
      "Our home market and headquarters in Jijiga, anchoring distribution and logistics across the country.",
  },
  {
    name: "Somalia",
    description:
      "A growing market for vehicles, spare parts and public transport solutions across the region.",
  },
  {
    name: "Djibouti",
    description:
      "A strategic gateway for import and export shipments moving through the Horn of Africa.",
  },
];

export const aboutStory: { title: string; body: string }[] = [
  {
    title: "Who We Are",
    body: "Horn Bridge Global PLC is a diversified business group operating across the Horn of Africa. We build, own and manage companies that connect international manufacturers, suppliers and investors with the region's growing demand — and deliver real value to the communities we serve.",
  },
  {
    title: "Our Companies",
    body: "The group brings together four companies: Horn Bridge Global Motors in automotive and mobility, Agab MixMart in retail and wholesale, Agrisolt in agriculture and livestock, and Tiir Consultancy in construction advisory and strategy.",
  },
  {
    title: "How We Work",
    body: "Each company runs with its own focus and expertise, backed by the group's shared standards, partnerships and resources. We shape our offer to each market's customers, infrastructure and commercial conditions rather than applying one model everywhere.",
  },
  {
    title: "Growing Together",
    body: "We see sustainable growth as a shared journey — creating jobs, supporting local producers, modernizing mobility and helping businesses and communities build a brighter tomorrow.",
  },
];

export const navLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Companies", href: "/companies", icon: Building2 },
  { label: "About", href: "/about", icon: ShieldCheck },
  { label: "Contact", href: "/contact", icon: Headset },
];

export const heroStats = [
  { label: "Focus Region", value: "Horn of Africa", icon: Globe },
  { label: "Core Markets", value: "3 Countries", icon: MapPin },
  { label: "Customer Segments", value: "6+", icon: Users },
];

export const trustStats = [
  { value: "3", label: "Core Markets" },
  { value: "6", label: "Core Services" },
  { value: "6+", label: "Customer Segments" },
  { value: "EV", label: "Future Mobility Ready" },
];

export const services: {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}[] = [
    {
      slug: "import-export",
      title: "Import & Export",
      description:
        "End-to-end sourcing, customs clearance and cross-border shipment of vehicles and parts between international manufacturers and the Horn of Africa.",
      icon: Ship,
      highlights: [
        "Sourcing from vetted international manufacturers and suppliers",
        "Customs clearance and documentation across origin and destination",
        "Cross-border shipment coordination into Ethiopia, Somalia and Djibouti",
      ],
    },
    {
      slug: "distribution-trading",
      title: "Distribution & Trading",
      description:
        "Wholesale and retail distribution connecting global suppliers with dealers, fleet operators, businesses and institutions across Ethiopia, Somalia and Djibouti.",
      icon: Globe,
      highlights: [
        "Wholesale and retail supply for dealers and businesses",
        "Dedicated channels for fleet operators and institutions",
        "Regional distribution network across the Horn of Africa",
      ],
    },
    {
      slug: "electric-vehicles",
      title: "Electric Vehicles",
      description:
        "Sourcing and supply of electric vehicles, electric public transport and EV-specific parts, built for the region's next era of mobility.",
      icon: Zap,
      highlights: [
        "Battery-electric and hybrid passenger vehicles",
        "Electric public transport for growing transit demand",
        "EV-specific parts, accessories and charging equipment",
      ],
    },
    {
      slug: "spare-parts-accessories",
      title: "Spare Parts & Accessories",
      description:
        "A wide inventory of genuine and aftermarket spare parts, accessories and related products for passenger and commercial vehicles.",
      icon: Cog,
      highlights: [
        "Genuine and aftermarket parts for passenger and commercial vehicles",
        "Accessories and related products for individuals and dealers",
        "Reliable inventory to keep fleets and workshops running",
      ],
    },
    {
      slug: "public-transport",
      title: "Public Transport",
      description:
        "Supply and fleet solutions for buses and public transport operators, supporting the modernization of transit across the region.",
      icon: Bus,
      highlights: [
        "Buses and transit vehicles for public transport operators",
        "Fleet solutions built for reliability and capacity",
        "Support for the shift toward electric public transport",
      ],
    },
    {
      slug: "logistics-fleet",
      title: "Logistics & Fleet",
      description:
        "Transportation, freight and fleet management services that move vehicles, parts and cargo safely and on schedule across the region.",
      icon: Truck,
      highlights: [
        "Transportation and freight coordination across the Horn of Africa",
        "Fleet management support beyond the point of sale",
        "Shipment visibility from origin to final delivery",
      ],
    },
  ];

export const fleetCategories: {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
}[] = [
    {
      title: "Passenger Vehicles",
      description: "Sedans, SUVs and hatchbacks sourced from trusted global manufacturers.",
      icon: Car,
      tag: "Sedans · SUVs · Hatchbacks",
    },
    {
      title: "Electric Vehicles",
      description: "Battery-electric and hybrid models built for the next era of mobility.",
      icon: Zap,
      tag: "EV · Hybrid · Charging",
    },
    {
      title: "Commercial & Public Transport",
      description: "Buses and transit vehicles engineered for capacity and uptime.",
      icon: Bus,
      tag: "Buses · Transit Fleets",
    },
    {
      title: "Trucks & Logistics",
      description: "Freight and utility trucks supporting trade and haulage operations.",
      icon: Truck,
      tag: "Freight · Haulage",
    },
    {
      title: "Spare Parts & Accessories",
      description: "OEM and aftermarket components, accessories and related products.",
      icon: Package,
      tag: "OEM · Aftermarket",
    },
  ];

export const processSteps: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
    {
      title: "Sourcing & Inspection",
      description:
        "We identify and inspect vehicles or parts against your specification, quality and compliance requirements.",
      icon: Search,
    },
    {
      title: "Documentation & Customs",
      description:
        "Our team handles export/import paperwork, certification and customs clearance across origin and destination.",
      icon: FileCheck,
    },
    {
      title: "Shipping & Logistics",
      description:
        "Vehicles and cargo are consolidated and shipped via our vetted freight and logistics partners.",
      icon: Warehouse,
    },
    {
      title: "Delivery & Support",
      description:
        "Final-mile delivery, handover and after-sales support, with tracking visibility the whole way.",
      icon: PackageCheck,
    },
  ];

export const whyChooseUs: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "A Bridge to Global Markets",
    description: "Direct relationships with international manufacturers and suppliers, brought to Ethiopia, Somalia and Djibouti.",
    icon: Handshake,
  },
  {
    title: "Verified Quality",
    description: "Every vehicle and part is inspected against strict quality standards.",
    icon: ShieldCheck,
  },
  {
    title: "Beyond the Sale",
    description: "Transportation, distribution and logistical support that follows every product past the point of purchase.",
    icon: Truck,
  },
  {
    title: "Dedicated Support",
    description: "A responsive team serving individuals, fleets, dealers and institutions alike, from inquiry to final delivery.",
    icon: Headset,
  },
];

export const testimonials: {
  quote: string;
  name: string;
  role: string;
}[] = [
    {
      quote:
        "Horn Bridge Global sourced and delivered a fleet of transit buses for our contract, fully compliant and on schedule. Their documentation team made customs painless.",
      name: "A. Warsame",
      role: "Fleet Procurement Manager, Somalia",
    },
    {
      quote:
        "We source spare parts through them regularly. Consistent quality, transparent pricing, and they always know exactly where our shipment is.",
      name: "M. Haile",
      role: "Operations Director, Auto Parts Dealer",
    },
    {
      quote:
        "Our EV pilot fleet came from Horn Bridge Global end-to-end — sourcing, shipping and delivery. A genuinely smooth way to bring electric mobility into our market.",
      name: "H. Robleh",
      role: "Head of Fleet, Djibouti",
    },
  ];

export const footerLinks = {
  group: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Companies", href: "/companies" },
    { label: "Contact", href: "/contact" },
  ],
  companies: companies.map((c) => ({ label: c.name, href: `/companies/${c.slug}` })),
};
