
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
  APPETIZERS = 'Appetizers',
  SUSHI = 'Sushi Rolls',
  SASHIMI = 'Sashimi & Nigiri',
  THAI = 'Thai Entrees',
  DRINKS = 'Craft Cocktails',
  SPECIALS = 'Chef Specials'
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
