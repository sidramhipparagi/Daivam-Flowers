
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  category: ('loose-flowers' | 'maale' | 'human-use' | 'hara')[];
  detailedDescription?: string;
  features?: string[];
  usage?: string[];
}

export const products: Product[] = [
  // Loose Flowers
  {
    id: 1,
    name: "Chendu Flowers (Orange)",
    price: "₹25/250g",
    image: "/images/Products/Chendu-loose.png",
    description: "Bright Chendu blooms ideal for pooja and festive decor",
    category: ["loose-flowers"],
    detailedDescription: "Fresh orange Chendu flowers sourced directly from K R Market, Bengaluru. These vibrant blooms are perfect for traditional decorations and religious ceremonies.",
    features: ["Fresh daily harvest", "Vibrant orange color", "Long-lasting fragrance", "Premium quality"],
    usage: ["Temple decorations", "Festive occasions", "Pooja rituals", "Home decor"]
  },
  {
    id: 2,
    name: "Gundu Mallige",
    price: "₹50/100g",
    image: "/images/Products/Gundu-mallige.png",
    description: "Fragrant Gundu Mallige perfect for hair and devotion",
    category: ["loose-flowers", "human-use"],
    detailedDescription: "Premium quality Gundu Mallige flowers known for their intense fragrance and traditional significance in South Indian culture.",
    features: ["Intense natural fragrance", "Perfect for hair decoration", "Traditional significance", "Fresh daily supply"],
    usage: ["Hair adornment", "Religious ceremonies", "Wedding decorations", "Traditional rituals"]
  },
  {
    id: 3,
    name: "Kanakambara Hoovu",
    price: "₹40/100g",
    image: "/images/Products/Kanakambara-loose.png",
    description: "Vibrant Kanakambara for hair adornment and rituals",
    category: ["loose-flowers", "human-use"],
    detailedDescription: "Beautiful orange Kanakambara flowers, traditionally used in South Indian ceremonies and hair decoration.",
    features: ["Bright orange petals", "Traditional significance", "Long-lasting freshness", "Premium quality"],
    usage: ["Hair decoration", "Temple offerings", "Cultural ceremonies", "Festive decorations"]
  },
  {
    id: 4,
    name: "Rose-Orange",
    price: "₹30/250g",
    image: "/images/Products/Rose-Orange.png",
    description: "Fresh orange roses for graceful pooja and décor",
    category: ["loose-flowers"],
    detailedDescription: "Fresh orange roses perfect for religious ceremonies and decorative purposes, sourced for their vibrant color and lasting fragrance.",
    features: ["Fresh orange roses", "Natural fragrance", "Long-lasting petals", "Premium quality"],
    usage: ["Pooja decorations", "Religious ceremonies", "Home decor", "Special occasions"]
  },
  {
    id: 5,
    name: "Rose",
    price: "₹30/250g",
    image: "/images/Products/Rose-loose.png",
    description: "Classic red roses for devotion and celebration",
    category: ["loose-flowers", "human-use"],
    detailedDescription: "Classic red roses symbolizing love and devotion, perfect for religious ceremonies and special celebrations.",
    features: ["Classic red color", "Symbol of devotion", "Fresh petals", "Traditional significance"],
    usage: ["Religious offerings", "Celebrations", "Romantic occasions", "Temple decorations"]
  },
  {
    id: 6,
    name: "Rose Yellow",
    price: "₹30/250g",
    image: "/images/Products/Rose-yellow.png",
    description: "Cheerful yellow roses for puja and warm décor",
    category: ["loose-flowers"],
    detailedDescription: "Bright yellow roses bringing warmth and positivity to any occasion, ideal for pujas and cheerful decorations.",
    features: ["Bright yellow color", "Symbol of friendship", "Fresh and vibrant", "Positive energy"],
    usage: ["Puja rituals", "Friendship celebrations", "Positive decorations", "Festive occasions"]
  },
  {
    id: 7,
    name: "Sevanthige",
    price: "₹80/250g",
    image: "/images/Products/Sevanthige.png",
    description: "Traditional Sevanthige for temples and festivals",
    category: ["loose-flowers", "human-use"],
    detailedDescription: "Traditional Sevanthige flowers with deep cultural significance, commonly used in South Indian temples and festivals.",
    features: ["Traditional significance", "Temple grade quality", "Rich orange color", "Cultural importance"],
    usage: ["Temple decorations", "Religious festivals", "Cultural ceremonies", "Traditional rituals"]
  },
  {
    id: 8,
    name: "Sevanthige-White",
    price: "₹80/250g",
    image: "/images/Products/Sevanthige-white.png",
    description: "Pure white Sevanthige for peaceful worship",
    category: ["loose-flowers"],
    detailedDescription: "Pure white Sevanthige flowers representing peace and purity, ideal for serene worship and meditation ceremonies.",
    features: ["Pure white color", "Symbol of peace", "Premium quality", "Spiritual significance"],
    usage: ["Peaceful worship", "Meditation ceremonies", "Pure offerings", "Spiritual rituals"]
  },
  {
    id: 9,
    name: "Sooji Mallige",
    price: "₹50/100g",
    image: "/images/Products/Sooji-mallige.png",
    description: "Soft Sooji Mallige ideal for hair and pooja",
    category: ["loose-flowers", "human-use"],
    detailedDescription: "Delicate Sooji Mallige flowers with soft texture and pleasant fragrance, perfect for hair decoration and pooja rituals.",
    features: ["Soft texture", "Pleasant fragrance", "Hair-friendly", "Delicate appearance"],
    usage: ["Hair decoration", "Pooja rituals", "Gentle ceremonies", "Personal adornment"]
  },
  {
    id: 10,
    name: "Lotus",
    price: "₹15/one",
    image: "/images/Products/Lotus.png",
    description: "Sacred lotus for divine rituals and serenity",
    category: ["loose-flowers"],
    detailedDescription: "Sacred lotus flowers representing purity and enlightenment, essential for divine rituals and spiritual practices.",
    features: ["Sacred significance", "Symbol of purity", "Divine connection", "Spiritual importance"],
    usage: ["Divine rituals", "Spiritual practices", "Sacred offerings", "Meditation ceremonies"]
  },
  {
    id: 11,
    name: "Ekke Hoovu",
    price: "₹50",
    image: "/images/Products/ekke.png",
    description: "Beautiful Ekke flowers for pooja and décor",
    category: ["loose-flowers"],
    detailedDescription: "Traditional Ekke flowers known for their unique appearance and cultural significance in South Indian ceremonies.",
    features: ["Unique appearance", "Traditional significance", "Cultural importance", "Ceremonial use"],
    usage: ["Pooja ceremonies", "Traditional décor", "Cultural events", "Religious offerings"]
  },
  {
    id: 12,
    name: "Chendu Yellow",
    price: "₹25/250g",
    image: "/images/Products/Chendu-yellow.png",
    description: "Sunny yellow Chendu for vibrant rituals",
    category: ["loose-flowers"],
    detailedDescription: "Bright yellow Chendu flowers bringing sunshine to your rituals and ceremonies with their vibrant color and fresh fragrance.",
    features: ["Bright yellow color", "Vibrant appearance", "Fresh fragrance", "Positive energy"],
    usage: ["Vibrant rituals", "Festive decorations", "Cheerful ceremonies", "Positive occasions"]
  },
  {
    id: 13,
    name: "Sevanthige Mariegold",
    price: "₹70/250g",
    image: "/images/Products/Sevanthige-mariegold.png",
    description: "Marigold Sevanthige for pooja and festive decor",
    category: ["loose-flowers"],
    detailedDescription: "Beautiful marigold-colored Sevanthige flowers combining traditional significance with festive appeal.",
    features: ["Marigold color", "Festive appeal", "Traditional significance", "Vibrant appearance"],
    usage: ["Pooja decorations", "Festive occasions", "Traditional ceremonies", "Colorful rituals"]
  },
  {
    id: 14,
    name: "Kadu Mallige",
    price: "₹250/packet",
    image: "/images/Products/Kadu-Mallige.png",
    description: "Elegant Kadu Mallige used in traditional garlands",
    category: ["loose-flowers"],
    detailedDescription: "Premium Kadu Mallige flowers specially selected for traditional garland making and elegant decorations.",
    features: ["Premium quality", "Garland making", "Elegant appearance", "Traditional use"],
    usage: ["Garland making", "Elegant decorations", "Traditional ceremonies", "Premium offerings"]
  },
  {
    id: 15,
    name: "Kanagale",
    price: "₹250/packet",
    image: "/images/Products/Kanagale.png",
    description: "Traditional Kanagale flowers for devotion and décor",
    category: ["loose-flowers"],
    detailedDescription: "Traditional Kanagale flowers with deep cultural roots, perfect for devotional practices and traditional décor.",
    features: ["Traditional significance", "Cultural importance", "Devotional use", "Premium quality"],
    usage: ["Devotional practices", "Traditional décor", "Cultural ceremonies", "Religious offerings"]
  },
  {
    id: 16,
    name: "Chocolate Flowers",
    price: "₹70/250g",
    image: "/images/Products/Chocolate-flower.png",
    description: "Unique chocolate-toned blooms for stylish décor",
    category: ["loose-flowers"],
    detailedDescription: "Unique chocolate-colored flowers offering a modern twist to traditional decorations with their distinctive earthy tones.",
    features: ["Unique chocolate color", "Modern appeal", "Distinctive appearance", "Stylish décor"],
    usage: ["Stylish décor", "Modern ceremonies", "Unique decorations", "Contemporary rituals"]
  },
  {
    id: 17,
    name: "Purple Flowers",
    price: "₹80/250g",
    image: "/images/Products/Purple-flowers.png",
    description: "Bold purple blossoms to enhance pooja and beauty",
    category: ["loose-flowers"],
    detailedDescription: "Bold purple flowers adding elegance and beauty to pooja ceremonies and decorative arrangements.",
    features: ["Bold purple color", "Elegant appearance", "Beauty enhancement", "Ceremonial use"],
    usage: ["Pooja enhancement", "Beauty rituals", "Elegant decorations", "Ceremonial beauty"]
  },
  {
    id: 18,
    name: "Sugandaraja Hoovu",
    price: "₹25/250g",
    image: "/images/Products/sugandaraja.png",
    description: "Graceful Sugandaraja blooms for beautiful garlands",
    category: ["loose-flowers"],
    detailedDescription: "Graceful Sugandaraja flowers known for their elegant appearance and suitability for creating beautiful garlands.",
    features: ["Graceful appearance", "Garland suitable", "Elegant beauty", "Traditional use"],
    usage: ["Garland making", "Graceful decorations", "Traditional ceremonies", "Elegant rituals"]
  },
  {
    id: 20,
    name: "Rose Lightyellow",
    price: "₹25/250g",
    image: "/images/Products/rose-lightyellow.png",
    description: "Soft light-yellow rose garland for graceful celebrations.",
    category: ["loose-flowers"],
    detailedDescription: "Delicate light-yellow roses perfect for graceful celebrations and gentle ceremonies with their soft, soothing color.",
    features: ["Light yellow color", "Soft appearance", "Graceful beauty", "Gentle appeal"],
    usage: ["Graceful celebrations", "Gentle ceremonies", "Soft decorations", "Soothing rituals"]
  },

  // Maale Collection
  {
    id: 21,
    name: "Chocolate Flower Maale",
    price: "₹120/maaru",
    image: "/images/Chocolate-maale.jpg",
    description: "Trendy garland with earthy-toned flowers for stylish rituals",
    category: ["maale"],
    detailedDescription: "Modern chocolate-toned garland combining traditional craftsmanship with contemporary style, perfect for stylish ceremonies.",
    features: ["Modern design", "Chocolate tones", "Stylish appearance", "Contemporary appeal"],
    usage: ["Stylish rituals", "Modern ceremonies", "Contemporary decorations", "Trendy occasions"]
  },
  {
    id: 22,
    name: "Chendu Orange Maale",
    price: "₹80/maaru",
    image: "/images/Products/Chendu-orange-maale.png",
    description: "Bright Chendu garland perfect for divine worship and events",
    category: ["maale"],
    detailedDescription: "Vibrant orange Chendu garland handcrafted for divine worship and special events, bringing brightness to any occasion.",
    features: ["Bright orange color", "Handcrafted quality", "Divine worship", "Event suitable"],
    usage: ["Divine worship", "Special events", "Religious ceremonies", "Festive occasions"]
  },
  {
    id: 23,
    name: "Sevanthige Rose Maale",
    price: "₹130/maaru",
    image: "/images/Products/classic.png",
    description: "Elegant Sevanthige and rose blend for pooja and celebrations",
    category: ["maale"],
    detailedDescription: "Classic combination of Sevanthige and roses creating an elegant garland perfect for pooja ceremonies and joyous celebrations.",
    features: ["Classic combination", "Elegant design", "Pooja suitable", "Celebration ready"],
    usage: ["Pooja ceremonies", "Celebrations", "Religious events", "Festive decorations"]
  },
  {
    id: 24,
    name: "Sevanthige-White Rose Maale",
    price: "₹130/maaru",
    image: "/images/Products/classic-white.png",
    description: "Soothing white rose and Sevanthige garland for graceful rituals",
    category: ["maale"],
    detailedDescription: "Peaceful white rose and Sevanthige combination creating a soothing garland ideal for graceful and serene rituals.",
    features: ["Soothing white color", "Peaceful design", "Graceful appearance", "Serene appeal"],
    usage: ["Graceful rituals", "Peaceful ceremonies", "Serene worship", "Calming decorations"]
  },
  {
    id: 25,
    name: "Sevanthige Rose Maale(without paneer soppu)",
    price: "₹130/maaru",
    image: "/images/Products/classic-nopaneer.png",
    description: "A clean floral mix for simple and pure offerings",
    category: ["maale"],
    detailedDescription: "Clean and pure Sevanthige rose garland without paneer soppu, designed for simple and authentic offerings.",
    features: ["Clean design", "Pure offering", "Simple beauty", "Authentic appeal"],
    usage: ["Pure offerings", "Simple ceremonies", "Clean worship", "Authentic rituals"]
  },
  {
    id: 26,
    name: "Chendu-Yellow maale",
    price: "₹80/maaru",
    image: "/images/Products/Chendu-yellow-maale.png",
    description: "Vibrant yellow garland ideal for festivals and pooja décor",
    category: ["maale"],
    detailedDescription: "Bright yellow Chendu garland bringing vibrant energy to festivals and pooja decorations with its sunny appearance.",
    features: ["Vibrant yellow", "Festival ready", "Sunny appearance", "Energetic appeal"],
    usage: ["Festival decorations", "Pooja décor", "Vibrant ceremonies", "Sunny occasions"]
  },
  {
    id: 27,
    name: "Kanagale Maale",
    price: "₹100/maaru",
    image: "/images/Products/kanagale-maale.png",
    description: "Traditional Kanagale strand used in temple offerings and ceremonies",
    category: ["maale"],
    detailedDescription: "Traditional Kanagale garland with deep cultural significance, specially crafted for temple offerings and sacred ceremonies.",
    features: ["Traditional significance", "Temple quality", "Cultural importance", "Sacred use"],
    usage: ["Temple offerings", "Sacred ceremonies", "Traditional rituals", "Cultural events"]
  },
  {
    id: 28,
    name: "Mallige Maale",
    price: "₹50/mola",
    image: "/images/Products/Mallige-maale.png",
    description: "Classic jasmine garland for devotion, bridal wear, and fragrance",
    category: ["maale", "human-use"],
    detailedDescription: "Classic jasmine garland with intense fragrance, perfect for devotional practices, bridal ceremonies, and traditional occasions.",
    features: ["Classic jasmine", "Intense fragrance", "Bridal suitable", "Devotional use"],
    usage: ["Devotional practices", "Bridal ceremonies", "Traditional occasions", "Fragrant rituals"]
  },
  {
    id: 29,
    name: "Mallige Maale(without paneer soppu)",
    price: "₹50/mola",
    image: "/images/Products/Mallige-maale-nopaneer.png",
    description: "Pure jasmine garland, perfect for clean and elegant use",
    category: ["maale", "human-use"],
    detailedDescription: "Pure jasmine garland without paneer soppu, offering clean elegance and authentic fragrance for special occasions.",
    features: ["Pure jasmine", "Clean elegance", "Authentic fragrance", "Special occasions"],
    usage: ["Clean ceremonies", "Elegant occasions", "Pure worship", "Authentic rituals"]
  },
  {
    id: 30,
    name: "Mixed Flowers Maale",
    price: "₹120/maaru",
    image: "/images/Products/Mixed-flowers-maale.png",
    description: "Colorful garland of mixed blooms for festive and decorative charm",
    category: ["maale"],
    detailedDescription: "Vibrant mixed flower garland combining various blooms to create a colorful and charming decoration for festive occasions.",
    features: ["Mixed blooms", "Colorful design", "Festive charm", "Decorative appeal"],
    usage: ["Festive occasions", "Decorative charm", "Colorful ceremonies", "Celebratory events"]
  },
  {
    id: 31,
    name: "Rose Maale",
    price: "₹100/maaru",
    image: "/images/Products/Rose-maale.png",
    description: "Fragrant rose garland suited for weddings, pooja, and gifting",
    category: ["maale"],
    detailedDescription: "Elegant rose garland with beautiful fragrance, perfectly suited for weddings, pooja ceremonies, and special gifting occasions.",
    features: ["Fragrant roses", "Wedding suitable", "Pooja ready", "Gift worthy"],
    usage: ["Wedding ceremonies", "Pooja rituals", "Special gifting", "Romantic occasions"]
  },
  {
    id: 32,
    name: "Kanakambara Maale",
    price: "₹50/mola",
    image: "/images/Products/Kanakambara-maale.png",
    description: "Radiant orange Kanakambara for hair adornment and religious use",
    category: ["maale", "human-use"],
    detailedDescription: "Beautiful orange Kanakambara garland perfect for traditional hair adornment and religious ceremonies with its radiant color.",
    features: ["Radiant orange", "Hair adornment", "Religious use", "Traditional beauty"],
    usage: ["Hair decoration", "Religious ceremonies", "Traditional adornment", "Cultural events"]
  },
  {
    id: 33,
    name: "Purple Flowers Maale",
    price: "₹120/maaru",
    image: "/images/Products/Purple-maale.png",
    description: "Bold purple garland for stylish decor and temple offerings",
    category: ["maale"],
    detailedDescription: "Bold and elegant purple flower garland combining style with tradition, perfect for modern decor and temple offerings.",
    features: ["Bold purple", "Stylish design", "Temple suitable", "Modern appeal"],
    usage: ["Stylish decor", "Temple offerings", "Modern ceremonies", "Elegant occasions"]
  },
  {
    id: 34,
    name: "Sevanthige White maale",
    price: "₹130/maaru",
    image: "/images/Products/sevanthige-white-maale.png",
    description: "Peaceful white Sevanthige for serene rituals and pujas",
    category: ["maale"],
    detailedDescription: "Serene white Sevanthige garland creating a peaceful atmosphere for meditation, rituals, and spiritual pujas.",
    features: ["Peaceful white", "Serene appeal", "Ritual suitable", "Spiritual significance"],
    usage: ["Serene rituals", "Peaceful pujas", "Meditation ceremonies", "Spiritual practices"]
  },
  {
    id: 35,
    name: "Purple White Flowers maale",
    price: "₹120/maaru",
    image: "/images/Products/purple-white-maale.png",
    description: "Elegant dual-tone garland for modern decor and divine use",
    category: ["maale"],
    detailedDescription: "Sophisticated dual-tone purple and white garland blending modern aesthetics with divine purpose for contemporary ceremonies.",
    features: ["Dual-tone design", "Modern aesthetics", "Divine purpose", "Contemporary appeal"],
    usage: ["Modern decor", "Divine ceremonies", "Contemporary rituals", "Sophisticated events"]
  },
  {
    id: 36,
    name: "Sevanthige-Yellow Maale",
    price: "₹120/maaru",
    image: "/images/Products/sevanthige-yellow-maale.png",
    description: "Bright yellow chrysanthemum garland for vibrant occasions.",
    category: ["maale"],
    detailedDescription: "Vibrant yellow Sevanthige garland bringing sunshine and positive energy to celebrations and special occasions.",
    features: ["Bright yellow", "Vibrant energy", "Positive appeal", "Celebration ready"],
    usage: ["Vibrant occasions", "Positive ceremonies", "Sunny celebrations", "Energetic events"]
  },

  // Human Use / Daily Elegance
  {
    id: 37,
    name: "Mallige Dindu",
    price: "₹70/1 piece",
    image: "/images/Products/Mallige-Dindu.png",
    description: "Freshly packed jasmine buds ideal for garlands and hair adornment.",
    category: ["human-use"],
    detailedDescription: "Premium jasmine buds carefully selected and packed fresh daily, perfect for creating beautiful garlands and elegant hair adornments.",
    features: ["Fresh daily packing", "Premium jasmine", "Garland suitable", "Hair friendly"],
    usage: ["Garland making", "Hair adornment", "Personal decoration", "Traditional styling"]
  },

  // Hara Collection
  {
    id: 38,
    name: "Kamala Hara",
    price: "₹400/one",
    image: "/images/hara/Kamala-hara-one.png",
    description: "Elegant lotus garland ideal for weddings and divine décor",
    category: ["hara"],
    detailedDescription: "Magnificent lotus hara crafted with sacred lotus flowers, representing purity and divine grace, perfect for weddings and spiritual ceremonies.",
    features: ["Sacred lotus", "Divine grace", "Wedding suitable", "Spiritual significance"],
    usage: ["Wedding ceremonies", "Divine décor", "Spiritual rituals", "Sacred occasions"]
  },
  {
    id: 39,
    name: "Sugandaraja Hara",
    price: "₹100/one",
    image: "/images/hara/Sugandaraja-hara.png",
    description: "Fragrant floral hara perfect for pooja and traditional rituals",
    category: ["hara"],
    detailedDescription: "Beautiful Sugandaraja hara with natural fragrance, traditionally crafted for pooja ceremonies and cultural rituals.",
    features: ["Natural fragrance", "Traditional craft", "Pooja suitable", "Cultural significance"],
    usage: ["Pooja ceremonies", "Traditional rituals", "Cultural events", "Religious practices"]
  },
  {
    id: 40,
    name: "Mallige Hara",
    price: "₹300/one",
    image: "/images/hara/Mallige-Rose-hara.png",
    description: "Classic jasmine garland, pure and perfect for ceremonies",
    category: ["hara"],
    detailedDescription: "Classic jasmine hara combining purity with elegance, crafted to perfection for important ceremonies and celebrations.",
    features: ["Classic jasmine", "Pure elegance", "Perfect craft", "Ceremonial quality"],
    usage: ["Important ceremonies", "Elegant celebrations", "Pure rituals", "Classic occasions"]
  },
  {
    id: 41,  
    name: "Mallige Rose Hara",
    price: "₹400/one",
    image: "/images/hara/mallige-2rose.png",
    description: "A blend of jasmine and roses for graceful celebrations",
    category: ["hara"],
    detailedDescription: "Exquisite combination of jasmine and roses creating a harmonious hara perfect for graceful celebrations and special moments.",
    features: ["Jasmine rose blend", "Graceful design", "Celebration ready", "Special occasions"],
    usage: ["Graceful celebrations", "Special moments", "Elegant ceremonies", "Harmonious rituals"]
  },
  {
    id: 42,
    name: "Kamala Hara (three lotus on each side)",
    price: "₹500/one",
    image: "/images/hara/Kamala-hara.png",
    description: "Premium lotus hara designed for grandeur and blessings",
    category: ["hara"],
    detailedDescription: "Premium lotus hara featuring three lotus flowers on each side, designed to bring grandeur and divine blessings to special occasions.",
    features: ["Premium lotus", "Grand design", "Divine blessings", "Special crafting"],
    usage: ["Grand occasions", "Divine ceremonies", "Blessing rituals", "Premium events"]
  },
  {
    id: 43,
    name: "Mallige Rose Hara (with yellow and red roses)",
    price: "₹400/one",
    image: "/images/hara/mallige-redyellow-rose.png",
    description: "Bright floral mix suited for engagements and poojas",
    category: ["hara"],
    detailedDescription: "Vibrant hara combining jasmine with yellow and red roses, creating a bright and joyful garland perfect for engagements and pooja ceremonies.",
    features: ["Bright floral mix", "Yellow red roses", "Engagement suitable", "Pooja ready"],
    usage: ["Engagement ceremonies", "Pooja rituals", "Bright celebrations", "Joyful occasions"]
  }
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.includes(category as any));
};
