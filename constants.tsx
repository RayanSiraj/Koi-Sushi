
import { MenuItem, MenuCategory } from './types';

export const ORDERING_URL = "https://order.mealkeyway.com/customer/release/index?mid=4f4d35546e594a6e76384476393378346e64417045773d3d#/main";

export const MENU_ITEMS: MenuItem[] = [
  // APPETIZERS
  {
    id: 'a1',
    name: 'Kurobuta Gyoza',
    description: 'Hand-pleated Berkshire pork dumplings, pan-seared to perfection, served with a spiced black vinegar reduction.',
    price: '$12',
    category: MenuCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a2',
    name: 'Truffle Edamame',
    description: 'Steamed young soybeans tossed in aromatic black truffle salt and toasted sesame oil.',
    price: '$9',
    category: MenuCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=800'
  },
  // SUSHI
  {
    id: 's1',
    name: 'King Dragon Roll',
    description: 'Crispy shrimp tempura, fresh cucumber, topped with buttery unagi, avocado slices & house-made kabayaki glaze.',
    price: '$18',
    category: MenuCategory.SUSHI,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 's2',
    name: 'Midnight Volcano Roll',
    description: 'Spicy tuna and cream cheese roll, flash-tempura fried and topped with a sizzling medley of baked spicy seafood.',
    price: '$22',
    category: MenuCategory.SUSHI,
    image: 'https://images.unsplash.com/photo-1559461678-834ff0742f00?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  // SASHIMI
  {
    id: 'ss1',
    name: 'Hamachi Carpaccio',
    description: 'Premium Yellowtail slices kissed with citrus yuzu-kosho, thinly sliced serrano peppers, and delicate micro-cilantro.',
    price: '$19',
    category: MenuCategory.SASHIMI,
    image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ss2',
    name: 'Bluefin Otoro',
    description: 'Three slices of the fattest part of the bluefin tuna, served with freshly grated wasabi and aged soy.',
    price: '$28',
    category: MenuCategory.SASHIMI,
    image: 'https://images.unsplash.com/photo-1534482421-3d455ad42139?auto=format&fit=crop&q=80&w=800'
  },
  // THAI
  {
    id: 't1',
    name: 'Authentic Pad Thai',
    description: 'Artisanal rice noodles stir-fried in a secret tamarind reduction with farm-fresh eggs, garlic chives, and crushed roasted peanuts.',
    price: '$21',
    category: MenuCategory.THAI,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 't2',
    name: 'Green Curry Sea Bass',
    description: 'Pan-seared Chilean sea bass over a bed of bamboo shoots and eggplant in a vibrant basil-infused coconut curry.',
    price: '$34',
    category: MenuCategory.THAI,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800'
  },
  // DRINKS
  {
    id: 'd1',
    name: 'Koi Signature Lychee',
    description: 'Ultimat Vodka infused with fresh lychee fruit, elderflower essence, and a whisper of chilled lime zest.',
    price: '$16',
    category: MenuCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd2',
    name: 'Hibiscus Old Fashioned',
    description: 'Japanese Harmony Whisky, house-made hibiscus syrup, and orange bitters over a hand-carved ice sphere.',
    price: '$18',
    category: MenuCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=800'
  },
  // SPECIALS
  {
    id: 'sp1',
    name: "Chef's Omakase",
    description: 'A 12-course bespoke journey curated by our Executive Chef based on the day\'s finest market arrivals.',
    price: '$120',
    category: MenuCategory.SPECIALS,
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&q=80&w=800'
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
