export type PageRoute = 
  | '/'
  | '/privacy-policy'
  | '/terms-of-service'
  | '/refund-policy'
  | '/disclaimer'
  | '/cookie-policy'
  | '/404'
  | string;

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  popularTag?: string;
  startingPrice?: string;
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
