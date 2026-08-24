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
  Route,
  Users,
  MapPin,
  Handshake,
} from "lucide-react";

export const siteConfig = {
  name: "Horn Bridge Global",
  shortName: "Horn Bridge",
  tagline: "Bridging Global Markets with the Horn of Africa",
  description:
    "A diversified trading, automotive, mobility and logistics company headquartered in Jijiga, Ethiopia — connecting international manufacturers and suppliers with the growing markets of Ethiopia, Somalia and Djibouti through motor vehicles, electric vehicles, spare parts, accessories and reliable logistics.",
  email: "info@hornbridgeglobalgroup.com",
  phone: "+251 911 123 456",
  address: "Jijiga Road, Addis Ababa, Ethiopia",
  region: "Horn of Africa",
  coreMarkets: ["Ethiopia", "Somalia", "Djibouti"],
};

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
    body: "Horn Bridge Global is a diversified trading, automotive, mobility and logistics company headquartered in Jijiga, Ethiopia. We serve as a bridge between international manufacturers and suppliers and the growing markets of the Horn of Africa, providing reliable access to vehicles, automotive products, transportation solutions and logistics services.",
  },
  {
    title: "What We Do",
    body: "Our core business is the import, export, distribution and trading of motor vehicles, electric vehicles, automotive spare parts, accessories and related products. We serve individual customers, businesses, fleet operators, dealers, institutions and other organizations across Ethiopia, Somalia and Djibouti.",
  },
  {
    title: "Beyond the Sale",
    body: "Alongside automotive trading, we operate in public transportation, transportation and logistics services — supporting the movement and distribution of vehicles and goods, and facilitating regional trade and supply chains, so we can serve customers beyond the point of sale.",
  },
  {
    title: "Driving Electric Mobility",
    body: "We recognize the growing importance of electric mobility in the Horn of Africa, and see electric vehicles, electric public transportation and related products as important areas for future growth. Through strategic partnerships, regional distribution and reliable logistics, we aim to contribute to the modernization of transportation and mobility across the region.",
  },
];

export const navLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Fleet", href: "/fleet", icon: Car },
  { label: "Services", href: "/services", icon: Cog },
  { label: "Tracking", href: "/#tracking", icon: Route },
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
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Fleet", href: "/fleet" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Import & Export", href: "/services#import-export" },
    { label: "Distribution & Trading", href: "/services#distribution-trading" },
    { label: "Electric Vehicles", href: "/services#electric-vehicles" },
    { label: "Spare Parts & Accessories", href: "/services#spare-parts-accessories" },
    { label: "Public Transport", href: "/services#public-transport" },
    { label: "Logistics & Fleet", href: "/services#logistics-fleet" },
  ],
};
