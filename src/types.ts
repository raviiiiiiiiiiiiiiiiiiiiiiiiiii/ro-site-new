export type PageRoute = 
  | '/'
  | '/kent-service'
  | '/aquaguard-service'
  | '/pureit-service'
  | '/aosmith-service'
  | '/lg-service'
  | '/privacy-policy'
  | '/terms-of-service'
  | '/refund-policy'
  | '/disclaimer'
  | '/cookie-policy'
  | '/404';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  popularTag?: string;
  startingPrice?: string;
}

export interface BrandInfo {
  id: string;
  name: string;
  slug: PageRoute;
  logoText: string;
  logoUrl?: string;
  tagline: string;
  accentColor: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  commonProblems: string[];
  brandFaqs: { question: string; answer: string }[];
  showcaseImage?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  rating: number;
  brandServiced: string;
  comment: string;
  date: string;
}

export interface LeadFormData {
  fullName: string;
  mobileNumber: string;
  pinCode: string;
  selectedBrand: string;
  serviceType?: string;
  message?: string;
}
