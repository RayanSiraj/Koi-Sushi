
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  popular?: boolean;
}

export enum MenuCategory {
  FEATURED = 'Featured Dishes'
}

export interface Reservation {
  id: string;
  name: string;
  date: string;
  time: string;
  partySize: number;
  notes?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
