// src/data/site.js
// MicroApts Technologies — shared site data.
// Centralised here so components and their client scripts read from one source.

export const CONTACT = {
  phone1: "+91 96205 25510",
  phone2: "+91 90082 44448",
  email: "sales@microaptech.com",
  location: "Girinagar, Bengaluru",
  // Full registered address — used in the footer / contact for local SEO.
  address: "No. 169, 50 Feet Main Road, opp. SBI Bank, 1st Phase, Girinagar, Banashankari 3rd Stage, Bengaluru, Karnataka 560085",
  // Google Business / Maps profile link.
  mapUrl: "https://maps.app.goo.gl/MnHakjoY4uQpoFXa6",
  // WhatsApp number in international format, digits only (91 = India + 10-digit number).
  // Currently set to phone1. To use the other number, change to "919008244448".
  whatsapp: "919620525510",
};

export const coreServices = [
  { img: "/services/sale.webp",       title: "Sale",                   desc: "Brand-new systems from Dell, HP, Lenovo and Apple, plus certified-refurbished, professionally tested units." },
  { img: "/services/rentals.webp",    title: "Rentals",                desc: "Short and long-term rental of laptops, desktops, workstations, MacBooks and servers — with on-time service within TAT." },
  { img: "/services/service.webp",    title: "Service",                desc: "Onsite and remote support, network troubleshooting, plus chip-level motherboard repair across all brands." },
  { img: "/services/enterprise.webp", title: "Enterprise IT Solutions", desc: "Servers, networking, structured deployments and managed IT support for corporates, schools, institutions and studios." },
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
  { icon: "building-skyscraper", label: "Enterprise IT", tag: "MANAGED & SLA" },
  { icon: "refresh",        label: "Buyback",   tag: "UPGRADE & RETURN" },
  { icon: "recycle",        label: "Refurbish", tag: "BACK TO STOCK" },
];

// Refurbishment process — builds trust for refurbished buyers
export const process = [
  { icon: "package-import", title: "Source",        desc: "From trusted corporate fleets." },
  { icon: "clipboard-check", title: "Test",         desc: "Full multi-point diagnostics." },
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
  { no: "05", title: "Engineer-backed", desc: "Skilled onsite and remote engineering team for service, repair and managed enterprise IT support." },
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
  { name: "Gokaldas Exports",        initials: "GE",   logo: "/logos/gokaldas.svg" },
  { name: "Cataler",                 initials: "CA",   logo: "/logos/cataler.svg" },
  { name: "Juspay",                  initials: "JU",   logo: "/logos/juspay.svg" },
  { name: "Utthunga Technologies",   initials: "UT",   logo: "/logos/utthunga.png" },
  { name: "Sapthagiri Medical College", initials: "SM", logo: "/logos/sapthagiri.png" },
  { name: "Rayvector",               initials: "RV",   logo: "/logos/rayvector.svg" },
  { name: "Cream Color Studio",      initials: "CC",   logo: "" },
  { name: "BIT",                     initials: "BIT",  logo: "/logos/bit.png" },
  { name: "VVIT",                    initials: "VVIT", logo: "/logos/vvit.png" },
  { name: "BITM",                    initials: "BITM", logo: "/logos/bitm.png" },
  { name: "NPS",                     initials: "NPS",  logo: "/logos/nps.png" },
  { name: "KisanKraft",              initials: "KK",   logo: "/logos/kisankraft.png" },
  { name: "Rajya Vokkaligara Sangha", initials: "RVS", logo: "/logos/rvsangha.png" },
];

export const stats = [
  { num: "1L", sym: "+", label: "Devices delivered" },
  { num: "22", sym: "+", label: "Engineers & support staff" },
  { num: "Pan", sym: "·IN", label: "Delivery & onsite support" },
  { num: "2021", sym: "", label: "Trading since" },
];

// Why-choose highlight band — the headline credibility metrics.
export const credibility = [
  { icon: "users",          value: "22+",       label: "IT professionals" },
  { icon: "device-laptop",  value: "1 Lakh+",   label: "Devices delivered" },
  { icon: "headset",        value: "Bengaluru", label: "Based support team" },
  { icon: "truck-delivery", value: "PAN India", label: "Delivery & onsite" },
  { icon: "receipt-tax",    value: "GST",       label: "Billing on every order" },
  { icon: "shield-check",   value: "Warranty",  label: "Support on every unit" },
];

// Team — MicroApts runs a 22-strong team across four departments.
// Counts sum to 22. Replace `members` with real names/photos when available;
// set `photo` to an image under /public/team (e.g. "/team/asha.jpg").
export const team = {
  total: 22,
  departments: [
    { key: "Management", icon: "briefcase", count: 3,
      desc: "Leadership driving strategy, key accounts and day-to-day operations.",
      members: [
        { name: "", role: "Founder & Director", photo: "" },
        { name: "", role: "Operations Head", photo: "" },
        { name: "", role: "Accounts & Admin", photo: "" },
      ] },
    { key: "Sales Team", icon: "businessplan", count: 7,
      desc: "Corporate account managers handling sales, rentals and bulk procurement.",
      members: [
        { name: "", role: "Sales Manager", photo: "" },
        { name: "", role: "Key Accounts", photo: "" },
        { name: "", role: "Field Sales", photo: "" },
      ] },
    { key: "Technical Team", icon: "tool", count: 9,
      desc: "Engineers for onsite & remote service, chip-level repair and deployments.",
      members: [
        { name: "", role: "Lead Engineer", photo: "" },
        { name: "", role: "Chip-level Repair", photo: "" },
        { name: "", role: "Network Engineer", photo: "" },
      ] },
    { key: "Procurement Team", icon: "package", count: 3,
      desc: "Sourcing, testing and inventory of new and certified-refurbished stock.",
      members: [
        { name: "", role: "Procurement Lead", photo: "" },
        { name: "", role: "QC & Testing", photo: "" },
        { name: "", role: "Inventory", photo: "" },
      ] },
  ],
};

// Gallery — drop real photos into /public/gallery and set `src` on each item
// (e.g. "/gallery/office-1.jpg"). Until then a labelled placeholder shows.
export const galleryCategories = [
  { key: "office",    label: "Office Photos",         icon: "building" },
  { key: "lab",       label: "Repair Lab",            icon: "tool" },
  { key: "inventory", label: "Inventory Stock",       icon: "stack-2" },
  { key: "server",    label: "Server Setup",          icon: "server" },
  { key: "delivery",  label: "Corporate Deliveries",  icon: "truck-delivery" },
  { key: "team",      label: "Team Photos",           icon: "users" },
];

export const gallery = [
  { category: "office",    src: "", alt: "MicroApts office" },
  { category: "office",    src: "", alt: "Reception & workspace" },
  { category: "lab",       src: "", alt: "Chip-level repair lab" },
  { category: "lab",       src: "", alt: "Diagnostics bench" },
  { category: "inventory", src: "", alt: "Laptop & desktop inventory" },
  { category: "inventory", src: "", alt: "Tested-stock shelves" },
  { category: "server",    src: "", alt: "Server rack setup" },
  { category: "server",    src: "", alt: "Networking deployment" },
  { category: "delivery",  src: "", alt: "Corporate delivery" },
  { category: "delivery",  src: "", alt: "Bulk dispatch" },
  { category: "team",      src: "", alt: "MicroApts team" },
  { category: "team",      src: "", alt: "Service engineers onsite" },
];

// Customer reviews. Set `googleReviews.url` to your Google Business profile and
// drop review screenshots into /public/reviews, listing them in `screenshots`.
// Replace the placeholder `reviews` text with your real Google reviews.
export const googleReviews = {
  rating: 5.0,
  count: 260,
  url: "https://maps.app.goo.gl/MnHakjoY4uQpoFXa6",
  // FREE real-reviews widget (no paid Google API). One-time setup:
  //   1. Go to https://featurable.com, sign up (free), connect this Google
  //      Business profile, and create a widget.
  //   2. Copy your widget ID (looks like "Wd8c0xk...") and paste it below.
  // Once set, the live Featurable widget replaces the placeholder cards.
  featurableId: "",
  screenshots: [
    // "/reviews/review-1.png", "/reviews/review-2.png",
  ],
  reviews: [
    { name: "Prashanth", company: "Local Guide · Google review", stars: 5,
      text: "I recently got my laptop repaired by Mr. Veresh at MicroApt Technologies in Girinagar, and I am highly satisfied with the service. He diagnosed the genuine issue and resolved it efficiently with absolutely fair charges. No fake problems invented just to charge more, and definitely no hidden fees. A huge relief knowing there's no need to travel all the way to SP Road for IT equipment repairs when we have such a reliable and trustworthy company right nearby. Highly recommended." },
    { name: "neuralhorizon", company: "Google review", stars: 5,
      text: "I recently purchased a pair of headphones from MicroApt Technologies and I'm really happy with the quality — they work great and feel well-made. The person who coordinated the order was very polite and professional, with a genuinely good attitude. It's nice to see someone bringing in business the right way — through honesty and good service, not by making false promises. I truly appreciate the experience and hope to receive the same kind of support in the future. Keep up the good work!" },
    { name: "Suresh Veggalam", company: "Google review", stars: 5,
      text: "I went for servicing with an outdated, dead-slow DELL laptop — they hardly took a couple of hours and gave excellent service. Now the laptop is brand new in terms of performance, at a very reasonable price. Thanks Vinay / Prasanna." },
    { name: "Deepu K J", company: "Google review", stars: 5,
      text: "Thank you Mahesh for such a nice product from MicroApt Technologies — treating customers very well. Nice service from the overall team, positive and quick, making customers very happy. I purchased a used laptop at a reasonable price a year back and its working condition is brilliant. Thank you!" },
  ],
};

// `href` is absolute so in-page anchors also work from /gallery and /team.
// Gallery and Team are their own routes.
export const navSections = [
  { id: "services", label: "Services", href: "/#services" },
  { id: "products", label: "Products", href: "/#products" },
  { id: "gallery",  label: "Gallery",  href: "/gallery" },
  { id: "team",     label: "Team",     href: "/team" },
  { id: "reviews",  label: "Reviews",  href: "/#reviews" },
  { id: "contact",  label: "Contact",  href: "/#contact" },
];
