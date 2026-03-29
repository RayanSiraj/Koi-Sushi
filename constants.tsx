import { MenuItem, MenuCategory } from './types';

export const ORDERING_URL = "https://order.mealkeyway.com/customer/release/index?mid=4f4d35546e594a6e76384476393378346e64417045773d3d#/main";

export const MENU_ITEMS: MenuItem[] = [
  // FEATURED
  {
    id: 'f1',
    name: 'The Golden Koi Platter',
    description: 'A curated selection of our finest sashimi, nigiri, and signature rolls, garnished with edible gold leaf and fresh uni.',
    price: '$85',
    category: MenuCategory.FEATURED,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 'f2',
    name: 'Wagyu Beef Tataki',
    description: 'A5 Miyazaki Wagyu, lightly seared and served with truffle ponzu, crispy garlic chips, and micro-greens.',
    price: '$42',
    category: MenuCategory.FEATURED,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 'f3',
    name: 'Lobster Pad Thai',
    description: 'Our signature Pad Thai elevated with a whole butter-poached Maine lobster tail and kaffir lime essence.',
    price: '$48',
    category: MenuCategory.FEATURED,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    popular: true
  }
];

export const TESTIMONIALS = [
  {
    author: "Eleanor V.",
    rating: 5,
    text: "The omakase experience here rivals the best in NYC. Exquisite freshness and impeccable presentation."
  },
  {
    author: "Marcus T.",
    rating: 5,
    text: "A masterclass in Thai flavors. The heat is balanced, the ingredients are clearly superior. A Ponte Vedra gem."
  },
  {
    author: "Julian S.",
    rating: 5,
    text: "Elegant, moody, and delicious. The craft cocktails are well-balanced and the sushi is like edible art."
  }
];

export const HOURS = {
  Mon_Thu: "11:30 AM — 10:00 PM",
  Fri: "11:30 AM — 11:00 PM",
  Sat: "12:00 PM — 11:00 PM",
  Sun: "12:00 PM — 10:00 PM"
};