export interface ProjectJob {
  id: string;
  title: string;
  budget: string;
  postcode: string;
  category: string;
  description: string;
  datePosted: string;
  bidsCount: number;
  material: string;
  status: 'Bidding Open' | 'Matched' | 'Completed';
}

export interface StoneOffcut {
  id: string;
  material: string;
  color: string;
  length: number; // in mm
  width: number;  // in mm
  thickness: number; // in mm
  price: number;
  location: string;
  supplierName: string;
  supplierRating: number;
  imageUrl: string;
  availability: 'Available' | 'Reserved';
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  imageUrl: string;
  date: string;
  summary: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Homeowner' | 'Trader';
  company?: string;
  rating: number;
  content: string;
  avatarUrl: string;
  location: string;
  verified: boolean;
}

export type UserRole = 'homeowner' | 'trader';
