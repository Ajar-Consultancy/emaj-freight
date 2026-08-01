export interface ServiceItem {
  slug: string;
  title: string;
  badge: string;
  shortDesc: string;
  image: string;
  fullDesc: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

export const COMPANY_DETAILS = {
  name: "EMAJ Freight Private Limited",
  phone: "+91 8884884210",
  email: "sales@emajfreight.com",
  address: "2H/1635, P & T Colony 16th street, Thoothukudi, Tamil Nadu, India",
  city: "Thoothukudi",
  country: "India",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "ocean-freight",
    title: "Ocean Freight Forwarding",
    badge: "Sea Cargo",
    shortDesc:
      "Comprehensive Full Container Load (FCL) and Less than Container Load (LCL) services connecting primary global trade lanes.",
    image: "/images/OceanFreightForwarding.png",
    fullDesc:
      "EMAJ Freight offers reliable, cost-effective ocean freight forwarding services tailored to your international trade requirements. Leveraging strong relationships with premier global ocean carriers, we manage FCL and LCL shipments seamlessly across major international shipping routes.",
    features: [
      "Full Container Load (FCL) & Less than Container Load (LCL) consolidation",
      "Door-to-door, port-to-port, and door-to-port logistics execution",
      "Real-time vessel tracking and shipment status updates",
      "Specialized container equipment (Flat Rack, Open Top, Reefer units)",
      "Customs documentation and port clearance coordination",
      "Flexible sailing schedules with top-tier ocean liners",
    ],
    benefits: [
      {
        title: "Cost-Effective Freight",
        description:
          "Competitive freight rates and flexible space allocations without compromising transit security.",
      },
      {
        title: "Global Ocean Network",
        description:
          "Established connectivity to major ports across Asia, Europe, Middle East, and Americas.",
      },
      {
        title: "End-to-End Tracking",
        description:
          "Full line-item visibility from origin pickup to final destination port discharge.",
      },
    ],
  },
  {
    slug: "air-freight",
    title: "Air Freight Forwarding",
    badge: "Aviation",
    shortDesc:
      "Rapid, time-critical air cargo solutions for high-value or urgent shipments with priority flight options.",
    image: "/images/AirFreightForwarding.png",
    fullDesc:
      "When speed and time precision are vital, EMAJ Freight delivers expedited air freight solutions designed for high-value, perishable, or urgent cargo. We provide tailored air logistics ranging from priority express flights to consolidated air shipments.",
    features: [
      "Priority express, standard air, and deferred air cargo routes",
      "Temperature-controlled cold chain air transport handling",
      "Hazardous material (HAZMAT) compliance and IATA documentation",
      "Direct flight allocations with leading international airlines",
      "Airport-to-airport and airport-to-door delivery execution",
      "Charter flight options for oversized or high-priority shipments",
    ],
    benefits: [
      {
        title: "Rapid Transit Schedules",
        description:
          "Optimized flight schedules ensure urgent cargo arrives strictly on schedule.",
      },
      {
        title: "High Cargo Security",
        description:
          "Strict terminal handling protocols and custody monitoring for delicate and high-value cargo.",
      },
      {
        title: "Flexible Air Planning",
        description:
          "Tailored logistics itineraries designed around your operational timelines.",
      },
    ],
  },
  {
    slug: "customs-brokerage",
    title: "Customs Clearance",
    badge: "Compliance",
    shortDesc:
      "Expert regulatory navigation, customs clearance, and duty assessment ensuring seamless border transitions.",
    image: "/images/CustomClearance.png",
    fullDesc:
      "Navigating complex import and export regulations demands meticulous accuracy. EMAJ Freight’s dedicated customs brokerage team manages customs filings, tariff classification, and regulatory documentation to ensure compliance and avoid costly port delays.",
    features: [
      "Import and export customs declaration processing at ports and ICDs",
      "HS Code tariff classification and duty/tax assessment assistance",
      "Customs bond processing and duty drawdown support",
      "Regulatory compliance advisory for special trade schemes",
      "Physical cargo inspection coordination with port and customs authorities",
      "EDI linkage with official customs control systems",
    ],
    benefits: [
      {
        title: "Zero Delay Processing",
        description:
          "Pre-arrival document verification prevents unnecessary demurrage and storage fees.",
      },
      {
        title: "Full Regulatory Compliance",
        description:
          "Up-to-date knowledge of regional and global customs regulations guarantees compliance.",
      },
      {
        title: "Hassle-Free Clearance",
        description:
          "Complete management of documentation and authority approvals on your behalf.",
      },
    ],
  },
  {
    slug: "project-cargo",
    title: "Project & Break-bulk Cargo",
    badge: "Heavy Lift",
    shortDesc:
      "Specialized engineering and multi-modal transport solutions for oversized, non-containerized heavy industrial machinery.",
    image: "/images/SpecializedCargo.png",
    fullDesc:
      "Heavy equipment, industrial machinery, and out-of-gauge (OOG) cargo require specialized engineering and meticulous route planning. EMAJ Freight handles complex break-bulk movements, heavy-lift loads, and project logistics from initial route survey to final site delivery.",
    features: [
      "Heavy-lift vessel chartering and break-bulk space reservation",
      "Detailed route surveys, road permit coordination, and feasibility analysis",
      "On-site loading, lashing, securing, and discharge supervision",
      "Flat-rack, open-top, and multi-axle modular trailer configurations",
      "Comprehensive multi-modal project management",
      "Marine cargo insurance and risk management planning",
    ],
    benefits: [
      {
        title: "Engineering Expertise",
        description:
          "Tailored load planning and rigging conducted by seasoned project logistics specialists.",
      },
      {
        title: "Risk Reduction",
        description:
          "Strict safety protocols and route checks ensure non-standard cargo arrives safely.",
      },
      {
        title: "Dedicated Project Team",
        description:
          "A single point of contact oversees all transport stages for seamless execution.",
      },
    ],
  },
  {
    slug: "nvocc-services",
    title: "NVOCC Operations",
    badge: "Liner Cargo",
    shortDesc:
      "Non-Vessel Operating Common Carrier operations offering direct House Bills of Lading and flexible container availability.",
    image: "/images/NVOCC.png",
    fullDesc:
      "Operating as a Non-Vessel Operating Common Carrier (NVOCC), EMAJ Freight delivers flexible carrier capabilities with committed ocean shipping space. We issue our own House Bills of Lading (HBL) and manage container inventory to provide competitive solutions on primary trade corridors.",
    features: [
      "Independent House Bill of Lading (HBL) issuance",
      "Owned and leased container fleet management (SOC & COC)",
      "Guaranteed vessel space allocations with major ocean carriers",
      "Flexible ocean routing and transshipment management",
      "Container inventory management and repositioning",
      "Direct port-to-port consolidated cargo services",
    ],
    benefits: [
      {
        title: "Secured Capacity",
        description:
          "Guaranteed vessel space even during peak shipping seasons and market crunches.",
      },
      {
        title: "Custom Billing Terms",
        description:
          "Flexible freight terms and simplified documentation tailored to commercial needs.",
      },
      {
        title: "Equipment Availability",
        description:
          "Reliable access to standard and specialized ocean container units.",
      },
    ],
  },
  {
    slug: "road-transportation",
    title: "Road & Inland Logistics",
    badge: "Haulage",
    shortDesc:
      "Reliable container drayage and full-truckload (FTL) networks connecting major ports, ICDs, and warehouses.",
    image: "/images/InlandTransportation.png",
    fullDesc:
      "EMAJ Freight provides end-to-end inland haulage and road transportation solutions designed to bridge marine ports, Inland Container Depots (ICDs), and local distribution hubs with reliable efficiency and route safety.",
    features: [
      "Full Container Drayage (FCL) and Full-Truckload (FTL) transport",
      "Multi-axle trailers for heavy industrial and break-bulk cargo",
      "Port-to-ICD and factory-to-port bonded container movement",
      "GPS-monitored fleet tracking for real-time location updates",
      "Last-mile door delivery and warehouse distribution logistics",
      "Driver safety compliance and cargo security management",
    ],
    benefits: [
      {
        title: "Reliable Inland Network",
        description:
          "Seamless connection between ports, industrial clusters, and customer warehouses.",
      },
      {
        title: "Real-Time Tracking",
        description:
          "Continuous GPS tracking for full visibility during land transit.",
      },
      {
        title: "Optimized Freight Rates",
        description:
          "Cost-effective haulage routing that reduces overall land transport costs.",
      },
    ],
  },
];

// Helper Functions
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((service) => service.slug);
}