export interface ServiceItem {
  id: number;
  title: string;
  price: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}