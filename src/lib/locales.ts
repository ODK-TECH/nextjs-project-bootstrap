export interface LocaleStrings {
  // Navigation
  home: string;
  dashboard: string;
  marketplace: string;
  financial: string;
  training: string;
  admin: string;
  
  // Landing Page
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getStarted: string;
  
  // Income Sources
  smallScaleFarming: string;
  pettyTrading: string;
  personalServices: string;
  transportation: string;
  retail: string;
  
  // Challenges
  lossOfCustomers: string;
  movementRestrictions: string;
  supplyChainDisruptions: string;
  lackOfCapital: string;
  marketClosures: string;
  
  // Solutions
  digitalPayments: string;
  microloans: string;
  onlineMarketplace: string;
  deliveryCoordination: string;
  businessTraining: string;
  
  // Common
  learnMore: string;
  applyNow: string;
  connect: string;
  viewDetails: string;
  language: string;
}

export const locales: Record<string, LocaleStrings> = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard", 
    marketplace: "Marketplace",
    financial: "Financial",
    training: "Training",
    admin: "Admin",
    
    // Landing Page
    heroTitle: "Empowering Nigerian Businesses",
    heroSubtitle: "Overcoming COVID-19 Challenges Together",
    heroDescription: "Digital solutions for small-scale farming, petty trading, personal services, transportation, and retail businesses affected by COVID-19.",
    getStarted: "Get Started",
    
    // Income Sources
    smallScaleFarming: "Small-Scale Farming",
    pettyTrading: "Petty Trading", 
    personalServices: "Personal Services",
    transportation: "Transportation",
    retail: "Retail",
    
    // Challenges
    lossOfCustomers: "Loss of Customers",
    movementRestrictions: "Movement Restrictions",
    supplyChainDisruptions: "Supply Chain Disruptions", 
    lackOfCapital: "Lack of Capital",
    marketClosures: "Market Closures",
    
    // Solutions
    digitalPayments: "Digital Payments",
    microloans: "Microloans",
    onlineMarketplace: "Online Marketplace",
    deliveryCoordination: "Delivery Coordination",
    businessTraining: "Business Training",
    
    // Common
    learnMore: "Learn More",
    applyNow: "Apply Now",
    connect: "Connect",
    viewDetails: "View Details",
    language: "Language"
  },
  
  pidgin: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    marketplace: "Market",
    financial: "Money Matter",
    training: "Training",
    admin: "Admin",
    
    // Landing Page
    heroTitle: "We Dey Help Naija Business",
    heroSubtitle: "Make We Fight COVID-19 Wahala Together",
    heroDescription: "Digital solution for small farming, petty trading, personal service, transport, and retail business wey COVID-19 affect.",
    getStarted: "Start Now",
    
    // Income Sources
    smallScaleFarming: "Small Farming",
    pettyTrading: "Petty Trading",
    personalServices: "Personal Service",
    transportation: "Transport",
    retail: "Retail",
    
    // Challenges
    lossOfCustomers: "Customer Loss",
    movementRestrictions: "Movement Restriction",
    supplyChainDisruptions: "Supply Chain Problem",
    lackOfCapital: "No Money",
    marketClosures: "Market Close",
    
    // Solutions
    digitalPayments: "Digital Payment",
    microloans: "Small Loan",
    onlineMarketplace: "Online Market",
    deliveryCoordination: "Delivery Help",
    businessTraining: "Business Training",
    
    // Common
    learnMore: "Learn More",
    applyNow: "Apply Now", 
    connect: "Connect",
    viewDetails: "See Details",
    language: "Language"
  },
  
  yoruba: {
    // Navigation
    home: "Ile",
    dashboard: "Dashboard",
    marketplace: "Oja",
    financial: "Owo",
    training: "Eko",
    admin: "Admin",
    
    // Landing Page
    heroTitle: "A n gbe Iṣowo Naijiriya soke",
    heroSubtitle: "A jọ koju COVID-19 wahala",
    heroDescription: "Awọn solusan dijitali fun kekere oko, petty trading, awọn iṣẹ ti ara ẹni, gbigbe, ati awọn iṣowo retail ti COVID-19 kan.",
    getStarted: "Bẹrẹ",
    
    // Income Sources
    smallScaleFarming: "Oko Kekere",
    pettyTrading: "Iṣowo Kekere",
    personalServices: "Awọn Iṣẹ Ti Ara Ẹni",
    transportation: "Gbigbe",
    retail: "Retail",
    
    // Challenges
    lossOfCustomers: "Padanu Awọn Onibara",
    movementRestrictions: "Awọn Ihamọ Gbigbe",
    supplyChainDisruptions: "Awọn Idalọwọduro Chain Ipese",
    lackOfCapital: "Aini Owo-ori",
    marketClosures: "Oja Pipade",
    
    // Solutions
    digitalPayments: "Awọn Sisanwo Dijitali",
    microloans: "Awọn Awin Kekere",
    onlineMarketplace: "Oja Ori ayelujara",
    deliveryCoordination: "Iṣakoso Ifijiṣẹ",
    businessTraining: "Ikẹkọ Iṣowo",
    
    // Common
    learnMore: "Kọ Diẹ Sii",
    applyNow: "Lo Bayi",
    connect: "Darapọ",
    viewDetails: "Wo Awọn Alaye",
    language: "Ede"
  }
};

export function getLocaleStrings(locale: string): LocaleStrings {
  return locales[locale] || locales.en;
}

export const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'pidgin', name: 'Pidgin' },
  { code: 'yoruba', name: 'Yorùbá' }
];
