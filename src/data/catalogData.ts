export type VehicleType = 'car' | 'bike';

export type FinderCategory =
  | 'All'
  | 'Engine Oil'
  | 'Air/Oil/Fuel Filters'
  | 'Brake Pads & Discs'
  | 'Clutch Plates'
  | 'Spark Plugs'
  | 'Belts & Bearings'
  | 'Suspension & Lights';

export type CatalogCategory =
  | 'All'
  | 'Engine Oils'
  | 'Filters (Air/Oil/Fuel)'
  | 'Brake System'
  | 'Bike Essentials'
  | 'Car Accessories & Bearings';

export type ArtworkType =
  | 'oil-gold'
  | 'oil-red'
  | 'oil-silver'
  | 'oil-amber'
  | 'oil-blue'
  | 'air-filter'
  | 'oil-filter'
  | 'cabin-filter'
  | 'brake-pads'
  | 'disc-rotor'
  | 'spark-plug'
  | 'chain-kit'
  | 'clutch-kit'
  | 'timing-belt'
  | 'wheel-bearing'
  | 'shock-absorber';

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  sku: string;
  packSpec: string;
  vehicleTypes: VehicleType[];
  compatibleBrands: string[]; // 'All Cars' | 'All Bikes' | brand names
  compatibleModelsLabel: string;
  finderCategory: Exclude<FinderCategory, 'All'>;
  catalogCategory: Exclude<CatalogCategory, 'All'>;
  authenticityTag: string;
  stockNote: string;
  shortDesc: string;
  artwork: ArtworkType;
  highlightMetric: string;
}

export interface VehicleBrandOption {
  brand: string;
  models: string[];
}

export const STORE_INFO = {
  brandName: 'KRISHNA MOTORS',
  establishedYear: 2007,
  yearsLegacy: '19+',
  tagline: 'Drive Better... Go Further...',
  subHeadline: 'Deals in All Kinds of Genuine Automobile Spare Parts & Lubricants',
  website: 'www.krishnamotorspatiala.com',
  primaryPhoneDisplay: '+91 78140 90007',
  primaryPhoneRaw: '7814090007',
  whatsappNumber: '917814090007',
  secondaryPhoneDisplay: '+91 93190 90007',
  secondaryPhoneRaw: '9319090007',
  address: 'Opposite Amar Bagh, Gali No. 5, Near Jashan Palace, Bhadson Road, Patiala - 147001, Punjab',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Krishna+Motors+Opposite+Amar+Bagh+Gali+No+5+Near+Jashan+Palace+Bhadson+Road+Patiala+147001+Punjab',
  logoPath: '/assets/aistudio/IMG-20261122-WA0007_f0b10840.jpg',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CAR_BRANDS: VehicleBrandOption[] = [
  { brand: 'Maruti Suzuki', models: ['Swift', 'Alto', 'Baleno', 'Brezza', 'WagonR', 'Dzire'] },
  { brand: 'Hyundai', models: ['i20', 'Creta', 'Venue', 'Grand i10', 'Verna'] },
  { brand: 'Tata', models: ['Nexon', 'Punch', 'Altroz', 'Tiago', 'Harrier'] },
  { brand: 'Mahindra', models: ['Scorpio', 'Thar', 'Bolero', 'XUV700', 'XUV 3XO'] },
  { brand: 'Honda', models: ['City', 'Amaze', 'Elevate', 'Jazz'] },
  { brand: 'Toyota', models: ['Innova Crysta', 'Fortuner', 'Glanza', 'Hyryder'] },
];

export const BIKE_BRANDS: VehicleBrandOption[] = [
  { brand: 'Royal Enfield', models: ['Hunter 350', 'Classic 350', 'Bullet 350', 'Meteor 350', 'Himalayan'] },
  { brand: 'Hero', models: ['Splendor Plus', 'HF Deluxe', 'Passion Pro', 'Xtreme 125R'] },
  { brand: 'Honda', models: ['Activa 6G', 'CB Shine', 'SP 125', 'Unicorn'] },
  { brand: 'Bajaj', models: ['Pulsar 150', 'Pulsar NS200', 'Platina', 'Avenger'] },
  { brand: 'TVS', models: ['Apache RTR 160', 'Jupiter', 'NTorq 125', 'Raider'] },
  { brand: 'Yamaha', models: ['FZ-S V4', 'R15 V4', 'MT-15', 'RayZR 125'] },
];

export const FINDER_CATEGORIES: FinderCategory[] = [
  'All',
  'Engine Oil',
  'Air/Oil/Fuel Filters',
  'Brake Pads & Discs',
  'Clutch Plates',
  'Spark Plugs',
  'Belts & Bearings',
  'Suspension & Lights',
];

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  'All',
  'Engine Oils',
  'Filters (Air/Oil/Fuel)',
  'Brake System',
  'Bike Essentials',
  'Car Accessories & Bearings',
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'km-oil-castrol-5w30',
    name: 'Castrol EDGE 5W-30 Fully Synthetic Engine Oil',
    brand: 'Castrol',
    sku: 'KM-OIL-530',
    packSpec: '3.5L Can · API SP / ACEA C3',
    vehicleTypes: ['car'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Honda', 'Toyota'],
    compatibleModelsLabel: 'Swift, Baleno, Creta, Nexon, City & Petrol/CNG Cars',
    finderCategory: 'Engine Oil',
    catalogCategory: 'Engine Oils',
    authenticityTag: 'OEM Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Fluid Titanium technology reduces metal-to-metal friction under extreme Punjab summer heat.',
    artwork: 'oil-gold',
    highlightMetric: '5W-30 Full Syn',
  },
  {
    id: 'km-oil-motul-7100',
    name: 'Motul 7100 4T 10W-40 Ester Synthetic Bike Oil',
    brand: 'Motul',
    sku: 'KM-OIL-7100',
    packSpec: '1L Bottle · JASO MA2 / API SN',
    vehicleTypes: ['bike'],
    compatibleBrands: ['Bajaj', 'Yamaha', 'TVS', 'Honda', 'Hero'],
    compatibleModelsLabel: 'Pulsar, Apache RTR, Yamaha FZ/R15, Honda Shine',
    finderCategory: 'Engine Oil',
    catalogCategory: 'Engine Oils',
    authenticityTag: '100% Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: '100% synthetic Ester formula delivering smoother gearshifts and high-RPM thermal stability.',
    artwork: 'oil-red',
    highlightMetric: '10W-40 Ester',
  },
  {
    id: 'km-oil-shell-5w40',
    name: 'Shell Helix HX8 5W-40 Turbo Diesel & Petrol Oil',
    brand: 'Shell',
    sku: 'KM-OIL-540',
    packSpec: '4L Can · API SN Plus / ACEA A3/B4',
    vehicleTypes: ['car'],
    compatibleBrands: ['Mahindra', 'Tata', 'Toyota', 'Hyundai', 'Maruti Suzuki'],
    compatibleModelsLabel: 'Scorpio, Thar, Bolero, Innova, Creta & Diesel SUVs',
    finderCategory: 'Engine Oil',
    catalogCategory: 'Engine Oils',
    authenticityTag: 'OEM Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Active Cleansing Technology keeps turbocharger bearings and diesel injectors sludge-free.',
    artwork: 'oil-silver',
    highlightMetric: '5W-40 Diesel/SUV',
  },
  {
    id: 'km-oil-motul-15w50',
    name: 'Motul 5100 4T 15W-50 Royal Enfield Touring Oil',
    brand: 'Motul',
    sku: 'KM-OIL-1550',
    packSpec: '2.5L Pack · JASO MA2 Technosynthese',
    vehicleTypes: ['bike'],
    compatibleBrands: ['Royal Enfield', 'Bajaj'],
    compatibleModelsLabel: 'Hunter 350, Classic 350, Bullet 350, Meteor & Himalayan',
    finderCategory: 'Engine Oil',
    catalogCategory: 'Engine Oils',
    authenticityTag: 'RE Recommended',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Thick oil-film protection tailored for air-cooled long-stroke Royal Enfield engines.',
    artwork: 'oil-amber',
    highlightMetric: '15W-50 RE Grade',
  },
  {
    id: 'km-oil-mobil-scooter',
    name: 'Mobil Super Moto Scooter 10W-30 Gearless Oil',
    brand: 'Mobil',
    sku: 'KM-OIL-1030S',
    packSpec: '800ml Bottle · JASO MB / API SL',
    vehicleTypes: ['bike'],
    compatibleBrands: ['Honda', 'TVS', 'Hero', 'Yamaha'],
    compatibleModelsLabel: 'Activa 6G, Jupiter, NTorq 125, RayZR & Scooters',
    finderCategory: 'Engine Oil',
    catalogCategory: 'Engine Oils',
    authenticityTag: '100% Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Low-friction JASO MB formulation engineered for stop-and-go city scooter traffic.',
    artwork: 'oil-blue',
    highlightMetric: '10W-30 JASO MB',
  },
  {
    id: 'km-flt-mgp-air',
    name: 'Maruti Suzuki Genuine Air Filter Element (MGP)',
    brand: 'Maruti Genuine',
    sku: 'KM-FLT-MGP01',
    packSpec: 'OEM Sealed Box · High-Flow Cellulose',
    vehicleTypes: ['car'],
    compatibleBrands: ['Maruti Suzuki'],
    compatibleModelsLabel: 'Swift, Alto, Baleno, Brezza, WagonR & Dzire',
    finderCategory: 'Air/Oil/Fuel Filters',
    catalogCategory: 'Filters (Air/Oil/Fuel)',
    authenticityTag: 'MGP Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Micro-pleated dust trap engineered for dusty North Indian highways and improved mileage.',
    artwork: 'air-filter',
    highlightMetric: '99.4% Dust Trap',
  },
  {
    id: 'km-flt-bosch-combo',
    name: 'Bosch Spin-On Engine Oil & Fuel Filter Kit',
    brand: 'Bosch',
    sku: 'KM-FLT-BSH02',
    packSpec: 'Anti-Drainback Valve · Dual Pack',
    vehicleTypes: ['car'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda', 'Toyota'],
    compatibleModelsLabel: 'Swift, i20, Nexon, Scorpio, City & Innova',
    finderCategory: 'Air/Oil/Fuel Filters',
    catalogCategory: 'Filters (Air/Oil/Fuel)',
    authenticityTag: 'OEM Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Precision steel canister oil filter with silicone valve for instant cold-start oil pressure.',
    artwork: 'oil-filter',
    highlightMetric: 'Bosch OEM Spec',
  },
  {
    id: 'km-flt-mobis-cabin',
    name: 'Hyundai Mobis Genuine Air & AC Cabin Filter Set',
    brand: 'Hyundai Mobis',
    sku: 'KM-FLT-MOB03',
    packSpec: 'Activated Carbon · Exact OEM Fit',
    vehicleTypes: ['car'],
    compatibleBrands: ['Hyundai', 'Tata', 'Honda'],
    compatibleModelsLabel: 'Creta, Venue, i20, Verna & Grand i10',
    finderCategory: 'Air/Oil/Fuel Filters',
    catalogCategory: 'Filters (Air/Oil/Fuel)',
    authenticityTag: 'Mobis Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Dual-stage engine intake and cabin AC filtration keeping airflow crisp and odor-free.',
    artwork: 'cabin-filter',
    highlightMetric: 'Carbon AC Filter',
  },
  {
    id: 'km-brk-bosch-pads',
    name: 'Bosch Low-Dust Ceramic Front Brake Pad Set',
    brand: 'Bosch',
    sku: 'KM-BRK-CER01',
    packSpec: 'Set of 4 Pads · Asbestos-Free',
    vehicleTypes: ['car', 'bike'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda', 'Toyota', 'Royal Enfield', 'Bajaj'],
    compatibleModelsLabel: 'Swift, Baleno, Creta, Nexon, Scorpio & Disc Bikes',
    finderCategory: 'Brake Pads & Discs',
    catalogCategory: 'Brake System',
    authenticityTag: 'OEM Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Silent braking performance with zero rotor scoring and shorter wet-weather stopping distance.',
    artwork: 'brake-pads',
    highlightMetric: 'Ceramic Low-Dust',
  },
  {
    id: 'km-brk-disc-rotor',
    name: 'Precision Ventilated Front Disc Brake Rotor',
    brand: 'Bosch',
    sku: 'KM-BRK-ROT02',
    packSpec: 'High-Carbon Cast Iron · Anti-Rust Coat',
    vehicleTypes: ['car', 'bike'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Toyota', 'Royal Enfield', 'Yamaha', 'TVS'],
    compatibleModelsLabel: 'Brezza, Creta, Scorpio, Innova, Classic 350 & Apache',
    finderCategory: 'Brake Pads & Discs',
    catalogCategory: 'Brake System',
    authenticityTag: 'OEM Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Dynamically balanced rotor fins prevent brake fade and pedal vibration during highway braking.',
    artwork: 'disc-rotor',
    highlightMetric: 'Heat-Balanced',
  },
  {
    id: 'km-spk-ngk-iridium',
    name: 'NGK Laser Iridium High-Ignition Spark Plug',
    brand: 'NGK',
    sku: 'KM-SPK-IR01',
    packSpec: '0.6mm Iridium Tip · Single / Set of 4',
    vehicleTypes: ['car', 'bike'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Honda', 'Royal Enfield', 'Hero', 'Bajaj', 'TVS', 'Yamaha'],
    compatibleModelsLabel: 'All Petrol Cars, Royal Enfield, Splendor, Pulsar & Activa',
    finderCategory: 'Spark Plugs',
    catalogCategory: 'Bike Essentials',
    authenticityTag: 'NGK Original',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Crisp throttle response, faster winter cold-starts, and improved fuel combustion efficiency.',
    artwork: 'spark-plug',
    highlightMetric: 'Iridium Tip',
  },
  {
    id: 'km-bik-chain-kit',
    name: 'Heavy-Duty Brass Drive Chain & Sprocket Kit',
    brand: 'Royal Enfield / Hero Genuine',
    sku: 'KM-BIK-CHN01',
    packSpec: 'O-Ring Sealed Chain + Front & Rear Sprocket',
    vehicleTypes: ['bike'],
    compatibleBrands: ['Royal Enfield', 'Hero', 'Honda', 'Bajaj', 'TVS', 'Yamaha'],
    compatibleModelsLabel: 'Classic 350, Hunter 350, Splendor, Pulsar, Apache & FZ',
    finderCategory: 'Belts & Bearings',
    catalogCategory: 'Bike Essentials',
    authenticityTag: 'OEM Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Hardened alloy sprockets with brass-coated links resist rust and stretch up to 25,000 km.',
    artwork: 'chain-kit',
    highlightMetric: 'O-Ring Brass Kit',
  },
  {
    id: 'km-clt-valeo-kit',
    name: 'Valeo OEM Clutch Plate & Pressure Plate Kit',
    brand: 'Valeo',
    sku: 'KM-CLT-VAL01',
    packSpec: 'Clutch Disc + Cover + Release Bearing',
    vehicleTypes: ['car', 'bike'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda', 'Royal Enfield', 'Hero', 'Bajaj'],
    compatibleModelsLabel: 'Swift, Alto, i20, Bolero, Nexon, Splendor & Pulsar',
    finderCategory: 'Clutch Plates',
    catalogCategory: 'Bike Essentials',
    authenticityTag: 'Valeo Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Feather-light pedal/lever feel with high-torque friction facing built for heavy city traffic.',
    artwork: 'clutch-kit',
    highlightMetric: 'Complete 3-Pc Kit',
  },
  {
    id: 'km-blt-timing-kit',
    name: 'OEM Timing Belt, Fan Belt & Tensioner Kit',
    brand: 'Bosch',
    sku: 'KM-BLT-TMG01',
    packSpec: 'HNBR Reinforced Rubber · Tensioner Pulley',
    vehicleTypes: ['car'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Toyota', 'Honda'],
    compatibleModelsLabel: 'Swift, Brezza, Creta, Bolero, Scorpio & Innova',
    finderCategory: 'Belts & Bearings',
    catalogCategory: 'Car Accessories & Bearings',
    authenticityTag: 'OEM Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Heat-resistant fiberglass tensile cords eliminate belt squeal and protect engine valve timing.',
    artwork: 'timing-belt',
    highlightMetric: '100,000 km Rated',
  },
  {
    id: 'km-brg-wheel-hub',
    name: 'High-Speed Precision Wheel Hub Bearing Set',
    brand: 'Purolator / OEM',
    sku: 'KM-BRG-WHL01',
    packSpec: 'Double-Sealed Grease-Packed Steel',
    vehicleTypes: ['car', 'bike'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Toyota', 'Honda', 'Royal Enfield', 'Hero', 'TVS'],
    compatibleModelsLabel: 'All Indian Cars, SUVs, Motorcycles & Scooters',
    finderCategory: 'Belts & Bearings',
    catalogCategory: 'Car Accessories & Bearings',
    authenticityTag: '100% Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Whisper-quiet rolling resistance with waterproof dual-lip seals built for monsoon roads.',
    artwork: 'wheel-bearing',
    highlightMetric: 'Dual-Lip Sealed',
  },
  {
    id: 'km-sus-monroe-shock',
    name: 'Monroe OESpectrum Gas Shock Absorber & LED Bulb Kit',
    brand: 'Monroe',
    sku: 'KM-SUS-MNR01',
    packSpec: 'Twin-Tube Gas Charged · Direct Bolt-On',
    vehicleTypes: ['car', 'bike'],
    compatibleBrands: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda', 'Toyota', 'Royal Enfield', 'Hero', 'Bajaj', 'TVS'],
    compatibleModelsLabel: 'Swift, Brezza, Creta, Scorpio, Nexon & Commuter Bikes',
    finderCategory: 'Suspension & Lights',
    catalogCategory: 'Car Accessories & Bearings',
    authenticityTag: 'Monroe Genuine',
    stockNote: 'In Stock - Patiala',
    shortDesc: 'Restores factory ride comfort over rough roads and speed-breakers with zero body roll.',
    artwork: 'shock-absorber',
    highlightMetric: 'Twin-Tube Gas',
  },
];

export type OilVehicleType = 'car-petrol' | 'car-diesel' | 'bike' | 'scooter';
export type DrivingCondition = 'city' | 'highway' | 'heavy';

export interface OilRecommendation {
  grade: string;
  formulaType: string;
  specStandard: string;
  drainInterval: string;
  recommendedBrands: string[];
  summary: string;
  benefits: string[];
  matchedProductId: string;
  artwork: ArtworkType;
}

export const OIL_VEHICLE_OPTIONS: { id: OilVehicleType; label: string; sub: string }[] = [
  { id: 'car-petrol', label: 'Car (Petrol / CNG)', sub: 'Hatchback, Sedan & SUV' },
  { id: 'car-diesel', label: 'Car (Diesel / Turbo)', sub: 'CRDi, DDiS & SUVs' },
  { id: 'bike', label: 'Motorcycle', sub: '100cc – 350cc+ Geared' },
  { id: 'scooter', label: 'Scooter', sub: 'Activa, Jupiter, NTorq' },
];

export const DRIVING_CONDITION_OPTIONS: { id: DrivingCondition; label: string; sub: string }[] = [
  { id: 'city', label: 'City Daily', sub: 'Stop-and-go Patiala traffic' },
  { id: 'highway', label: 'Highway Touring', sub: 'High-speed long runs' },
  { id: 'heavy', label: 'Heavy Duty', sub: 'High load, towing & summer heat' },
];

export const OIL_MATRIX: Record<OilVehicleType, Record<DrivingCondition, OilRecommendation>> = {
  'car-petrol': {
    city: {
      grade: '5W-30 Fully Synthetic',
      formulaType: 'Low-Friction Synthetic',
      specStandard: 'API SP / ILSAC GF-6A',
      drainInterval: '10,000 km or 12 Months',
      recommendedBrands: ['Castrol EDGE', 'Shell Helix Ultra', 'Mobil 1'],
      summary: 'Ideal for daily short trips and traffic signals where rapid cold-start circulation prevents 75% of engine wear.',
      benefits: [
        'Instant oil flow during winter mornings and frequent start-stops',
        'Maximizes fuel mileage in Petrol & CNG cars (Swift, Baleno, i20)',
        'Prevents low-temperature sludge formation in city traffic',
      ],
      matchedProductId: 'km-oil-castrol-5w30',
      artwork: 'oil-gold',
    },
    highway: {
      grade: '5W-30 Fully Synthetic (Titanium)',
      formulaType: 'High-Shear Full Synthetic',
      specStandard: 'API SP / ACEA A5/B5',
      drainInterval: '10,000 km or 12 Months',
      recommendedBrands: ['Castrol EDGE', 'Motul 8100', 'Shell Helix HX8'],
      summary: 'Maintains rock-solid viscosity film during sustained 100+ km/h highway cruising on NH-7 & expressways.',
      benefits: [
        'Resists thermal breakdown at high continuous RPMs',
        'Keeps VVT timing chains and pistons whisper-quiet',
        'Lower oil evaporation loss across long intercity trips',
      ],
      matchedProductId: 'km-oil-castrol-5w30',
      artwork: 'oil-gold',
    },
    heavy: {
      grade: '5W-40 Fully Synthetic',
      formulaType: 'High-Temp Protection Synthetic',
      specStandard: 'API SN Plus / ACEA A3/B4',
      drainInterval: '10,000 km or 12 Months',
      recommendedBrands: ['Shell Helix HX8', 'Castrol Magnatec', 'Mobil Super'],
      summary: 'Extra high-temperature viscosity cushion for peak 45°C+ Punjab summers, AC-on idling, and full passenger loads.',
      benefits: [
        'Thicker protective film under heavy load and AC operation',
        'Ideal for older high-mileage petrol engines & turbo-petrols',
        'Reduces engine noise and oil consumption in peak summer',
      ],
      matchedProductId: 'km-oil-shell-5w40',
      artwork: 'oil-silver',
    },
  },
  'car-diesel': {
    city: {
      grade: '5W-30 / 5W-40 Diesel Synthetic',
      formulaType: 'DPF & Turbo Safe Synthetic',
      specStandard: 'ACEA C3 / API CJ-4',
      drainInterval: '10,000 km or 12 Months',
      recommendedBrands: ['Shell Helix HX8', 'Castrol GTX Diesel', 'Mobil Delvac'],
      summary: 'Active soot-dispersing synthetic engineered to protect turbochargers and DPF systems in daily diesel driving.',
      benefits: [
        'Prevents diesel soot thickening and EGR valve deposits',
        'Protects high-speed turbo bearings during frequent restarts',
        'Cleaner combustion for BS4 and BS6 diesel cars',
      ],
      matchedProductId: 'km-oil-shell-5w40',
      artwork: 'oil-silver',
    },
    highway: {
      grade: '5W-40 Fully Synthetic Turbo Diesel',
      formulaType: 'Full Synthetic High-Torque',
      specStandard: 'ACEA A3/B4 · API SN/CF',
      drainInterval: '10,000 – 12,000 km',
      recommendedBrands: ['Shell Helix Ultra', 'Castrol EDGE', 'Motul X-cess'],
      summary: 'Engineered for high-torque SUVs (Scorpio, Innova, Fortuner, Creta Diesel) doing long highway stretches.',
      benefits: [
        'Superior turbocharger thermal stability at highway speeds',
        'Extended drain protection without pressure drop',
        'Keeps diesel engines cool and refined over 500+ km drives',
      ],
      matchedProductId: 'km-oil-shell-5w40',
      artwork: 'oil-silver',
    },
    heavy: {
      grade: '15W-40 Heavy Duty Diesel Mineral/Semi',
      formulaType: 'High-TBN Heavy Load Formula',
      specStandard: 'API CI-4 Plus / CH-4',
      drainInterval: '7,500 – 10,000 km',
      recommendedBrands: ['Mobil Delvac MX', 'Castrol CRB Turbomax', 'Shell Rimula'],
      summary: 'Built for Bolero, commercial utility SUVs, heavy rural roads, and continuous towing under scorching heat.',
      benefits: [
        'Neutralizes combustion acids and heavy diesel soot',
        'High shear stability prevents wear under maximum load',
        'Proven reliability for high-mileage commercial & farm vehicles',
      ],
      matchedProductId: 'km-oil-shell-5w40',
      artwork: 'oil-silver',
    },
  },
  bike: {
    city: {
      grade: '10W-30 Semi-Synthetic (JASO MA2)',
      formulaType: 'Wet-Clutch Commuter Semi-Syn',
      specStandard: 'API SL / JASO MA2',
      drainInterval: '3,000 – 3,500 km',
      recommendedBrands: ['Castrol Power1', 'Motul 3100 / 5100', 'Shell Advance'],
      summary: 'Crisp clutch engagement and peak mileage for Hero Splendor, Honda Shine, HF Deluxe & 100–125cc city commuters.',
      benefits: [
        'Prevents wet-clutch slippage in frequent gear changes',
        'Boosts pickup and fuel economy in Patiala city traffic',
        'Rapid heat dissipation for air-cooled commuter engines',
      ],
      matchedProductId: 'km-oil-motul-7100',
      artwork: 'oil-red',
    },
    highway: {
      grade: '10W-40 / 15W-50 Royal Enfield & Touring Grade',
      formulaType: 'Ester / Technosynthese Synthetic',
      specStandard: 'API SN / JASO MA2',
      drainInterval: '5,000 – 6,000 km',
      recommendedBrands: ['Motul 5100 15W-50', 'Motul 7100 10W-40', 'Castrol Power1 Ultimate'],
      summary: 'Essential for Royal Enfield (Classic, Hunter, Bullet), Pulsar, Apache & Yamaha highway riders.',
      benefits: [
        '15W-50 cushions Royal Enfield thump and cuts tappet noise',
        'Zero gear-box stiffness even after 200 km non-stop riding',
        'Ester molecules cling to cylinder walls for wear-free touring',
      ],
      matchedProductId: 'km-oil-motul-15w50',
      artwork: 'oil-amber',
    },
    heavy: {
      grade: '20W-40 / 20W-50 Heavy Duty 4T Mineral',
      formulaType: 'High-Viscosity Thermal Shield',
      specStandard: 'API SM / JASO MA2',
      drainInterval: '2,500 – 3,000 km',
      recommendedBrands: ['Castrol Activ 20W-40', 'Motul 3000 20W-40', 'Shell Advance AX5'],
      summary: 'Thick thermal cushion designed for heavy delivery bikes, high-mileage engines, and intense summer riding.',
      benefits: [
        'Prevents oil thinning during 45°C+ afternoon rides',
        'Actibond molecules protect engine parts even when switched off',
        'Cost-effective heavy-load protection for daily workhorse bikes',
      ],
      matchedProductId: 'km-oil-motul-15w50',
      artwork: 'oil-amber',
    },
  },
  scooter: {
    city: {
      grade: '10W-30 Scooter Oil (JASO MB)',
      formulaType: 'Low-Friction Gearless Formula',
      specStandard: 'API SL / JASO MB',
      drainInterval: '3,000 km or 4–6 Months',
      recommendedBrands: ['Mobil Super Moto', 'Castrol Activ Scooter', 'Motul Scooter LE'],
      summary: 'Specially formulated without wet-clutch friction modifiers so Activa, Jupiter & Access engines run cooler and smoother.',
      benefits: [
        'Noticeably quieter engine and smoother pickup from 0–50 km/h',
        'JASO MB friction reducers increase daily city fuel mileage',
        'Protects enclosed CVT scooter engines from heat buildup',
      ],
      matchedProductId: 'km-oil-mobil-scooter',
      artwork: 'oil-blue',
    },
    highway: {
      grade: '10W-30 Fully Synthetic Scooter Power',
      formulaType: 'Synthetic Gearless Formula',
      specStandard: 'API SN / JASO MB',
      drainInterval: '4,000 km or 6 Months',
      recommendedBrands: ['Motul Scooter Power LE', 'Castrol Power1 Scooter', 'Shell Advance Ultra'],
      summary: 'Ideal for 125cc+ scooters (NTorq, Burgman, Aerox, Activa 125) doing longer outer-ring road commutes.',
      benefits: [
        'Prevents high-RPM power drop on open highway stretches',
        'Superior oxidation control keeps oil golden longer',
        'Reduces under-seat heat on longer daily commutes',
      ],
      matchedProductId: 'km-oil-mobil-scooter',
      artwork: 'oil-blue',
    },
    heavy: {
      grade: '10W-30 / 10W-40 Heavy-Load Scooter Oil',
      formulaType: 'Semi-Synthetic High-Film',
      specStandard: 'API SL / JASO MB',
      drainInterval: '2,500 – 3,000 km',
      recommendedBrands: ['Mobil Super Moto', 'Castrol Activ Scooter', 'Shell Advance AX7'],
      summary: 'Built for double-riding, delivery scooters, and high-mileage gearless engines under daily heavy load.',
      benefits: [
        'Extra piston cleanliness against carbon deposit buildup',
        'Maintains compression in older 5+ year old scooters',
        'Dependable protection during peak summer stop-start rides',
      ],
      matchedProductId: 'km-oil-mobil-scooter',
      artwork: 'oil-blue',
    },
  },
};

export const TRUSTED_BRANDS: string[] = [
  'Castrol',
  'Motul',
  'Shell',
  'Mobil',
  'Bosch',
  'Monroe',
  'Valeo',
  'Exide',
  'NGK',
  'Purolator',
  'Maruti Genuine',
  'Hyundai Mobis',
  'Royal Enfield',
  'Hero Genuine',
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  vehicle: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Harpreet Singh Gill',
    role: 'Car Owner · Regular Customer',
    location: 'Urban Estate, Patiala',
    vehicle: 'Maruti Swift & Brezza',
    rating: 5,
    quote:
      'Been buying genuine MGP filters and Castrol EDGE from Krishna Motors for 8 years. Every part has original barcode packaging and their pricing beats dealership service bills by half.',
  },
  {
    id: 'rev-2',
    name: 'Master Gurmeet Sharma',
    role: 'Lead Mechanic · Multi-Brand Garage',
    location: 'Bhadson Road, Patiala',
    vehicle: 'Workshop Partner',
    rating: 5,
    quote:
      'As a workshop owner, I only trust Krishna Motors for Valeo clutch plates, Bosch brake pads, and bearings. I send a WhatsApp photo of any old part and they keep the exact OEM match ready in 10 minutes.',
  },
  {
    id: 'rev-3',
    name: 'Simranjeet Kaur',
    role: 'Daily Commuter',
    location: 'Model Town, Patiala',
    vehicle: 'Hyundai Creta & Honda Activa',
    rating: 5,
    quote:
      'Honest advice every time. Instead of pushing expensive items, they suggested the exact 5W-30 oil for my Creta and JASO MB oil for my Activa. Smooth experience and genuine billing.',
  },
  {
    id: 'rev-4',
    name: 'Rajinder Pal Verma',
    role: 'Royal Enfield Rider',
    location: 'Leela Bhawan, Patiala',
    vehicle: 'Royal Enfield Classic 350',
    rating: 5,
    quote:
      'Best shop on Bhadson Road for Royal Enfield Motul 15W-50 oil, brass chain kits, and NGK Iridium plugs. Everything is fresh stock and 100% original — zero duplicate fear.',
  },
  {
    id: 'rev-5',
    name: 'Manpreet Singh Sidhu',
    role: 'SUV Owner',
    location: 'Tripuri, Patiala',
    vehicle: 'Mahindra Scorpio-N',
    rating: 5,
    quote:
      'Needed urgent front brake rotors and Monroe shock absorbers before a Himachal trip. Krishna Motors had everything in ready stock near Jashan Palace. Truly trusted since 2007.',
  },
];
