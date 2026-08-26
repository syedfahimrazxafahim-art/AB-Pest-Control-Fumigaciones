export type Language = 'es' | 'en';

export type PageView = 
  | 'home'
  | 'services'
  | 'service-detail'
  | 'diagnostic'
  | 'results'
  | 'coverage'
  | 'calculator'
  | 'faq'
  | 'contact';

export interface PestService {
  id: string;
  name: { es: string; en: string };
  tagline: { es: string; en: string };
  icon: string;
  severity: 'high' | 'critical' | 'moderate';
  shortDesc: { es: string; en: string };
  fullDesc: { es: string; en: string };
  signs: { es: string[]; en: string[] };
  threats: { es: string[]; en: string[] };
  method: { es: string[]; en: string[] };
  duration: string;
  warranty: string;
  startingPrice: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  service: string;
  comment: { es: string; en: string };
  verified: boolean;
}

export interface ServiceArea {
  name: string;
  county: string;
  zipCodes: string[];
  responseTime: string;
  sameDay: boolean;
  status: 'active' | 'priority';
}

export interface BeforeAfterCase {
  id: string;
  title: { es: string; en: string };
  category: string;
  location: string;
  duration: string;
  beforeDesc: { es: string; en: string };
  afterDesc: { es: string; en: string };
  beforeImage: string;
  afterImage: string;
  metric: { label: { es: string; en: string }; value: string };
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  zip: string;
  propertyType: 'residential' | 'commercial' | 'apartment' | 'industrial';
  approxSqFt: number;
  pests: string[];
  urgency: 'same-day' | 'next-day' | 'standard' | 'emergency-now';
  notes: string;
  preferredLanguage: 'es' | 'en';
}
