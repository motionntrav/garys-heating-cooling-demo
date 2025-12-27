export const site = {
  name: "Your HVAC Company",
  tagline: "Comfort you can count on — in every season.",
  description:
    "Your HVAC Company provides dependable heating and cooling services in Indianapolis and nearby areas. Fast scheduling, honest pricing, quality work.",
  url: "https://example.com", // replace with real domain or Vercel URL
  phone: "(555) 555-5555",
  email: "service@yourhvaccompany.com", // replace with the real email if different
  address: {
    street: "Indianapolis, IN",
    city: "Indianapolis",
    region: "IN",
    postalCode: "46201",
    country: "US",
  },
 hours: [
  { days: "Mon–Sat", hours: "7:00 AM – 7:00 PM" },
  { days: "Sun", hours: "8:00 AM – 5:00 PM" },
  { days: "After-hours", hours: "Emergency service available — call" }
],

  serviceAreas: [
    "Indianapolis",
    "Carmel",
    "Fishers",
    "Noblesville",
    "Greenwood",
    "Avon",
    "Brownsburg",
    "Plainfield"
  ],
  services: [
    {
      title: "AC Repair",
      desc: "Diagnosis and repair to get your system cooling fast. We explain the options clearly before we work."
    },
    {
      title: "Furnace Repair",
      desc: "Safe troubleshooting and repairs for no-heat issues, strange smells, or noisy operation."
    },
    {
      title: "System Installation",
      desc: "High-efficiency HVAC installs sized properly for your home—built for comfort and lower bills."
    },
    {
      title: "Maintenance & Tune-Ups",
      desc: "Seasonal checkups that prevent breakdowns, improve efficiency, and extend equipment life."
    },
    {
      title: "Indoor Air Quality",
      desc: "Filters, humidifiers, and air purification options to help your home feel cleaner and healthier."
    },
    {
      title: "Thermostats",
      desc: "Smart thermostat installs and configuration so you get comfort + control without headaches."
    }
  ],
  testimonials: [
    {
      name: "Sarah M.",
      location: "Indianapolis",
      quote:
        "They showed up on time, explained everything in plain English, and had our AC running the same day. Super professional."
    },
    {
      name: "James R.",
      location: "Carmel",
      quote:
        "Fair pricing and no pressure. The tech was respectful, kept everything clean, and the furnace is running great."
    },
    {
      name: "Emily T.",
      location: "Fishers",
      quote:
        "We got a new system installed and the difference is night and day. Quiet, comfortable, and the team was awesome."
    }
  ],
  faqs: [
    {
      q: "Do you offer same-day service?",
      a: "When scheduling allows, yes. Call us and we’ll give you the earliest available options."
    },
    {
      q: "Do you provide upfront pricing?",
      a: "Yes. After diagnosing the issue, we explain the fix and provide pricing before starting work."
    },
    {
      q: "What brands do you service?",
      a: "We service most major HVAC brands. If you’re unsure, give us a call with your model info."
    },
    {
      q: "How often should I schedule maintenance?",
      a: "Typically twice per year—spring for cooling and fall for heating—to reduce breakdown risk."
    }
  ]
};
