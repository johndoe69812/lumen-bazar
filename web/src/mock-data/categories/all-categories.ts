import { RootCategory } from "./type";

const ALL_CATEGORIES: Record<string, RootCategory> = {
  vehicles: {
    title: "Vehicles",
    id: "vehicles",
    link: "/vehicles",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_vehicle.png`,
    subCategories: [
      {
        title: "Cars  ›",
        link: "Cars--›",
        id: "Cars--›",
        subCategories: [],
      },
      {
        title: "Motorcycles and motorcycle equipment  ›",
        link: "Motorcycles-and-motorcycle-equipment--›",
        id: "Motorcycles-and-motorcycle-equipment--›",
        subCategories: [
          {
            title: "All-terrain vehicles",
            link: "All-terrain-vehicles",
            id: "All-terrain-vehicles",
          },
          {
            title: "Karting",
            link: "Karting",
            id: "Karting",
          },
          {
            title: "Quad bikes and buggies",
            link: "Quad-bikes-and-buggies",
            id: "Quad-bikes-and-buggies",
          },
          {
            title: "Mopeds and scooters",
            link: "Mopeds-and-scooters",
            id: "Mopeds-and-scooters",
          },
          {
            title: "Motorcycles",
            link: "Motorcycles",
            id: "Motorcycles",
          },
          {
            title: "Snowmobiles",
            link: "Snowmobiles",
            id: "Snowmobiles",
          },
        ],
      },
      {
        title: "Trucks and special equipment  ›",
        link: "Trucks-and-special-equipment--›",
        id: "Trucks-and-special-equipment--›",
        subCategories: [
          {
            title: "Buses",
            link: "Buses",
            id: "Buses",
          },
          {
            title: "Motorhomes",
            link: "Motorhomes",
            id: "Motorhomes",
          },
          {
            title: "Mobile cranes",
            link: "Mobile-cranes",
            id: "Mobile-cranes",
          },
          {
            title: "Bulldozers",
            link: "Bulldozers",
            id: "Bulldozers",
          },
          {
            title: "Trucks",
            link: "Trucks",
            id: "Trucks",
          },
          {
            title: "Municipal equipment",
            link: "Municipal-equipment",
            id: "Municipal-equipment",
          },
          {
            title: "Light commercial vehicles",
            link: "Light-commercial-vehicles",
            id: "Light-commercial-vehicles",
          },
          {
            title: "Attachments",
            link: "Attachments",
            id: "Attachments",
          },
          {
            title: "Loaders",
            link: "Loaders",
            id: "Loaders",
          },
          {
            title: "Trailers",
            link: "Trailers",
            id: "Trailers",
          },
          {
            title: "Agricultural machinery",
            link: "Agricultural-machinery",
            id: "Agricultural-machinery",
          },
          {
            title: "Construction equipment",
            link: "Construction-equipment",
            id: "Construction-equipment",
          },
          {
            title: "Forestry equipment",
            link: "Forestry-equipment",
            id: "Forestry-equipment",
          },
          {
            title: "Tractors",
            link: "Tractors",
            id: "Tractors",
          },
          {
            title: "Excavators",
            link: "Excavators",
            id: "Excavators",
          },
          {
            title: "Water transport  >",
            link: "Water-transport-->",
            id: "Water-transport-->",
          },
          {
            title: "Rowing boats",
            link: "Rowing-boats",
            id: "Rowing-boats",
          },
          {
            title: "Jet skis",
            link: "Jet-skis",
            id: "Jet-skis",
          },
          {
            title: "Boats and yachts",
            link: "Boats-and-yachts",
            id: "Boats-and-yachts",
          },
          {
            title: "Motor boats and motors",
            link: "Motor-boats-and-motors",
            id: "Motor-boats-and-motors",
          },
        ],
      },
      {
        title: "Spare parts and accessories  ›",
        link: "Spare-parts-and-accessories--›",
        id: "Spare-parts-and-accessories--›",
        subCategories: [
          {
            title: "Spare parts",
            link: "Spare-parts",
            id: "Spare-parts",
          },
          {
            title: "Tires, rims and wheels",
            link: "Tires,-rims-and-wheels",
            id: "Tires,-rims-and-wheels",
          },
          {
            title: "Audio and video equipment",
            link: "Audio-and-video-equipment",
            id: "Audio-and-video-equipment",
          },
          {
            title: "Accessories",
            link: "Accessories",
            id: "Accessories",
          },
          {
            title: "Tuning",
            link: "Tuning",
            id: "Tuning",
          },
          {
            title: "Luggage racks and towbars",
            link: "Luggage-racks-and-towbars",
            id: "Luggage-racks-and-towbars",
          },
          {
            title: "Tools",
            link: "Tools",
            id: "Tools",
          },
          {
            title: "Trailers",
            link: "Trailers",
            id: "Trailers",
          },
          {
            title: "Equipment",
            link: "Equipment",
            id: "Equipment",
          },
          {
            title: "Oils and auto chemicals",
            link: "Oils-and-auto-chemicals",
            id: "Oils-and-auto-chemicals",
          },
          {
            title: "Anti-theft devices",
            link: "Anti-theft-devices",
            id: "Anti-theft-devices",
          },
          {
            title: "GPS navigators",
            link: "GPS-navigators",
            id: "GPS-navigators",
          },
          {
            title: "Services",
            link: "Services",
            id: "Services",
          },
          {
            title: "Car catalog",
            link: "Car-catalog",
            id: "Car-catalog",
          },
          {
            title: "Car valuation",
            link: "Car-valuation",
            id: "Car-valuation",
          },
          {
            title: "Checking history in Autotek",
            link: "Checking-history-in-Autotek",
            id: "Checking-history-in-Autotek",
          },
          {
            title: "Car purchase and sale agreement",
            link: "Car-purchase-and-sale-agreement",
            id: "Car-purchase-and-sale-agreement",
          },
          {
            title: "Avito Auction",
            link: "Avito-Auction",
            id: "Avito-Auction",
          },
        ],
      },
    ],
  },
  estate: {
    title: "Real Estate",
    id: "estate",
    link: "/estate",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_estate.png`,
    subCategories: [
      {
        title: "Buy a home >",
        id: "buy-a-home",
        link: "buy-a-home",
        subCategories: [
          {
            title: "All apartments",
            id: "all-apartments",
            link: "all-apartments",
          },
          {
            title: "Secondary",
            id: "secondary",
            link: "secondary",
          },
          {
            title: "New buildings",
            id: "new-buildings",
            link: "new-buildings",
          },
          {
            title: "Houses, dachas, cottages",
            id: "houses,-dachas,-cottages",
            link: "houses,-dachas,-cottages",
          },
          {
            title: "Rooms",
            id: "rooms",
            link: "rooms",
          },
        ],
      },
      {
        title: "Rent daily >",
        id: "rent-daily",
        link: "rent-daily",
        subCategories: [
          {
            title: "Apartments",
            id: "apartments",
            link: "apartments",
          },
          {
            title: "Houses, dachas and cottages",
            id: "houses,-dachas-and-cottages",
            link: "houses,-dachas-and-cottages",
          },
          {
            title: "Rooms and beds",
            id: "rooms-and-beds",
            link: "rooms-and-beds",
          },
        ],
      },
      {
        title: "Rent long term >",
        id: "rent-long-term",
        link: "rent-long-term",
        subCategories: [
          {
            title: "Apartments",
            id: "apartments",
            link: "apartments",
          },
          {
            title: "Houses, dachas and cottages",
            id: "houses,-dachas-and-cottages",
            link: "houses,-dachas-and-cottages",
          },
          {
            title: "Rooms and beds",
            id: "rooms-and-beds",
            link: "rooms-and-beds",
          },
        ],
      },
      {
        title: "Commercial real estate >",
        id: "commercial-real-estate",
        link: "commercial-real-estate",
        subCategories: [
          {
            title: "Buy",
            id: "buy",
            link: "buy",
          },
          {
            title: "Take off",
            id: "take-off",
            link: "take-off",
          },
        ],
      },
      {
        title: "Other categories >",
        id: "other-categories",
        link: "other-categories",
        subCategories: [
          {
            title: "Land",
            id: "land",
            link: "land",
          },
          {
            title: "Garages and parking spaces",
            id: "garages-and-parking-spaces",
            link: "garages-and-parking-spaces",
          },
          {
            title: "Overseas real estate",
            id: "overseas-real-estate",
            link: "overseas-real-estate",
          },
        ],
      },
    ],
  },
  jobs: {
    id: "jobs",
    title: "Jobs",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_jobs.png`,
    link: "/jobs",
    subCategories: [
      {
        title: "Looking for a job  ›",
        id: "looking-for-a-job--›",
        link: "looking-for-a-job--›",
        subCategories: [
          {
            title: "IT, internet, telecom",
            id: "it,-internet,-telecom",
            link: "it,-internet,-telecom",
          },
          {
            title: "Car business",
            id: "car-business",
            link: "car-business",
          },
          {
            title: "Administrative work",
            id: "administrative-work",
            link: "administrative-work",
          },
          {
            title: "Banks, investments",
            id: "banks,-investments",
            link: "banks,-investments",
          },
          {
            title: "Without experience",
            id: "without-experience",
            link: "without-experience",
          },
          {
            title: "Accounting, finance",
            id: "accounting,-finance",
            link: "accounting,-finance",
          },
          {
            title: "Senior management",
            id: "senior-management",
            link: "senior-management",
          },
          {
            title: "Civil service, NPO",
            id: "civil-service,-npo",
            link: "civil-service,-npo",
          },
          {
            title: "Household staff",
            id: "household-staff",
            link: "household-staff",
          },
          {
            title: "Housing and communal services, operation",
            id: "housing-and-communal-services,-operation",
            link: "housing-and-communal-services,-operation",
          },
          {
            title: "Arts, entertainment",
            id: "arts,-entertainment",
            link: "arts,-entertainment",
          },
          { title: "Consulting", id: "consulting", link: "consulting" },
          {
            title: "Express delivery",
            id: "express-delivery",
            link: "express-delivery",
          },
          {
            title: "Marketing, advertising, PR",
            id: "marketing,-advertising,-pr",
            link: "marketing,-advertising,-pr",
          },
          {
            title: "Medicine, pharmaceuticals",
            id: "medicine,-pharmaceuticals",
            link: "medicine,-pharmaceuticals",
          },
          {
            title: "Education, science",
            id: "education,-science",
            link: "education,-science",
          },
          {
            title: "Security, safety",
            id: "security,-safety",
            link: "security,-safety",
          },
          { title: "Sales", id: "sales", link: "sales" },
          {
            title: "Production, raw materials, agriculture",
            id: "production,-raw-materials,-agriculture",
            link: "production,-raw-materials,-agriculture",
          },
          { title: "Insurance", id: "insurance", link: "insurance" },
          {
            title: "Construction",
            id: "construction",
            link: "construction",
          },
          { title: "Taxi", id: "taxi", link: "taxi" },
          {
            title: "Transport, logistics",
            id: "transport,-logistics",
            link: "transport,-logistics",
          },
          {
            title: "Tourism, restaurants",
            id: "tourism,-restaurants",
            link: "tourism,-restaurants",
          },
          {
            title: "Personnel Management",
            id: "personnel-management",
            link: "personnel-management",
          },
          {
            title: "Fitness, beauty salons",
            id: "fitness,-beauty-salons",
            link: "fitness,-beauty-salons",
          },
          {
            title: "Jurisprudence",
            id: "jurisprudence",
            link: "jurisprudence",
          },
        ],
      },
      {
        title: "Looking for an employee  ›",
        id: "looking-for-an-employee--›",
        link: "looking-for-an-employee--›",
        subCategories: [
          {
            title: "IT, internet, telecom",
            id: "it,-internet,-telecom",
            link: "it,-internet,-telecom",
          },
          {
            title: "Car business",
            id: "car-business",
            link: "car-business",
          },
          {
            title: "Administrative work",
            id: "administrative-work",
            link: "administrative-work",
          },
          {
            title: "Banks, investments",
            id: "banks,-investments",
            link: "banks,-investments",
          },
          {
            title: "No experience, students",
            id: "no-experience,-students",
            link: "no-experience,-students",
          },
          {
            title: "Accounting, finance",
            id: "accounting,-finance",
            link: "accounting,-finance",
          },
          {
            title: "Senior management",
            id: "senior-management",
            link: "senior-management",
          },
          {
            title: "Civil service, NPO",
            id: "civil-service,-npo",
            link: "civil-service,-npo",
          },
          {
            title: "Household staff",
            id: "household-staff",
            link: "household-staff",
          },
          {
            title: "Housing and communal services, operation",
            id: "housing-and-communal-services,-operation",
            link: "housing-and-communal-services,-operation",
          },
          {
            title: "Arts, entertainment",
            id: "arts,-entertainment",
            link: "arts,-entertainment",
          },
          { title: "Consulting", id: "consulting", link: "consulting" },
          {
            title: "Express delivery",
            id: "express-delivery",
            link: "express-delivery",
          },
          {
            title: "Marketing, advertising, PR",
            id: "marketing,-advertising,-pr",
            link: "marketing,-advertising,-pr",
          },
          {
            title: "Medicine, pharmaceuticals",
            id: "medicine,-pharmaceuticals",
            link: "medicine,-pharmaceuticals",
          },
          {
            title: "Education, science",
            id: "education,-science",
            link: "education,-science",
          },
          {
            title: "Security, safety",
            id: "security,-safety",
            link: "security,-safety",
          },
          { title: "Sales", id: "sales", link: "sales" },
          {
            title: "Production, raw materials, agriculture",
            id: "production,-raw-materials,-agriculture",
            link: "production,-raw-materials,-agriculture",
          },
          { title: "Insurance", id: "insurance", link: "insurance" },
          {
            title: "Construction",
            id: "construction",
            link: "construction",
          },
          { title: "Taxi", id: "taxi", link: "taxi" },
          {
            title: "Transport, logistics",
            id: "transport,-logistics",
            link: "transport,-logistics",
          },
          {
            title: "Tourism, restaurants",
            id: "tourism,-restaurants",
            link: "tourism,-restaurants",
          },
          {
            title: "Jurisprudence",
            id: "jurisprudence",
            link: "jurisprudence",
          },
          {
            title: "Personnel Management",
            id: "personnel-management",
            link: "personnel-management",
          },
          {
            title: "Fitness, beauty salons",
            id: "fitness,-beauty-salons",
            link: "fitness,-beauty-salons",
          },
        ],
      },
    ],
  },
  services: {
    title: "Services",
    id: "services",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_services.png`,
    link: "/services",
    subCategories: [
      {
        title: "Car service, rental  ›",
        id: "car-service,-rental--›",
        link: "car-service,-rental--›",
        subCategories: [
          { title: "Car service", id: "car-service", link: "car-service" },
          { title: "Rent a Car", id: "rent-a-car", link: "rent-a-car" },
          {
            title: "Rental of special equipment",
            id: "rental-of-special-equipment",
            link: "rental-of-special-equipment",
          },
        ],
      },
      {
        title: "Cargo transportation  ›",
        id: "cargo-transportation--›",
        link: "cargo-transportation--›",
        subCategories: [
          { title: "Around town", id: "around-town", link: "around-town" },
          {
            title: "Between cities",
            id: "between-cities",
            link: "between-cities",
          },
          {
            title: "International",
            id: "international",
            link: "international",
          },
          {
            title: "Passenger Transportation  >",
            id: "passenger-transportation-",
            link: "passenger-transportation-",
          },
          { title: "Transfer", id: "transfer", link: "transfer" },
          {
            title: "Cars made to order",
            id: "cars-made-to-order",
            link: "cars-made-to-order",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Loaders, warehouse services  ›",
        id: "loaders,-warehouse-services--›",
        link: "loaders,-warehouse-services--›",
        subCategories: [
          { title: "Loaders", id: "loaders", link: "loaders" },
          { title: "Fulfillment", id: "fulfillment", link: "fulfillment" },
        ],
      },
      {
        title: "Tow truck services  ›",
        id: "tow-truck-services--›",
        link: "tow-truck-services--›",
        subCategories: [],
      },
      {
        title: "Repair and finishing  ›",
        id: "repair-and-finishing--›",
        link: "repair-and-finishing--›",
        subCategories: [
          {
            title: "Turnkey renovation of apartments and houses",
            id: "turnkey-renovation-of-apartments-and-houses",
            link: "turnkey-renovation-of-apartments-and-houses",
          },
          { title: "Plumbing", id: "plumbing", link: "plumbing" },
          { title: "Electrics", id: "electrics", link: "electrics" },
          {
            title: "Furniture assembly and repair",
            id: "furniture-assembly-and-repair",
            link: "furniture-assembly-and-repair",
          },
          {
            title: "Glazing of balconies",
            id: "glazing-of-balconies",
            link: "glazing-of-balconies",
          },
          { title: "14 more", id: "14-more", link: "14-more" },
          {
            title: "Construction  >",
            id: "construction-",
            link: "construction-",
          },
          {
            title: "Turnkey construction of houses",
            id: "turnkey-construction-of-houses",
            link: "turnkey-construction-of-houses",
          },
          {
            title: "Construction of baths, saunas",
            id: "construction-of-baths,-saunas",
            link: "construction-of-baths,-saunas",
          },
          {
            title: "Finishing of wooden houses, baths, saunas",
            id: "finishing-of-wooden-houses,-baths,-saunas",
            link: "finishing-of-wooden-houses,-baths,-saunas",
          },
          {
            title: "Masonry work",
            id: "masonry-work",
            link: "masonry-work",
          },
          { title: "Roofing", id: "roofing", link: "roofing" },
          {
            title: "Welding work",
            id: "welding-work",
            link: "welding-work",
          },
          {
            title: "Concrete works",
            id: "concrete-works",
            link: "concrete-works",
          },
          {
            title: "Foundation work",
            id: "foundation-work",
            link: "foundation-work",
          },
          {
            title: "Diamond drilling and cutting",
            id: "diamond-drilling-and-cutting",
            link: "diamond-drilling-and-cutting",
          },
          {
            title: "Demolition and dismantling",
            id: "demolition-and-dismantling",
            link: "demolition-and-dismantling",
          },
          {
            title: "Facade works",
            id: "facade-works",
            link: "facade-works",
          },
          {
            title: "Design and estimates",
            id: "design-and-estimates",
            link: "design-and-estimates",
          },
          { title: "Survey work", id: "survey-work", link: "survey-work" },
          { title: "Stairs", id: "stairs", link: "stairs" },
          {
            title: "Gasification",
            id: "gasification",
            link: "gasification",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Master for an hour  ›",
        id: "master-for-an-hour--›",
        link: "master-for-an-hour--›",
        subCategories: [],
      },
      {
        title: "Garden, landscaping  ›",
        id: "garden,-landscaping--›",
        link: "garden,-landscaping--›",
        subCategories: [
          {
            title: "Wells, wells",
            id: "wells,-wells",
            link: "wells,-wells",
          },
          {
            title: "Ponds and fountains",
            id: "ponds-and-fountains",
            link: "ponds-and-fountains",
          },
          {
            title: "Road construction",
            id: "road-construction",
            link: "road-construction",
          },
          {
            title: "Fences, enclosures, canopies",
            id: "fences,-enclosures,-canopies",
            link: "fences,-enclosures,-canopies",
          },
          { title: "Excavation", id: "excavation", link: "excavation" },
          {
            title: "Landscaping, gardening and vegetable garden care",
            id: "landscaping,-gardening-and-vegetable-garden-care",
            link: "landscaping,-gardening-and-vegetable-garden-care",
          },
          {
            title: "Roller shutters and gates",
            id: "roller-shutters-and-gates",
            link: "roller-shutters-and-gates",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Beauty, health  ›",
        id: "beauty,-health--›",
        link: "beauty,-health--›",
        subCategories: [
          { title: "Mani Pedi", id: "mani-pedi", link: "mani-pedi" },
          {
            title: "Hairdresser services",
            id: "hairdresser-services",
            link: "hairdresser-services",
          },
          {
            title: "Eyelashes, eyebrows",
            id: "eyelashes,-eyebrows",
            link: "eyelashes,-eyebrows",
          },
          { title: "Cosmetology", id: "cosmetology", link: "cosmetology" },
          { title: "Epilation", id: "epilation", link: "epilation" },
          { title: "Makeup", id: "makeup", link: "makeup" },
          {
            title: "SPA services, massage",
            id: "spa-services,-massage",
            link: "spa-services,-massage",
          },
          {
            title: "Tattoo, piercing",
            id: "tattoo,-piercing",
            link: "tattoo,-piercing",
          },
          { title: "Psychology", id: "psychology", link: "psychology" },
          { title: "Dietetics", id: "dietetics", link: "dietetics" },
          {
            title: "Renting a workplace",
            id: "renting-a-workplace",
            link: "renting-a-workplace",
          },
          {
            title: "Fitness, yoga",
            id: "fitness,-yoga",
            link: "fitness,-yoga",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Equipment repair and maintenance  ›",
        id: "equipment-repair-and-maintenance--›",
        link: "equipment-repair-and-maintenance--›",
        subCategories: [
          { title: "TVs", id: "tvs", link: "tvs" },
          {
            title: "Mobile devices",
            id: "mobile-devices",
            link: "mobile-devices",
          },
          {
            title: "Photo, audio, video equipment",
            id: "photo,-audio,-video-equipment",
            link: "photo,-audio,-video-equipment",
          },
          {
            title: "Air conditioners, ventilation",
            id: "air-conditioners,-ventilation",
            link: "air-conditioners,-ventilation",
          },
          {
            title: "Washing and drying machines",
            id: "washing-and-drying-machines",
            link: "washing-and-drying-machines",
          },
          { title: "Dishwashers", id: "dishwashers", link: "dishwashers" },
          {
            title: "Refrigerators, freezers",
            id: "refrigerators,-freezers",
            link: "refrigerators,-freezers",
          },
          {
            title: "Cooktops, ovens",
            id: "cooktops,-ovens",
            link: "cooktops,-ovens",
          },
          {
            title: "Gas boilers, water heaters",
            id: "gas-boilers,-water-heaters",
            link: "gas-boilers,-water-heaters",
          },
          {
            title: "Coffee machines",
            id: "coffee-machines",
            link: "coffee-machines",
          },
          {
            title: "Sewing machines, overlockers",
            id: "sewing-machines,-overlockers",
            link: "sewing-machines,-overlockers",
          },
          { title: "Other", id: "other", link: "other" },
          {
            title: "Computer help  >",
            id: "computer-help-",
            link: "computer-help-",
          },
          { title: "Computers", id: "computers", link: "computers" },
          { title: "Printers", id: "printers", link: "printers" },
          {
            title: "Mining equipment",
            id: "mining-equipment",
            link: "mining-equipment",
          },
          {
            title: "Gaming consoles",
            id: "gaming-consoles",
            link: "gaming-consoles",
          },
          {
            title: "OS and programs",
            id: "os-and-programs",
            link: "os-and-programs",
          },
          {
            title: "Internet and other networks",
            id: "internet-and-other-networks",
            link: "internet-and-other-networks",
          },
        ],
      },
      {
        title: "Installation of equipment  ›",
        id: "installation-of-equipment--›",
        link: "installation-of-equipment--›",
        subCategories: [],
      },
      {
        title: "Equipment, production  ›",
        id: "equipment,-production--›",
        link: "equipment,-production--›",
        subCategories: [
          {
            title: "Equipment rent",
            id: "equipment-rent",
            link: "equipment-rent",
          },
          {
            title: "Installation and maintenance of equipment",
            id: "installation-and-maintenance-of-equipment",
            link: "installation-and-maintenance-of-equipment",
          },
          {
            title: "Production, processing",
            id: "production,-processing",
            link: "production,-processing",
          },
        ],
      },
      {
        title: "Training, courses  ›",
        id: "training,-courses--›",
        link: "training,-courses--›",
        subCategories: [
          {
            title: "School and university subjects",
            id: "school-and-university-subjects",
            link: "school-and-university-subjects",
          },
          {
            title: "Foreign languages",
            id: "foreign-languages",
            link: "foreign-languages",
          },
          {
            title: "Child development, speech therapists",
            id: "child-development,-speech-therapists",
            link: "child-development,-speech-therapists",
          },
          {
            title: "IT, business",
            id: "it,-business",
            link: "it,-business",
          },
          {
            title: "Design, drawing",
            id: "design,-drawing",
            link: "design,-drawing",
          },
          {
            title: "Beauty, health",
            id: "beauty,-health",
            link: "beauty,-health",
          },
          {
            title: "Sports, dancing",
            id: "sports,-dancing",
            link: "sports,-dancing",
          },
          { title: "Driving", id: "driving", link: "driving" },
          {
            title: "Music, theater",
            id: "music,-theater",
            link: "music,-theater",
          },
          {
            title: "Professional training",
            id: "professional-training",
            link: "professional-training",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Business services  ›",
        id: "business-services--›",
        link: "business-services--›",
        subCategories: [
          {
            title: "Accounting, finance",
            id: "accounting,-finance",
            link: "accounting,-finance",
          },
          { title: "Consulting", id: "consulting", link: "consulting" },
          {
            title: "Typing and text correction",
            id: "typing-and-text-correction",
            link: "typing-and-text-correction",
          },
          { title: "Translation", id: "translation", link: "translation" },
          { title: "Insurance", id: "insurance", link: "insurance" },
          {
            title: "Legal services",
            id: "legal-services",
            link: "legal-services",
          },
        ],
      },
      {
        title: "IT, marketing  ›",
        id: "it,-marketing--›",
        link: "it,-marketing--›",
        subCategories: [
          {
            title: "Advertising, marketing, promotion",
            id: "advertising,-marketing,-promotion",
            link: "advertising,-marketing,-promotion",
          },
          {
            title: "Programming, setting up CRM",
            id: "programming,-setting-up-crm",
            link: "programming,-setting-up-crm",
          },
          {
            title: "Creation of websites and applications",
            id: "creation-of-websites-and-applications",
            link: "creation-of-websites-and-applications",
          },
        ],
      },
      {
        title: "Advertising, printing  ›",
        id: "advertising,-printing--›",
        link: "advertising,-printing--›",
        subCategories: [
          {
            title: "Marketing, advertising, PR",
            id: "marketing,-advertising,-pr",
            link: "marketing,-advertising,-pr",
          },
          {
            title: "Printing, design",
            id: "printing,-design",
            link: "printing,-design",
          },
        ],
      },
      {
        title: "Garbage and recyclables removal  ›",
        id: "garbage-and-recyclables-removal--›",
        link: "garbage-and-recyclables-removal--›",
        subCategories: [
          { title: "Cleaning  >", id: "cleaning-", link: "cleaning-" },
          {
            title: "spring-cleaning",
            id: "spring-cleaning",
            link: "spring-cleaning",
          },
          {
            title: "Disinfection, disinsection",
            id: "disinfection,-disinsection",
            link: "disinfection,-disinsection",
          },
          {
            title: "Window cleaning",
            id: "window-cleaning",
            link: "window-cleaning",
          },
          {
            title: "Easy cleaning",
            id: "easy-cleaning",
            link: "easy-cleaning",
          },
          {
            title: "Cleaning after renovation",
            id: "cleaning-after-renovation",
            link: "cleaning-after-renovation",
          },
          { title: "2 more", id: "2-more", link: "2-more" },
          {
            title: "Domestic services  >",
            id: "domestic-services-",
            link: "domestic-services-",
          },
          {
            title: "Production of keys",
            id: "production-of-keys",
            link: "production-of-keys",
          },
          {
            title: "Tailoring and repair of clothes",
            id: "tailoring-and-repair-of-clothes",
            link: "tailoring-and-repair-of-clothes",
          },
          {
            title: "Watch repair",
            id: "watch-repair",
            link: "watch-repair",
          },
          {
            title: "Dry cleaning, washing",
            id: "dry-cleaning,-washing",
            link: "dry-cleaning,-washing",
          },
          {
            title: "Jewelry services",
            id: "jewelry-services",
            link: "jewelry-services",
          },
        ],
      },
      {
        title: "Holidays, events  ›",
        id: "holidays,-events--›",
        link: "holidays,-events--›",
        subCategories: [],
      },
      {
        title: "Food and grocery delivery  ›",
        id: "food-and-grocery-delivery--›",
        link: "food-and-grocery-delivery--›",
        subCategories: [],
      },
      {
        title: "Photo and video shooting  ›",
        id: "photo-and-video-shooting--›",
        link: "photo-and-video-shooting--›",
        subCategories: [],
      },
      {
        title: "Nannies, caregivers  ›",
        id: "nannies,-caregivers--›",
        link: "nannies,-caregivers--›",
        subCategories: [],
      },
      {
        title: "Animal Care  ›",
        id: "animal-care--›",
        link: "animal-care--›",
        subCategories: [{ title: "Art  >", id: "art-", link: "art-" }],
      },
      {
        title: "Security, safety  ›",
        id: "security,-safety--›",
        link: "security,-safety--›",
        subCategories: [],
      },
      {
        title: "Other  ›",
        id: "other--›",
        link: "other--›",
        subCategories: [],
      },
    ],
  },
  personal: {
    title: "Personal Items",
    id: "personal",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_clothes.png`,
    link: "/personal",
    subCategories: [
      {
        title: "Clothes, shoes, accessories  >",
        id: "clothes,-shoes,-accessories-",
        link: "clothes,-shoes,-accessories-",
        subCategories: [
          {
            title: "Women's clothing",
            id: "women's-clothing",
            link: "women's-clothing",
          },
          {
            title: "Women's shoes",
            id: "women's-shoes",
            link: "women's-shoes",
          },
          {
            title: "Men's clothing",
            id: "men's-clothing",
            link: "men's-clothing",
          },
          {
            title: "Men's footwear",
            id: "men's-footwear",
            link: "men's-footwear",
          },
          {
            title: "Bags, backpacks and suitcases",
            id: "bags,-backpacks-and-suitcases",
            link: "bags,-backpacks-and-suitcases",
          },
          { title: "Accessories", id: "accessories", link: "accessories" },
        ],
      },
      {
        title: "Children's clothing and shoes  >",
        id: "children's-clothing-and-shoes-",
        link: "children's-clothing-and-shoes-",
        subCategories: [
          { title: "For girls", id: "for-girls", link: "for-girls" },
          { title: "For boys", id: "for-boys", link: "for-boys" },
        ],
      },
      {
        title: "Products for children and toys  >",
        id: "products-for-children-and-toys-",
        link: "products-for-children-and-toys-",
        subCategories: [
          {
            title: "Baby strollers",
            id: "baby-strollers",
            link: "baby-strollers",
          },
          {
            title: "Children's furniture",
            id: "children's-furniture",
            link: "children's-furniture",
          },
          {
            title: "Bicycles and scooters",
            id: "bicycles-and-scooters",
            link: "bicycles-and-scooters",
          },
          {
            title: "Feeding products",
            id: "feeding-products",
            link: "feeding-products",
          },
          { title: "Car seats", id: "car-seats", link: "car-seats" },
          { title: "Bed dress", id: "bed-dress", link: "bed-dress" },
          { title: "Toys", id: "toys", link: "toys" },
          {
            title: "Bathing products",
            id: "bathing-products",
            link: "bathing-products",
          },
          {
            title: "Goods for school",
            id: "goods-for-school",
            link: "goods-for-school",
          },
        ],
      },
      {
        title: "Beauty and health  >",
        id: "beauty-and-health-",
        link: "beauty-and-health-",
        subCategories: [
          {
            title: "Devices and accessories",
            id: "devices-and-accessories",
            link: "devices-and-accessories",
          },
          { title: "Perfumery", id: "perfumery", link: "perfumery" },
          {
            title: "Hygiene products",
            id: "hygiene-products",
            link: "hygiene-products",
          },
          { title: "Cosmetics", id: "cosmetics", link: "cosmetics" },
          {
            title: "Hair products",
            id: "hair-products",
            link: "hair-products",
          },
          {
            title: "Medical products",
            id: "medical-products",
            link: "medical-products",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Watches and jewelry  >",
        id: "watches-and-jewelry-",
        link: "watches-and-jewelry-",
        subCategories: [
          { title: "Jewelry", id: "jewelry", link: "jewelry" },
          { title: "Bijouterie", id: "bijouterie", link: "bijouterie" },
          { title: "Watch", id: "watch", link: "watch" },
        ],
      },
    ],
  },
  "home-garden": {
    title: "For home and garden",
    id: "home-garden",
    link: "/home-garden",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_homecare.png`,
    subCategories: [
      {
        title: "Repair and construction  ›",
        id: "repair-and-construction--›",
        link: "repair-and-construction--›",
        subCategories: [
          {
            title: "Construction materials",
            id: "construction-materials",
            link: "construction-materials",
          },
          { title: "Tools", id: "tools", link: "tools" },
          {
            title: "Plumbing, water supply and sauna",
            id: "plumbing,-water-supply-and-sauna",
            link: "plumbing,-water-supply-and-sauna",
          },
          { title: "Doors", id: "doors", link: "doors" },
          {
            title: "Garden equipment",
            id: "garden-equipment",
            link: "garden-equipment",
          },
          {
            title: "Windows and balconies",
            id: "windows-and-balconies",
            link: "windows-and-balconies",
          },
          {
            title: "Fireplaces and heaters",
            id: "fireplaces-and-heaters",
            link: "fireplaces-and-heaters",
          },
          {
            title: "Finished buildings and log buildings",
            id: "finished-buildings-and-log-buildings",
            link: "finished-buildings-and-log-buildings",
          },
          { title: "Ceilings", id: "ceilings", link: "ceilings" },
        ],
      },
      {
        title: "Furniture and interior  ›",
        id: "furniture-and-interior--›",
        link: "furniture-and-interior--›",
        subCategories: [
          {
            title: "Beds, sofas and armchairs",
            id: "beds,-sofas-and-armchairs",
            link: "beds,-sofas-and-armchairs",
          },
          {
            title: "Wardrobes, chests of drawers and shelving",
            id: "wardrobes,-chests-of-drawers-and-shelving",
            link: "wardrobes,-chests-of-drawers-and-shelving",
          },
          {
            title: "Tables and chairs",
            id: "tables-and-chairs",
            link: "tables-and-chairs",
          },
          {
            title: "Textiles and carpets",
            id: "textiles-and-carpets",
            link: "textiles-and-carpets",
          },
          {
            title: "Kitchen sets",
            id: "kitchen-sets",
            link: "kitchen-sets",
          },
          {
            title: "Interior items, art",
            id: "interior-items,-art",
            link: "interior-items,-art",
          },
          { title: "Lighting", id: "lighting", link: "lighting" },
          {
            title: "Computer tables and chairs",
            id: "computer-tables-and-chairs",
            link: "computer-tables-and-chairs",
          },
          {
            title: "Stands and cabinets",
            id: "stands-and-cabinets",
            link: "stands-and-cabinets",
          },
          { title: "Other", id: "other", link: "other" },
          {
            title: "Appliances  >",
            id: "appliances-",
            link: "appliances-",
          },
          { title: "For kitchen", id: "for-kitchen", link: "for-kitchen" },
          { title: "For home", id: "for-home", link: "for-home" },
          {
            title: "Climatic equipment",
            id: "climatic-equipment",
            link: "climatic-equipment",
          },
          {
            title: "For individual care",
            id: "for-individual-care",
            link: "for-individual-care",
          },
          { title: "Food  >", id: "food-", link: "food-" },
          { title: "Plants  >", id: "plants-", link: "plants-" },
        ],
      },
      {
        title: "Utensils and kitchen goods  ›",
        id: "utensils-and-kitchen-goods--›",
        link: "utensils-and-kitchen-goods--›",
        subCategories: [
          { title: "Dishes", id: "dishes", link: "dishes" },
          {
            title: "Kitchen goods",
            id: "kitchen-goods",
            link: "kitchen-goods",
          },
        ],
      },
    ],
  },
  autoparts: {
    title: "Spare parts and accessories",
    id: "autoparts",
    link: "/autoparts",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_autoparts.png`,
    subCategories: [
      {
        title: "Spare parts  ›",
        id: "spare-parts--›",
        link: "spare-parts--›",
        subCategories: [
          { title: "For cars", id: "for-cars", link: "for-cars" },
          {
            title: "For motorcycles",
            id: "for-motorcycles",
            link: "for-motorcycles",
          },
          {
            title: "For trucks and special equipment",
            id: "for-trucks-and-special-equipment",
            link: "for-trucks-and-special-equipment",
          },
          {
            title: "For water transport",
            id: "for-water-transport",
            link: "for-water-transport",
          },
        ],
      },
      {
        title: "Tires, rims and wheels  ›",
        id: "tires,-rims-and-wheels--›",
        link: "tires,-rims-and-wheels--›",
        subCategories: [
          { title: "Tires", id: "tires", link: "tires" },
          {
            title: "Tires for trucks and special equipment",
            id: "tires-for-trucks-and-special-equipment",
            link: "tires-for-trucks-and-special-equipment",
          },
          {
            title: "Motorcycle tires",
            id: "motorcycle-tires",
            link: "motorcycle-tires",
          },
          { title: "Discs", id: "discs", link: "discs" },
          { title: "Caps", id: "caps", link: "caps" },
          { title: "Wheels", id: "wheels", link: "wheels" },
        ],
      },
      {
        title: "Audio and video equipment  ›",
        id: "audio-and-video-equipment--›",
        link: "audio-and-video-equipment--›",
        subCategories: [
          {
            title: "Accessories  >",
            id: "accessories-",
            link: "accessories-",
          },
        ],
      },
      {
        title: "Tuning  ›",
        id: "tuning--›",
        link: "tuning--›",
        subCategories: [],
      },
      {
        title: "Racks and towbars  ›",
        id: "racks-and-towbars--›",
        link: "racks-and-towbars--›",
        subCategories: [{ title: "Tools  >", id: "tools-", link: "tools-" }],
      },
      {
        title: "Trailers  ›",
        id: "trailers--›",
        link: "trailers--›",
        subCategories: [],
      },
      {
        title: "Equipment  ›",
        id: "equipment--›",
        link: "equipment--›",
        subCategories: [],
      },
      {
        title: "Oils and auto chemicals  ›",
        id: "oils-and-auto-chemicals--›",
        link: "oils-and-auto-chemicals--›",
        subCategories: [],
      },
      {
        title: "Anti-theft devices  ›",
        id: "anti-theft-devices--›",
        link: "anti-theft-devices--›",
        subCategories: [
          { title: "Car alarms", id: "car-alarms", link: "car-alarms" },
          {
            title: "Immobilizers",
            id: "immobilizers",
            link: "immobilizers",
          },
          {
            title: "Mechanical interlocks",
            id: "mechanical-interlocks",
            link: "mechanical-interlocks",
          },
          {
            title: "Satellite systems",
            id: "satellite-systems",
            link: "satellite-systems",
          },
        ],
      },
      {
        title: "GPS navigators  ›",
        id: "gps-navigators--›",
        link: "gps-navigators--›",
        subCategories: [],
      },
    ],
  },
  electronics: {
    id: "electronics",
    title: "Electronics",
    link: "/electronics",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_electronics.png`,
    subCategories: [
      {
        title: "Phones  ›",
        id: "phones--›",
        link: "phones--›",
        subCategories: [
          { title: "Cell phones", id: "cell-phones", link: "cell-phones" },
          { title: "Accessories", id: "accessories", link: "accessories" },
          {
            title: "Walkie-Talkie",
            id: "walkie-talkie",
            link: "walkie-talkie",
          },
          {
            title: "Landline phones",
            id: "landline-phones",
            link: "landline-phones",
          },
        ],
      },
      {
        title: "Audio and video  ›",
        id: "audio-and-video--›",
        link: "audio-and-video--›",
        subCategories: [
          {
            title: "TVs and projectors",
            id: "tvs-and-projectors",
            link: "tvs-and-projectors",
          },
          { title: "Headphones", id: "headphones", link: "headphones" },
          {
            title: "Acoustics, speakers, subwoofers",
            id: "acoustics,-speakers,-subwoofers",
            link: "acoustics,-speakers,-subwoofers",
          },
          { title: "Accessories", id: "accessories", link: "accessories" },
          {
            title: "Music centers, radio tape recorders",
            id: "music-centers,-radio-tape-recorders",
            link: "music-centers,-radio-tape-recorders",
          },
          {
            title: "Amplifiers and receivers",
            id: "amplifiers-and-receivers",
            link: "amplifiers-and-receivers",
          },
          {
            title: "Video cameras",
            id: "video-cameras",
            link: "video-cameras",
          },
          {
            title: "Video, DVD and Blu-ray players",
            id: "video,-dvd-and-blu-ray-players",
            link: "video,-dvd-and-blu-ray-players",
          },
          {
            title: "Cables and adapters",
            id: "cables-and-adapters",
            link: "cables-and-adapters",
          },
          {
            title: "Music and films",
            id: "music-and-films",
            link: "music-and-films",
          },
          { title: "Microphones", id: "microphones", link: "microphones" },
          { title: "MP3 players", id: "mp3-players", link: "mp3-players" },
        ],
      },
      {
        title: "Computer products  ›",
        id: "computer-products--›",
        link: "computer-products--›",
        subCategories: [
          { title: "Accessories", id: "accessories", link: "accessories" },
          { title: "Monitors", id: "monitors", link: "monitors" },
          {
            title: "network hardware",
            id: "network-hardware",
            link: "network-hardware",
          },
          {
            title: "Keyboards and mice",
            id: "keyboards-and-mice",
            link: "keyboards-and-mice",
          },
          {
            title: "Computer components",
            id: "computer-components",
            link: "computer-components",
          },
          {
            title: "Joysticks and steering wheels",
            id: "joysticks-and-steering-wheels",
            link: "joysticks-and-steering-wheels",
          },
          {
            title: "Flash drives and memory cards",
            id: "flash-drives-and-memory-cards",
            link: "flash-drives-and-memory-cards",
          },
          { title: "Acoustics", id: "acoustics", link: "acoustics" },
          {
            title: "Portable hard drives",
            id: "portable-hard-drives",
            link: "portable-hard-drives",
          },
          { title: "Webcams", id: "webcams", link: "webcams" },
          { title: "TV tuners", id: "tv-tuners", link: "tv-tuners" },
        ],
      },
      {
        title: "Games, consoles and programs  ›",
        id: "games,-consoles-and-programs--›",
        link: "games,-consoles-and-programs--›",
        subCategories: [
          {
            title: "Gaming consoles",
            id: "gaming-consoles",
            link: "gaming-consoles",
          },
          {
            title: "Console games",
            id: "console-games",
            link: "console-games",
          },
          { title: "Programs", id: "programs", link: "programs" },
          {
            title: "Computer games",
            id: "computer-games",
            link: "computer-games",
          },
        ],
      },
      {
        title: "Laptops  ›",
        id: "laptops--›",
        link: "laptops--›",
        subCategories: [],
      },
      {
        title: "Desktops  ›",
        id: "desktops--›",
        link: "desktops--›",
        subCategories: [
          {
            title: "System units",
            id: "system-units",
            link: "system-units",
          },
          { title: "Monoblocks", id: "monoblocks", link: "monoblocks" },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Photographic equipment  ›",
        id: "photographic-equipment--›",
        link: "photographic-equipment--›",
        subCategories: [
          {
            title: "Equipment and accessories",
            id: "equipment-and-accessories",
            link: "equipment-and-accessories",
          },
          { title: "Lenses", id: "lenses", link: "lenses" },
          {
            title: "Compact cameras",
            id: "compact-cameras",
            link: "compact-cameras",
          },
          {
            title: "Film cameras",
            id: "film-cameras",
            link: "film-cameras",
          },
          { title: "SLR Cameras", id: "slr-cameras", link: "slr-cameras" },
          {
            title: "Binoculars and telescopes",
            id: "binoculars-and-telescopes",
            link: "binoculars-and-telescopes",
          },
        ],
      },
      {
        title: "Tablets and e-readers  ›",
        id: "tablets-and-e-readers--›",
        link: "tablets-and-e-readers--›",
        subCategories: [
          { title: "Tablets", id: "tablets", link: "tablets" },
          { title: "Accessories", id: "accessories", link: "accessories" },
          { title: "E-books", id: "e-books", link: "e-books" },
        ],
      },
      {
        title: "Office equipment and consumables  ›",
        id: "office-equipment-and-consumables--›",
        link: "office-equipment-and-consumables--›",
        subCategories: [
          {
            title: "MFPs, copiers and scanners",
            id: "mfps,-copiers-and-scanners",
            link: "mfps,-copiers-and-scanners",
          },
          { title: "Printers", id: "printers", link: "printers" },
          { title: "Office", id: "office", link: "office" },
          {
            title: "UPS, surge protectors",
            id: "ups,-surge-protectors",
            link: "ups,-surge-protectors",
          },
          { title: "Telephony", id: "telephony", link: "telephony" },
          {
            title: "Paper shredders",
            id: "paper-shredders",
            link: "paper-shredders",
          },
          { title: "Consumables", id: "consumables", link: "consumables" },
          { title: "Services", id: "services", link: "services" },
          {
            title: "Avito Delivery",
            id: "avito-delivery",
            link: "avito-delivery",
          },
          {
            title: "Cart on Avito",
            id: "cart-on-avito",
            link: "cart-on-avito",
          },
          {
            title: "Redemption of smartphones",
            id: "redemption-of-smartphones",
            link: "redemption-of-smartphones",
          },
          { title: "Marke", id: "marke", link: "marke" },
        ],
      },
    ],
  },
  "hobby-and-outdoor": {
    id: "hobby-and-outdoor",
    title: "Hobby & outdoor",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_hobby.png`,
    link: "/hobby",
    subCategories: [
      {
        title: "Tickets and travel  ›",
        id: "tickets-and-travel--›",
        link: "tickets-and-travel--›",
        subCategories: [
          {
            title: "Cards, coupons",
            id: "cards,-coupons",
            link: "cards,-coupons",
          },
          { title: "Concerts", id: "concerts", link: "concerts" },
          { title: "Trips", id: "trips", link: "trips" },
          { title: "Sport", id: "sport", link: "sport" },
          {
            title: "Theater, opera, ballet",
            id: "theater,-opera,-ballet",
            link: "theater,-opera,-ballet",
          },
          {
            title: "Circus, cinema",
            id: "circus,-cinema",
            link: "circus,-cinema",
          },
          {
            title: "Show, musical",
            id: "show,-musical",
            link: "show,-musical",
          },
        ],
      },
      {
        title: "Bicycles  ›",
        id: "bicycles--›",
        link: "bicycles--›",
        subCategories: [
          { title: "Mountain", id: "mountain", link: "mountain" },
          { title: "Road", id: "road", link: "road" },
          { title: "BMX", id: "bmx", link: "bmx" },
          { title: "Children's", id: "children's", link: "children's" },
          {
            title: "Spare parts and accessories",
            id: "spare-parts-and-accessories",
            link: "spare-parts-and-accessories",
          },
          {
            title: "Books and magazines  >",
            id: "books-and-magazines-",
            link: "books-and-magazines-",
          },
          {
            title: "Magazines, newspapers, brochures",
            id: "magazines,-newspapers,-brochures",
            link: "magazines,-newspapers,-brochures",
          },
          { title: "Books", id: "books", link: "books" },
          {
            title: "Educational literature",
            id: "educational-literature",
            link: "educational-literature",
          },
        ],
      },
      {
        title: "Collecting  ›",
        id: "collecting--›",
        link: "collecting--›",
        subCategories: [
          { title: "Banknotes", id: "banknotes", link: "banknotes" },
          { title: "Tickets", id: "tickets", link: "tickets" },
          {
            title: "Celebrity items, autographs",
            id: "celebrity-items,-autographs",
            link: "celebrity-items,-autographs",
          },
          {
            title: "Military items",
            id: "military-items",
            link: "military-items",
          },
          {
            title: "Gramophone records",
            id: "gramophone-records",
            link: "gramophone-records",
          },
          {
            title: "Documentation",
            id: "documentation",
            link: "documentation",
          },
          {
            title: "Tokens, medals, badges",
            id: "tokens,-medals,-badges",
            link: "tokens,-medals,-badges",
          },
          { title: "Games", id: "games", link: "games" },
          { title: "Calendars", id: "calendars", link: "calendars" },
          { title: "Paintings", id: "paintings", link: "paintings" },
          {
            title: "Kinder Surprise",
            id: "kinder-surprise",
            link: "kinder-surprise",
          },
          {
            title: "Envelopes and postcards",
            id: "envelopes-and-postcards",
            link: "envelopes-and-postcards",
          },
          { title: "Stamps", id: "stamps", link: "stamps" },
          { title: "Models", id: "models", link: "models" },
          { title: "Coins", id: "coins", link: "coins" },
          { title: "Postcards", id: "postcards", link: "postcards" },
          {
            title: "Ashtrays, lighters",
            id: "ashtrays,-lighters",
            link: "ashtrays,-lighters",
          },
          {
            title: "Plastic cards",
            id: "plastic-cards",
            link: "plastic-cards",
          },
          {
            title: "Sports cards",
            id: "sports-cards",
            link: "sports-cards",
          },
          {
            title: "Photos, letters",
            id: "photos,-letters",
            link: "photos,-letters",
          },
          {
            title: "Labels, bottles, caps",
            id: "labels,-bottles,-caps",
            link: "labels,-bottles,-caps",
          },
          { title: "Other", id: "other", link: "other" },
          {
            title: "Musical instruments  >",
            id: "musical-instruments-",
            link: "musical-instruments-",
          },
          {
            title: "Accordions, harmonicas, button accordions",
            id: "accordions,-harmonicas,-button-accordions",
            link: "accordions,-harmonicas,-button-accordions",
          },
          {
            title: "Guitars and other strings",
            id: "guitars-and-other-strings",
            link: "guitars-and-other-strings",
          },
          { title: "Brass", id: "brass", link: "brass" },
          {
            title: "Piano and other keyboards",
            id: "piano-and-other-keyboards",
            link: "piano-and-other-keyboards",
          },
          {
            title: "Violins and other bowed instruments",
            id: "violins-and-other-bowed-instruments",
            link: "violins-and-other-bowed-instruments",
          },
          { title: "Drums", id: "drums", link: "drums" },
          {
            title: "For studio and concerts",
            id: "for-studio-and-concerts",
            link: "for-studio-and-concerts",
          },
          { title: "Accessories", id: "accessories", link: "accessories" },
          {
            title: "Hunting and fishing  >",
            id: "hunting-and-fishing-",
            link: "hunting-and-fishing-",
          },
        ],
      },
      {
        title: "Sports and recreation  ›",
        id: "sports-and-recreation--›",
        link: "sports-and-recreation--›",
        subCategories: [
          {
            title: "Billiards and bowling",
            id: "billiards-and-bowling",
            link: "billiards-and-bowling",
          },
          {
            title: "Diving and water sports",
            id: "diving-and-water-sports",
            link: "diving-and-water-sports",
          },
          {
            title: "Martial arts",
            id: "martial-arts",
            link: "martial-arts",
          },
          {
            title: "Winter sports",
            id: "winter-sports",
            link: "winter-sports",
          },
          { title: "Ball games", id: "ball-games", link: "ball-games" },
          { title: "Board games", id: "board-games", link: "board-games" },
          {
            title: "Paintball and airsoft",
            id: "paintball-and-airsoft",
            link: "paintball-and-airsoft",
          },
          {
            title: "Rollerblading and skateboarding",
            id: "rollerblading-and-skateboarding",
            link: "rollerblading-and-skateboarding",
          },
          {
            title: "Tennis, badminton, ping pong",
            id: "tennis,-badminton,-ping-pong",
            link: "tennis,-badminton,-ping-pong",
          },
          { title: "Tourism", id: "tourism", link: "tourism" },
          {
            title: "Fitness and exercise equipment",
            id: "fitness-and-exercise-equipment",
            link: "fitness-and-exercise-equipment",
          },
          {
            title: "Sports nutrition",
            id: "sports-nutrition",
            link: "sports-nutrition",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
    ],
  },
  animals: {
    id: "animals",
    title: "Animals",
    link: "/animals",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_pets.png`,
    subCategories: [
      {
        title: "Dogs  ›",
        id: "dogs--›",
        link: "dogs--›",
        subCategories: [],
      },
      {
        title: "Cats  ›",
        id: "cats--›",
        link: "cats--›",
        subCategories: [],
      },
      {
        title: "Birds  ›",
        id: "birds--›",
        link: "birds--›",
        subCategories: [],
      },
      {
        title: "Aquarium  ›",
        id: "aquarium--›",
        link: "aquarium--›",
        subCategories: [],
      },
      {
        title: "Other animals  ›",
        id: "other-animals--›",
        link: "other-animals--›",
        subCategories: [
          { title: "Amphibians", id: "amphibians", link: "amphibians" },
          { title: "Rodents", id: "rodents", link: "rodents" },
          { title: "Rabbits", id: "rabbits", link: "rabbits" },
          { title: "Horses", id: "horses", link: "horses" },
          { title: "Reptiles", id: "reptiles", link: "reptiles" },
          { title: "3 more", id: "3-more", link: "3-more" },
        ],
      },
      {
        title: "Goods for pets  ›",
        id: "goods-for-pets--›",
        link: "goods-for-pets--›",
        subCategories: [],
      },
    ],
  },
  "business-and-equipment": {
    id: "business-and-equipment",
    title: "Business and equipment",
    image: `${process.env.NEXT_PUBLIC_HOSTNAME}/cat_business.png`,
    link: "/business-and-equipment",
    subCategories: [
      {
        title: "Ready business  ›",
        id: "ready-business--›",
        link: "ready-business--›",
        subCategories: [
          {
            title: "Online stores and IT",
            id: "online-stores-and-it",
            link: "online-stores-and-it",
          },
          { title: "Catering", id: "catering", link: "catering" },
          { title: "Production", id: "production", link: "production" },
          {
            title: "Entertainment",
            id: "entertainment",
            link: "entertainment",
          },
          { title: "Agriculture", id: "agriculture", link: "agriculture" },
          {
            title: "Construction",
            id: "construction",
            link: "construction",
          },
          {
            title: "Services sector",
            id: "services-sector",
            link: "services-sector",
          },
          {
            title: "Stores and pick-up points",
            id: "stores-and-pick-up-points",
            link: "stores-and-pick-up-points",
          },
          {
            title: "Auto business",
            id: "auto-business",
            link: "auto-business",
          },
          {
            title: "Beauty and care",
            id: "beauty-and-care",
            link: "beauty-and-care",
          },
          {
            title: "Dentistry and medicine",
            id: "dentistry-and-medicine",
            link: "dentistry-and-medicine",
          },
          { title: "Tourism", id: "tourism", link: "tourism" },
          { title: "Other", id: "other", link: "other" },
        ],
      },
      {
        title: "Business equipment  ›",
        id: "business-equipment--›",
        link: "business-equipment--›",
        subCategories: [
          { title: "Industrial", id: "industrial", link: "industrial" },
          {
            title: "Logistics and warehouse",
            id: "logistics-and-warehouse",
            link: "logistics-and-warehouse",
          },
          { title: "Trade", id: "trade", link: "trade" },
          {
            title: "For a restaurant",
            id: "for-a-restaurant",
            link: "for-a-restaurant",
          },
          {
            title: "For a beauty salon",
            id: "for-a-beauty-salon",
            link: "for-a-beauty-salon",
          },
          {
            title: "For the auto business",
            id: "for-the-auto-business",
            link: "for-the-auto-business",
          },
          { title: "Mining", id: "mining", link: "mining" },
          { title: "Laboratory", id: "laboratory", link: "laboratory" },
          { title: "Medical", id: "medical", link: "medical" },
          {
            title: "Telecommunications",
            id: "telecommunications",
            link: "telecommunications",
          },
          { title: "Other", id: "other", link: "other" },
        ],
      },
    ],
  },
};

export default ALL_CATEGORIES;
