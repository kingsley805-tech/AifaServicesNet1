export const companyDetails = {
  name: "Aifa Services Limited",
  shortName: "Aifa Services LTD",
  tagline: "Excellence in Pest Control, Safety Equipment, Logistics & Construction",
  description: "Aifa Services Limited is a multi-sector corporate solutions provider based in Lapaz, Accra, Ghana. We specialize in certified pest control & fumigation, wholesale safety items & PPE supply, general goods procurement & logistics, and professional construction & architectural tiling.",
  establishedYear: 2018,
  experienceYears: "10+",
  phone1: "+233 24 437 4069",
  phone2: "+233 30 242 0432",
  phoneDisplay1: "(233) 244-374-069",
  phoneDisplay2: "(233) 302-420-432",
  email: "aifa.services@yahoo.com",
  emailAlt: "info@aifaservices.com",
  location: "Lapaz, New Town Road, Near Total Fuel Station, Accra, Ghana",
  gpsLocation: "GA-342-1920, Lapaz, Accra",
  workingHours: "Monday – Saturday: 7:30 AM – 6:00 PM | 24/7 Emergency Pest Response",
  socials: {
    whatsapp: "https://wa.me/233244374069?text=Hello%20Aifa%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    facebook: "https://www.facebook.com/aifaservices",
    twitter: "https://x.com/AifaServices",
    linkedin: "https://www.linkedin.com/in/aifa-services-386b5a324/",
    instagram: "https://www.instagram.com/aifaservices",
  },
  stats: [
    { value: "10+", label: "Years of Industry Excellence", suffix: "" },
    { value: "4,500+", label: "Properties Treated & Serviced", suffix: "" },
    { value: "99.8%", label: "Client Satisfaction Rate", suffix: "" },
    { value: "100%", label: "EPA & Safety Certified", suffix: "" },
  ]
};

export const servicePillars = [
  {
    id: "pest-control",
    title: "Pest Control & Fumigation",
    shortTitle: "Pest Control",
    tagline: "EPA-Certified Eradication, Prevention & Disinfection",
    route: "/services/pest-control",
    heroImage: "https://images.unsplash.com/photo-1559056961-1f3a7a7b7a0e?w=800&q=80",
    cardImage: "https://images.unsplash.com/photo-1617791160588-241658ad6d4c?w=800&q=80",
    icon: "ShieldAlert",
    color: "emerald",
    video: "/imgs/man-spraying-insect-spray.mp4",
    summary: "Complete elimination of termites, bedbugs, crawling & flying insects, rodents, and biological pathogens using eco-safe, WHO/EPA-approved chemicals.",
    features: [
      "Advanced Termite Soil Pre-treatment & Post-Construction Barrier",
      "Thermal Fogging & Ultra-Low Volume (ULV) Misting",
      "Humane Rodent Baiting & Entry-Point Exclusion",
      "Bedbug Thermal & Chemical Multi-Stage Eradication",
      "Hospital-Grade Surface & Air Disinfection",
      "Preventive Maintenance Contracts for Commercial Facilities"
    ],
    sectorsServed: ["Residential Homes", "Hotels & Hospitality", "Warehouses & Factories", "Schools & Universities", "Hospitals & Clinics", "Agricultural Storage"],
    subServices: [
      {
        slug: "termite-control",
        title: "Termite & Wood Borer Control",
        desc: "Comprehensive subterranean termite elimination, foundation soil injection, and structural timber protection.",
        img: "/imgs/termitepg-img1.jpg",
        video: "/imgs/bait_compressed.mp4",
        bullets: ["Pre-construction foundation chemical barrier", "Sub-slab high-pressure injection", "Non-toxic interior colony baiting", "5-year warranty protection plan"]
      },
      {
        slug: "crawling-insects",
        title: "Crawling Insect Extermination",
        desc: "Total eradication of German cockroaches, ants, bedbugs, fleas, and spiders with guaranteed zero re-infestation.",
        img: "/imgs/crawling-bg.jpg",
        video: "/imgs/spraying_compressed.mp4",
        bullets: ["Odorless gel baiting technology", "Targeted crack & crevice micro-spray", "Bedbug lifecycle heat & residual spray", "Commercial food safety compliance"]
      },
      {
        slug: "flying-insects",
        title: "Mosquito & Flying Insect Control",
        desc: "Mass population reduction for mosquitoes, flies, gnats, wasps, and moths using outdoor fogging and indoor light traps.",
        img: "/imgs/flying-bg.jpg",
        video: "/imgs/man-spraying-insect-spray.mp4",
        bullets: ["Thermal outdoor fogging for compounds", "Larvicide application in drainage areas", "Insect light trap installation & servicing", "Malaria prevention programs for estates"]
      },
      {
        slug: "bird-rodent-control",
        title: "Rodent & Bird Proofing",
        desc: "Humane rat, mouse, and bird exclusion systems, tamper-resistant bait stations, and sanitization.",
        img: "/imgs/rodent-bg.jpg",
        video: "/imgs/trap_compressed.mp4",
        bullets: ["Tamper-proof lockable bait stations", "Ultrasonic & physical bird spike deterrents", "Rodent entry sealing & proofing", "Post-eradication carcass removal & deodorization"]
      }
    ]
  },
  {
    id: "safety-items",
    title: "Wholesale Safety Equipment & PPE",
    shortTitle: "Safety Items",
    tagline: "Industrial-Grade Personal Protective Gear & Site Safety",
    route: "/services/safety-items",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    cardImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    icon: "HardHat",
    color: "amber",
    video: "/imgs/7170781-uhd_4096_2160_25fps.mp4",
    summary: "Direct wholesale supply of certified PPE, high-visibility apparel, head & face protection, industrial respiratory equipment, safety footwear, and construction safety supplies.",
    features: [
      "EN & OSHA-compliant Industrial Hard Hats & Helmets",
      "Multi-hazard Chemical & Construction Work Gloves",
      "Steel-Toe Anti-Puncture Work Boots & Wellingtons",
      "N95/KN95, Half-Mask & Full-Face Respirator Cartridges",
      "Reflective Safety Vests, Coveralls & Fire Retardant Wear",
      "Site Warning Signage, Traffic Cones & First Aid Kits"
    ],
    sectorsServed: ["Mining & Quarrying", "Construction & Civil Sites", "Manufacturing & Assembly", "Oil & Gas Operations", "Logistics & Ports", "Security Services"]
  },
  {
    id: "general-goods",
    title: "Supply of General Goods & Logistics",
    shortTitle: "General Goods",
    tagline: "Reliable Global Freight, Procurement & Bulk Distribution",
    route: "/services/general-goods",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    cardImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    icon: "Truck",
    color: "emerald",
    video: "https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-ocean-40674-large.mp4",
    summary: "Full-scale procurement and supply chain management for corporate, institutional, and industrial entities. Sea freight, air cargo, land transport, and customs clearance.",
    features: [
      "End-to-End Corporate & Industrial Procurement",
      "Air Cargo Express & Consolidated Freight",
      "Ocean Containerized Cargo (FCL / LCL Handling)",
      "Cross-Regional Heavy Land Haulage & Dispatch",
      "Secure Warehousing & Inventory Storage",
      "Door-to-Door Delivery Across All Regions of Ghana"
    ],
    sectorsServed: ["Corporate Enterprises", "Government Agencies", "Commercial Importers", "Educational Institutions", "Retail Chains", "Contractors & Builders"]
  },
  {
    id: "construction",
    title: "Construction & Architectural Tiling",
    shortTitle: "Construction",
    tagline: "Master-Craftsman Building, Renovations & Premium Tiling",
    route: "/services/construction",
    heroImage: "https://images.unsplash.com/photo-1565361800022-0fe3d99df46c?w=800&q=80",
    cardImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    icon: "Building2",
    color: "slate",
    video: "/imgs/bio.mp4",
    summary: "Precision commercial and residential construction services. Renowned for British-standard precision tiling, structural refurbishments, interior fit-outs, and civil works.",
    features: [
      "British-Standard Precision Wall & Floor Tiling",
      "Structural Renovations, Additions & Extensions",
      "Modern Interior Architecture & POP Ceiling Finishes",
      "Plumbing, Waterproofing & Surface Drainage Systems",
      "Turnkey Project Management from Foundation to Key Handover",
      "High-Grade Building Materials Supply"
    ],
    sectorsServed: ["Luxury Residential Villas", "Commercial Office Complexes", "Hotels & Resorts", "Retail Shopping Malls", "Educational Campuses", "Industrial Facilities"]
  }
];

export const safetyCatalog = [
  {
    id: "saf-01",
    name: "Industrial Heavy-Duty Safety Helmet with Ratchet Suspension",
    category: "Head & Face Protection",
    code: "PPE-HLM-01",
    img: "/imgs/p0.jpg",
    description: "High-density polyethylene (HDPE) impact shell with 6-point adjustable suspension and chin strap. Meets ANSI Z89.1 & EN397 standards.",
    inStock: true,
    minOrder: "10 pcs",
    tags: ["ANSI Certified", "HDPE Shell", "Adjustable"]
  },
  {
    id: "saf-02",
    name: "Cut-Resistant Nitrile Coated Grip Work Gloves",
    category: "Hand Protection",
    code: "PPE-GLV-04",
    img: "/imgs/p4.avif",
    description: "Level 5 cut resistance with oil-proof sandy nitrile palm coating. Ideal for handling metal sheets, construction materials, and heavy tools.",
    inStock: true,
    minOrder: "50 pairs",
    tags: ["Cut Level 5", "Nitrile Coated", "Heavy Grip"]
  },
  {
    id: "saf-03",
    name: "High-Visibility Reflective Safety Vest (Class 2)",
    category: "Apparel & Visibility",
    code: "PPE-VST-02",
    img: "/imgs/p1.avif",
    description: "Fluorescent neon yellow-green mesh with 360-degree reflective silver bands, zippered front, and multiple tool/pen pockets.",
    inStock: true,
    minOrder: "20 pcs",
    tags: ["Class 2 Certified", "360° Reflective", "Multi-Pocket"]
  },
  {
    id: "saf-04",
    name: "Steel Toe-Cap Anti-Smash Waterproof Safety Boots",
    category: "Foot Protection",
    code: "PPE-BOT-08",
    img: "/imgs/p9f.avif",
    description: "200-Joule steel toe cap with puncture-resistant Kevlar midsole and slip-resistant rubber outsole. Built for rough mining & construction terrain.",
    inStock: true,
    minOrder: "5 pairs",
    tags: ["Steel Toe", "Kevlar Midsole", "Anti-Slip"]
  },
  {
    id: "saf-05",
    name: "Full-Face Dual-Cartridge Organic Vapor Chemical Respirator",
    category: "Respiratory Protection",
    code: "PPE-RSP-09",
    img: "/imgs/p5.avif",
    description: "Medical-grade silicone seal with wide anti-fog polycarbonate visor and replaceable multi-gas vapor cartridges. Ideal for fumigation & chemical handling.",
    inStock: true,
    minOrder: "5 pcs",
    tags: ["Fumigation Ready", "Dual Cartridge", "Anti-Fog"]
  },
  {
    id: "saf-06",
    name: "Industrial Fall Arrest Safety Harness Kit with Lanyard",
    category: "Fall Protection",
    code: "PPE-HRN-03",
    img: "/imgs/p6.avif",
    description: "Full-body 5-point fall arrest harness with forged dorsal D-ring, shock-absorbing lanyard, and scaffolding snap hooks. Rated for 140kg.",
    inStock: true,
    minOrder: "2 sets",
    tags: ["EN361 Standard", "Shock Absorbing", "5-Point Fit"]
  },
  {
    id: "saf-07",
    name: "Anti-Scratch UV400 Clear Wrap-Around Safety Goggles",
    category: "Head & Face Protection",
    code: "PPE-EYE-05",
    img: "/imgs/p7.avif",
    description: "Polycarbonate ballistic impact lens with indirect ventilation vents to prevent fogging. Fits comfortably over prescription eyeglasses.",
    inStock: true,
    minOrder: "20 pcs",
    tags: ["UV400 Protection", "Anti-Fog", "Ballistic Grade"]
  },
  {
    id: "saf-08",
    name: "Commercial Heavy-Duty Dry Chemical ABC Fire Extinguisher",
    category: "Site Equipment & Tools",
    code: "SAF-EXT-06",
    img: "/imgs/p8.avif",
    description: "6kg multipurpose monoammonium phosphate fire extinguisher suitable for Class A, B, and C fires. Pressure gauge & vehicle bracket included.",
    inStock: true,
    minOrder: "2 units",
    tags: ["Class ABC", "Certified Pressure Gauge", "Heavy Gauge"]
  },
  {
    id: "saf-09",
    name: "Heavy-Duty Construction Site Shovel & Spades Set",
    category: "Site Equipment & Tools",
    code: "TLS-SHV-01",
    img: "/imgs/Shovel.jpg",
    description: "Tempered manganese carbon steel blade with fiberglass ergonomic D-grip handle. Built for heavy earth moving and masonry mixing.",
    inStock: true,
    minOrder: "10 pcs",
    tags: ["Manganese Steel", "Ergonomic D-Grip", "Site Tested"]
  },
  {
    id: "saf-10",
    name: "Heavy Forged Steel Pitchfork with Reinforced Collar",
    category: "Site Equipment & Tools",
    code: "TLS-PFK-02",
    img: "/imgs/Pitchfork.jpg",
    description: "4-prong hardened steel head with reinforced ferrule and moisture-resistant ash hardwood handle.",
    inStock: true,
    minOrder: "10 pcs",
    tags: ["Hardened Steel", "Heavy Duty", "Reinforced"]
  }
];

export const constructionProjects = [
  {
    id: "proj-01",
    title: "Luxury Residential Master Bathroom & Living Room Tiling",
    category: "Architectural Tiling",
    location: "East Legon, Accra",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    desc: "Precision installation of 1200x600mm Italian porcelain tiles with laser leveling, waterproofing membrane, and epoxy grouting.",
    year: "2024"
  },
  {
    id: "proj-02",
    title: "Commercial Multi-Storey Office Complex Interior Fit-Out",
    category: "Commercial Renovation",
    location: "Airport Residential Area, Accra",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    desc: "Complete interior restructuring including acoustic POP ceilings, large-format tiling, glass partitioning, and sanitary installations.",
    year: "2024"
  },
  {
    id: "proj-03",
    title: "Industrial Warehouse Concrete Foundation & Flooring",
    category: "Structural Works",
    location: "Tema Industrial Area",
    image: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=800&q=80",
    desc: "Heavy-load reinforced concrete slab casting with power-float smooth finish and industrial epoxy topcoat.",
    year: "2023"
  },
  {
    id: "proj-04",
    title: "Pre-Construction Comprehensive Anti-Termite Soil Treatment",
    category: "Pest Prevention & Civil Works",
    location: "Cantonments, Accra",
    image: "https://images.unsplash.com/photo-1565361800022-0fe3d99df46c?w=800&q=80",
    desc: "Sub-slab and perimeter trenching chemical treatment protecting a 12-unit luxury apartment development from subterranean termites.",
    year: "2024"
  }
];

export const clientReviews = [
  {
    id: 1,
    name: "Kwame Asare-Boateng",
    role: "Estate Facility Manager",
    company: "Goldline Properties, East Legon",
    text: "Aifa Services handled the entire pest control and termite eradication for our 45-home gated estate. In over 2 years, we haven't had a single complaint from residents. Highly professional team with modern equipment.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&q=80",
    service: "Pest Control & Termite Barrier"
  },
  {
    id: 2,
    name: "Dr. Evelyn Mensah",
    role: "Director of Operations",
    company: "PrimeCare Medical Centre",
    text: "Hospital-grade disinfection and fumigation requires strict adherence to health standards. Aifa Services LTD delivers with precision, zero disruption to our patients, and full EPA certification documentation.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80",
    service: "Medical Facility Fumigation"
  },
  {
    id: 3,
    name: "Ing. Samuel Osei",
    role: "Chief Site Engineer",
    company: "Apex Civil & Construction Ltd",
    text: "We source our wholesale PPE and safety gear exclusively from Aifa Services. Their helmets, harnesses, and safety boots are strictly certified and withstand harsh quarry conditions. Quick delivery to Tema.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&q=80",
    service: "Wholesale Safety PPE Supply"
  },
  {
    id: 4,
    name: "Maame Adjoa Frimpong",
    role: "Managing Director",
    company: "Frimpong Global Logistics",
    text: "Their tiling and finishing team transformed our new corporate headquarters in Accra. The tile alignment, clean grout lines, and attention to detail reflect true British-standard craftsmanship.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&q=80",
    service: "Architectural Tiling & Renovation"
  }
];

export const certifications = [
  {
    name: "EPA Ghana Certified",
    label: "Environmental Protection Agency",
    desc: "Authorized & certified for commercial & industrial pesticide application and environmental fumigation.",
    badge: "Official EPA License"
  },
  {
    name: "Ghana Standards Authority",
    label: "GSA Quality Compliance",
    desc: "All imported safety gear, PPE, and chemicals comply with national quality and safety benchmarks.",
    badge: "GSA Verified"
  },
  {
    name: "British Tiling Standards",
    label: "BS 5385 Specification",
    desc: "Wall and floor tiling installation adhering strictly to British precision standards and laser alignment.",
    badge: "BS 5385 Certified"
  },
  {
    name: "WHO Eco-Safe Pesticides",
    label: "World Health Organization",
    desc: "Eco-friendly low-toxicity formulations safe for children, pets, food storage, and sensitive habitats.",
    badge: "Eco-Safe Approved"
  }
];

export const faqList = [
  {
    q: "How fast can Aifa Services deploy an emergency pest control team in Accra?",
    a: "We operate a rapid emergency response team across Greater Accra and Tema. For urgent infestations or pre-occupancy fumigations, our technicians can deploy within 2 to 4 hours of confirmation."
  },
  {
    q: "Are your pest control chemicals safe for children, pets, and kitchen spaces?",
    a: "Yes. We use EPA-certified, WHO-approved synthetic pyrethroids and targeted gel baits. They are low-odor, biodegradable, and specifically formulated to target pests without leaving toxic residues in living or dining areas. We provide clear safety instructions for the brief re-entry period."
  },
  {
    q: "Do you supply industrial safety gear (PPE) in wholesale bulk quantities?",
    a: "Absolutely. We supply mining companies, civil contractors, logistics hubs, and manufacturing plants with bulk orders of safety helmets, cut-resistant gloves, steel-toe boots, respirators, and high-visibility clothing at discounted wholesale rates with scheduled delivery."
  },
  {
    q: "How does your construction tiling service differ from regular tiling?",
    a: "We follow British Standard BS 5385 precision tiling. This includes laser surface leveling, correct substrate priming, 100% adhesive mortar coverage (no hollow spots), waterproof tanking in wet areas, and premium epoxy grouting for zero stainings."
  },
  {
    q: "How can I request a formal corporate quote or site inspection?",
    a: "You can use our online Instant Quote Calculator on this website, click the WhatsApp button for direct chat with our project managers, or call our Lapaz office directly at +233 24 437 4069."
  }
];
