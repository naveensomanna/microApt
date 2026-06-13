// src/data/site.js
// MicroApts Technologies — shared site data.
// Centralised here so components and their client scripts read from one source.

export const CONTACT = {
  phone1: "+91 96205 25510",
  phone2: "+91 90082 44448",
  email: "sales@microaptech.com",
  location: "Girinagar, Bangalore",
  // WhatsApp number in international format, digits only (91 = India + 10-digit number).
  // Currently set to phone1. To use the other number, change to "919008244448".
  whatsapp: "919620525510",
};

export const coreServices = [
  { icon: "shopping-cart",  title: "Sale",     desc: "Brand-new systems from Dell, HP, Lenovo and Apple, plus certified-refurbished, professionally tested units." },
  { icon: "calendar-stats", title: "Rentals",  desc: "Short and long-term rental of laptops, desktops, workstations, MacBooks and servers — with on-time service within TAT." },
  { icon: "tool",           title: "Service",  desc: "Onsite and remote support, network troubleshooting, plus chip-level motherboard repair across all brands." },
  { icon: "shield-check",   title: "AMC",      desc: "Comprehensive AMC for desktops, laptops, network switches, routers, printers and all IT products." },
];

export const productCategories = [
  {
    key: "IT systems", icon: "device-laptop",
    desc: "Refurbished & brand-new, fully tested and deployment-ready.",
    items: ["Laptops", "Desktops", "Workstations", "Servers", "Monitors"],
    tags: ["Dell", "HP", "Lenovo", "Apple"],
  },
  {
    key: "Components & storage", icon: "cpu",
    desc: "Storage and memory upgrades for every grade of system.",
    items: ["RAM (DDR4 / DDR5 — ECC & Non-ECC)", "SSD — SATA", "NVMe SSD", "Hard disk drives (HDD)", "Graphics cards"],
    tags: ["ECC & Non-ECC", "Workstation grade", "Server grade"],
  },
  {
    key: "Networking", icon: "network",
    desc: "New and used switching, wireless and security hardware.",
    items: ["Layer 2 & Layer 3 switches", "Managed / unmanaged (1–10Gbps)", "Wireless access points", "Routers & security devices", "Structured accessories"],
    tags: ["1Gbps–10Gbps", "Enterprise WiFi"],
  },
  {
    key: "Spares & accessories", icon: "tools",
    desc: "Compatible spares and accessories to keep fleets running.",
    items: ["Compatible batteries", "Displays / screens", "ABCD panels", "Keyboards & chargers", "Internal cables & spares"],
    tags: ["Compatible", "In stock"],
  },
];

// Hardware lifecycle loop — MicroApts handles every stage
export const lifecycle = [
  { icon: "shopping-cart",  label: "Sale",      tag: "NEW & REFURBISHED" },
  { icon: "calendar-stats", label: "Rental",    tag: "SHORT & LONG TERM" },
  { icon: "rocket",         label: "Deploy",    tag: "SETUP & INSTALL" },
  { icon: "tool",           label: "Service",   tag: "ONSITE & REMOTE" },
  { icon: "shield-check",   label: "AMC",       tag: "UPTIME ASSURED" },
  { icon: "refresh",        label: "Buyback",   tag: "UPGRADE & RETURN" },
  { icon: "recycle",        label: "Refurbish", tag: "BACK TO STOCK" },
];

// Refurbishment process — builds trust for refurbished buyers
export const process = [
  { icon: "package-import", title: "Source",        desc: "From trusted corporate fleets." },
  { icon: "checkup",        title: "Test",          desc: "Full multi-point diagnostics." },
  { icon: "replace",        title: "Replace",       desc: "Faulty parts swapped out." },
  { icon: "device-sd-card", title: "SSD health",    desc: "Performance verified." },
  { icon: "certificate",    title: "Recertify",     desc: "Cleaned, graded, GST-billed." },
  { icon: "shield-check",   title: "Warranty",      desc: "Warranty on every unit." },
];

export const whyChoose = [
  "GST invoice on every purchase", "Warranty on every laptop", "Professionally tested & quality checked",
  "SSD health & performance verified", "Corporate & bulk order support", "PAN India delivery",
  "Sales & rental solutions", "Onsite & remote support team", "Chip-level repair expertise",
  "Custom configuration (RAM / SSD)", "Buyback & upgrade options", "Engineers with 10+ years' expertise",
];

export const advantages = [
  { no: "01", title: "Pan-India supply", desc: "Capability across multiple cities and states with logistics built for scale." },
  { no: "02", title: "Trusted since 2021", desc: "A registered company backed by a team with 15+ years of industry experience." },
  { no: "03", title: "B2B specialists", desc: "Deep focus on corporate, school and college procurement — with setup and installation." },
  { no: "04", title: "Quality assurance", desc: "Structured testing and recertification on every refurbished unit we ship." },
  { no: "05", title: "Engineer-backed", desc: "Skilled onsite and remote engineering team for service, repair and AMC." },
  { no: "06", title: "Warranty & replacement", desc: "Warranty-backed solutions with flexible replacement and dependable after-sales support." },
];

export const industries = [
  "IT & Software", "Engineering & Construction", "Manufacturing", "Design & Studio",
  "Startups & MSMEs", "Education", "Corporate Offices",
];

export const industryIcons = {
  "IT & Software": "code",
  "Engineering & Construction": "ruler-2",
  "Manufacturing": "building-factory",
  "Design & Studio": "palette",
  "Startups & MSMEs": "rocket",
  "Education": "school",
  "Corporate Offices": "building-skyscraper",
};

// Our partners / clients — organisations MicroApts supplies and services.
// These are placeholder tiles. To use a real logo, set `logo` to an image path
// in /public (e.g. "/logos/apex.svg"); the tile then renders that image instead
// of the monogram. `initials` is the fallback shown until a logo is added.
export const partners = [
  { name: "Apex Corp",       initials: "AX", logo: "" },
  { name: "Vertex Labs",     initials: "VL", logo: "" },
  { name: "Orbit Systems",   initials: "OS", logo: "" },
  { name: "Nimbus Cloud",    initials: "NC", logo: "" },
  { name: "Quanta Works",    initials: "QW", logo: "" },
  { name: "Stratus IT",      initials: "SI", logo: "" },
  { name: "Meridian Group",  initials: "MG", logo: "" },
  { name: "Helix Edu",       initials: "HE", logo: "" },
  { name: "Summit Mfg",      initials: "SM", logo: "" },
  { name: "Pioneer Studio",  initials: "PS", logo: "" },
];

export const stats = [
  { num: "2021", sym: "", label: "Trading since" },
  { num: "15", sym: "+", label: "Years of industry experience" },
  { num: "Pan", sym: "·IN", label: "Supply & onsite support" },
  { num: "4", sym: "×", label: "Sale · Rent · Service · AMC" },
];

export const navSections = [
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "process", label: "Process" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
];
