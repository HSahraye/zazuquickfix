export const contactInfo = {
  phoneDisplay: "+1 (341) 238-6141",
  phoneHref: "tel:+13412386141",
  smsHref: "sms:+13412386141",
  email: "zazuquickfix@gmail.com",
  instagramHandle: "@ZazuQuickFix",
  calendlyUrl: "https://calendly.com/zazuquickfix/30min",
};

export const trustBadges = [
  "We come to you",
  "Same-day availability when possible",
  "Interior & exterior packages",
  "Oakland & Bay Area",
];

export const detailingServices = [
  "Express Exterior Wash",
  "Interior Reset",
  "Full Mobile Detail",
  "Deep Interior Detail",
  "Pet Hair & Stain Removal",
  "Headlight Restoration",
  "Fleet / Rideshare Cleaning",
];

export const maintenanceServices = [
  "Oil change",
  "Battery replacement",
  "OBD-II scan",
  "Air and cabin filters",
  "Tire plug repair",
  "Brake pad service",
];

export const packageCards = [
  {
    name: "Express Mobile Wash",
    price: "Starting at $49",
    includes:
      "Exterior hand wash, wheels, tires, windows, and quick dry.",
  },
  {
    name: "Interior Reset",
    price: "Starting at $99",
    includes:
      "Vacuum, wipe down, cupholders, dashboard, door panels, trash removal, and light interior refresh.",
  },
  {
    name: "Full Mobile Detail",
    price: "Starting at $179",
    includes:
      "Interior reset plus exterior wash, wheels, windows, tire shine, and light stain attention.",
  },
  {
    name: "Deep Interior Detail",
    price: "Starting at $199-$299",
    includes:
      "Deep vacuum, shampoo/extraction where needed, stain treatment, pet hair removal available, and odor treatment available.",
  },
  {
    name: "Premium Detail Day",
    price: "Starting at $299+",
    includes:
      "Best for neglected vehicles, family cars, rideshare cars, multiple vehicles, and lease return prep.",
  },
];

export const pricingNote =
  "Final pricing may vary by vehicle size, condition, pet hair, stains, and location. Send photos for the most accurate quote.";

export const serviceAreaCities = [
  "Oakland",
  "Alameda",
  "Berkeley",
  "Emeryville",
  "San Leandro",
  "Hayward",
  "Castro Valley",
  "Walnut Creek",
  "Lafayette",
  "San Ramon",
  "Dublin",
  "Pleasanton",
  "Fremont",
];

export const faqItems = [
  {
    question: "Do you bring your own water and power?",
    answer:
      "Yes. We carry what we need for most jobs and confirm setup details when we quote your service.",
  },
  {
    question: "Can you service apartments or street parking?",
    answer:
      "In most cases, yes. Share your parking setup and we will confirm the best way to complete your detail.",
  },
  {
    question: "How long does a detail take?",
    answer:
      "Most details take 1.5 to 4 hours depending on package, vehicle size, and interior condition.",
  },
  {
    question: "Do you remove pet hair?",
    answer:
      "Yes, pet hair removal is available and can be added based on the amount of hair and vehicle condition.",
  },
  {
    question: "Can you remove stains?",
    answer:
      "We treat most common stains and set clear expectations after reviewing photos of the affected areas.",
  },
  {
    question: "Do you clean rideshare vehicles?",
    answer:
      "Yes, rideshare and fleet cleanup packages are available for high-use vehicles that need frequent resets.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Oakland and many nearby Bay Area cities. Contact us with your zip code to confirm availability.",
  },
  {
    question: "Is pricing final?",
    answer:
      "Prices are listed as starting rates. Final pricing depends on size, condition, stains, pet hair, and travel distance.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "We will coordinate a protected setup when possible, or help reschedule to the next available opening.",
  },
  {
    question: "Do I need to be present?",
    answer:
      "Not always. We can coordinate access and payment in advance when a safe work setup is available.",
  },
];

type CityLandingConfig = {
  h1: string;
  intro: string;
};

export const cityLandingPages: Record<string, CityLandingConfig> = {
  "mobile-detailing-oakland": {
    h1: "Mobile Detailing in Oakland, CA",
    intro:
      "Get professional mobile detailing in Oakland without driving to a shop. ZazuQuickFix brings interior and exterior detailing directly to your driveway, curbside parking, or office lot.",
  },
  "mobile-car-wash-oakland": {
    h1: "Mobile Car Wash in Oakland, CA",
    intro:
      "Need a reliable mobile car wash in Oakland? We deliver fast exterior wash packages and interior resets at your location so your car stays clean without wasting your day.",
  },
  "mobile-detailing-alameda": {
    h1: "Mobile Detailing in Alameda, CA",
    intro:
      "From apartment complexes to single-family homes, ZazuQuickFix offers mobile detailing throughout Alameda with clear pricing and convenient scheduling.",
  },
  "mobile-detailing-berkeley": {
    h1: "Mobile Detailing in Berkeley, CA",
    intro:
      "Keep your vehicle clean in Berkeley traffic and parking conditions with detailing packages built for everyday use, rideshare work, and family vehicles.",
  },
  "mobile-detailing-san-leandro": {
    h1: "Mobile Detailing in San Leandro, CA",
    intro:
      "ZazuQuickFix provides mobile car detailing across San Leandro with quote-first service and package options ranging from quick washes to deep interior work.",
  },
  "mobile-detailing-hayward": {
    h1: "Mobile Detailing in Hayward, CA",
    intro:
      "Book mobile detailing in Hayward with a team that comes to your location and focuses on practical results: cleaner interiors, refreshed exteriors, and less downtime.",
  },
  "mobile-detailing-walnut-creek": {
    h1: "Mobile Detailing in Walnut Creek, CA",
    intro:
      "For busy Walnut Creek drivers, we bring premium mobile detailing to your home or office with flexible package options and transparent starting rates.",
  },
};
