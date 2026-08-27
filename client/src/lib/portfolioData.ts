// Editorial Signal reminder: keep content structured, specific, and proof-led; every demo is clearly conceptual and avoids fabricated results.

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  services: string[];
  accent: string;
  text: string;
  image?: string;
  gallery?: string[];
  visualClass: string;
  caseStudy: {
    challenge: string;
    approach: string;
    design: string;
    result: string;
  };
};

export const contactConfig = {
  name: "Yash Kumar Sharma",
  email: "yash1047sharma@gmail.com",
  whatsapp: "7078479889",
  whatsappHref: "https://wa.me/917078479889",
  location: "Available remotely · India",
};

export const services = [
  {
    number: "01",
    title: "Website development",
    description: "Responsive, business-minded websites built around how your customers actually decide.",
    icon: "↗",
    detail: "From a focused one-pager to a full multi-page presence, I turn the brief into a clear digital home.",
  },
  {
    number: "02",
    title: "Website redesign",
    description: "Transform an outdated website into a sharper, more trustworthy experience.",
    icon: "◒",
    detail: "Better hierarchy, spacing, navigation, and mobile behavior—without losing what already works.",
  },
  {
    number: "03",
    title: "E-commerce websites",
    description: "Commerce experiences that make products easier to discover, compare, and want.",
    icon: "□",
    detail: "Product storytelling, collection structure, cart moments, and responsive flows designed as one system.",
  },
  {
    number: "04",
    title: "Landing pages",
    description: "Focused campaign pages that move visitors from interest to the next useful action.",
    icon: "↑",
    detail: "A strong point of view, an intentional sequence, and calls-to-action with nowhere to hide.",
  },
  {
    number: "05",
    title: "UI / UX enhancement",
    description: "Practical improvements to make an existing site clearer, faster, and easier to use.",
    icon: "⌁",
    detail: "I look for friction in the details: tap targets, content order, visual weight, and moments of doubt.",
  },
  {
    number: "06",
    title: "Business web presence",
    description: "A credible online home for local businesses, hotels, cafés, shops, and service brands.",
    icon: "✦",
    detail: "The right mix of personality, information, proof, and contact paths—without the clutter.",
  },
  {
    number: "07",
    title: "Digital creatives",
    description: "Promotional posters, banners, social creatives, and web graphics that extend the brand.",
    icon: "✳",
    detail: "A supporting service for businesses that want their visual language to travel beyond the website.",
  },
];

export const projects: Project[] = [
  {
    id: "soleva",
    number: "01",
    name: "SOLEVA",
    category: "Fashion / Footwear",
    tagline: "A sharper way to move.",
    description: "A conversion-focused footwear concept built around considered product discovery, confident editorial direction, and a tactile commerce rhythm.",
    services: ["Brand experience", "E-commerce UI", "Product discovery", "Responsive design"],
    accent: "#d9ff62",
    text: "#10100f",
    image: "/manus-storage/soleva-preview_58b2ed35.jpg",
    visualClass: "soleva-visual",
    caseStudy: {
      challenge: "Create a new footwear brand that could feel premium without becoming distant or over-designed.",
      approach: "Treat the product page like an editorial spread: fewer distractions, stronger crops, and clearer steps to purchase.",
      design: "Graphite, warm white, and Signal Citrus create contrast across collections, product cards, and offer moments.",
      result: "A conceptual commerce experience designed to make product confidence feel immediate on every screen.",
    },
  },
  {
    id: "arvana",
    number: "02",
    name: "ARVANA",
    category: "Hospitality / Hotel",
    tagline: "Stay somewhere worth remembering.",
    description: "A boutique hotel experience that sells the feeling of arrival before a guest ever checks availability.",
    services: ["Hospitality website", "Visual direction", "Room discovery", "Booking CTA"],
    accent: "#1646a8",
    text: "#f3f0e8",
    image: "/manus-storage/grand-valley-hotel-home_2c0bedd8.jpg",
    gallery: ["/manus-storage/grand-valley-hotel-home_2c0bedd8.jpg", "/manus-storage/grand-valley-hotel-rooms_ae717579.jpg"],
    visualClass: "arvana-visual",
    caseStudy: {
      challenge: "Give a boutique property a digital presence with enough calm to feel premium and enough clarity to convert a stay.",
      approach: "Lead with place, then guide guests through suites, amenities, experiences, and location in one relaxed scroll.",
      design: "Sand, cobalt, and soft daylight turn the interface into a digital extension of the property’s architecture.",
      result: "A conceptual hotel website that makes the booking decision feel like part of the travel experience.",
    },
  },
  {
    id: "aurelia",
    number: "03",
    name: "AURELIA",
    category: "Jewellery / Commerce",
    tagline: "Objects with a longer life.",
    description: "An editorial jewellery storefront where the product, material, and story get the room they deserve.",
    services: ["Luxury e-commerce", "Editorial content", "Product detail UI", "Mobile-first design"],
    accent: "#7f1d2d",
    text: "#f3f0e8",
    image: "/manus-storage/aurelia-preview_1ea69d15.jpg",
    gallery: ["/manus-storage/aurelia-preview_1ea69d15.jpg"],
    visualClass: "aurelia-visual",
    caseStudy: {
      challenge: "Create a jewellery experience that feels elevated without relying on noise, urgency, or empty luxury language.",
      approach: "Slow down the interface around macro imagery, collection stories, and confident product information.",
      design: "Cream paper and oxblood accents frame gold, texture, and generous whitespace as the primary visual material.",
      result: "A conceptual storefront that turns browsing into a quieter, more considered form of discovery.",
    },
  },
  {
    id: "shree-mithas",
    number: "04",
    name: "SHREE MITHAS",
    category: "Food / Local business",
    tagline: "Made for every sweet occasion.",
    description: "A warm, modern identity for a mithai business that needs festival energy, product clarity, and easy local contact.",
    services: ["Local business website", "Product showcase", "Festival campaign", "WhatsApp CTA"],
    accent: "#f4b41a",
    text: "#3b1812",
    image: "/manus-storage/shree-mithas-home_f3467fcd.jpg",
    gallery: ["/manus-storage/shree-mithas-home_f3467fcd.jpg", "/manus-storage/shree-mithas-details_c3a0c98b.jpg"],
    visualClass: "mithas-visual",
    caseStudy: {
      challenge: "Help a beloved local sweets shop feel as memorable online as it does at the counter.",
      approach: "Build a clear browsing path across sweets, namkeen, gift boxes, and seasonal collections.",
      design: "Saffron, maroon, and paper textures blend modern layout discipline with a sense of celebration.",
      result: "A conceptual local-commerce experience made to support discovery, gifting, and direct conversations.",
    },
  },
  {
    id: "ember-bean",
    number: "05",
    name: "EMBER & BEAN",
    category: "Restaurant / Café",
    tagline: "Good food, open late.",
    description: "A contemporary café website that makes the menu, mood, and next visit easy to picture.",
    services: ["Restaurant website", "Menu architecture", "Reservation CTA", "Social gallery"],
    accent: "#d8653b",
    text: "#f3f0e8",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85",
    gallery: ["https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85", "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"],
    visualClass: "ember-visual",
    caseStudy: {
      challenge: "Give a neighbourhood café a stronger online presence without sanding off its warmth or personality.",
      approach: "Combine a visual menu, signature dishes, a practical reservation path, and a gallery that feels alive.",
      design: "Charcoal, terracotta, and butter tones echo warm light, toasted edges, and long-table conversations.",
      result: "A conceptual restaurant site designed to turn a first glance into a plan for tonight.",
    },
  },
  {
    id: "nova-interiors",
    number: "06",
    name: "NOVA INTERIORS",
    category: "Interior design studio",
    tagline: "Spaces with a point of view.",
    description: "A visual studio portfolio built to make expertise tangible through projects, process, and considered detail.",
    services: ["Studio website", "Portfolio system", "Before / after", "Consultation CTA"],
    accent: "#8c9c63",
    text: "#10100f",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],
    visualClass: "nova-visual",
    caseStudy: {
      challenge: "Show a design studio’s range while keeping the focus on the quality of its thinking and finished spaces.",
      approach: "Let project imagery lead, then use process and material details to build confidence around the work.",
      design: "Pale stone, olive, and ink create a gallery-like environment with room for texture and scale.",
      result: "A conceptual studio site that turns a project archive into an invitation for a new conversation.",
    },
  },
];

export const pricing = [
  {
    name: "Starter",
    eyebrow: "For a clear beginning",
    description: "For small businesses and simple online presence.",
    price: "₹18k+",
    features: ["Focused 1–3 page website", "Responsive design", "Contact CTA setup", "Basic SEO structure"],
    idealFor: "Small businesses that need a credible online home without unnecessary complexity.",
    timeline: "1–2 weeks",
  },
  {
    name: "Professional",
    eyebrow: "For a stronger presence",
    description: "For businesses wanting a modern website with room to grow.",
    price: "₹35k+",
    features: ["Custom multi-page website", "Content hierarchy + UI direction", "Responsive implementation", "Launch polish + handover"],
    idealFor: "Businesses ready for a stronger brand presence, clearer journeys, and a flexible content system.",
    timeline: "2–4 weeks",
    featured: true,
  },
  {
    name: "Premium",
    eyebrow: "For a bigger ambition",
    description: "For advanced pages, e-commerce features, and custom UI.",
    price: "Let’s scope it",
    features: ["Premium custom experience", "E-commerce or advanced flows", "Art-directed visual system", "Ongoing refinement options"],
    idealFor: "Brands that need a more custom experience, commerce, or multiple connected user journeys.",
    timeline: "4–7 weeks",
  },
];

export const pricingBreakdown = [
  { stage: "Discovery & direction", starter: "Brief + page plan", professional: "Brief + content hierarchy", premium: "Strategy workshop + experience map" },
  { stage: "Visual design", starter: "Focused visual direction", professional: "Custom UI direction + key screens", premium: "Art-directed system + custom components" },
  { stage: "Build", starter: "1–3 responsive pages", professional: "Multi-page responsive implementation", premium: "Advanced pages, commerce, or custom flows" },
  { stage: "Content support", starter: "Structure guidance", professional: "Content placement + polish", premium: "Editorial layout support + launch assets" },
  { stage: "Quality & launch", starter: "Basic QA + handover", professional: "Responsive QA + launch polish", premium: "Cross-device QA + launch support" },
  { stage: "After launch", starter: "Handover notes", professional: "Short post-launch check-in", premium: "Refinement options scoped separately" },
];

export const creativeWork = [
  { label: "Festival offer", title: "Bring home the sweet moment.", className: "creative-saffron" },
  { label: "Café campaign", title: "Meet me after work.", className: "creative-terracotta" },
  { label: "Product launch", title: "Form follows feeling.", className: "creative-olive" },
];
