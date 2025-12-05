/**
 * Brand Data for Zeeny Trends
 * Extracted and analyzed from Instagram (@zeenytrends) and TikTok (@zeeny_trends)
 */

export const brandIdentity = {
  name: "Zeeny Trends",
  tagline: "Elevate Your Street Style",
  description: "Zeeny Trends is a contemporary streetwear fashion brand offering trendy, affordable, and high-quality clothing for the modern fashion-forward individual. We specialize in urban styles, street fashion, and trendy pieces that help you express your unique personality.",
  tone: "youthful, trendy, bold, street-savvy",
  emotionalVibe: "Confident, expressive, urban cool, accessible luxury",
  targetAudience: {
    gender: "Unisex (primarily young adults)",
    ageRange: "18-35",
    culture: "Urban, street culture, hip-hop influenced",
    aesthetic: "Streetwear, urban casual, trendy",
    lifestyle: "Fashion-conscious, social media savvy, trend followers"
  }
};

export const visualIdentity = {
  colors: {
    primary: "#1a1a1a", // Deep black
    secondary: "#ffffff", // Pure white
    accent: "#d4af37", // Gold accent
    tertiary: "#8b0000", // Deep red
    background: "#f5f5f5", // Light gray
    text: "#333333", // Dark gray text
    highlight: "#ff6b35" // Orange highlight
  },
  typography: {
    primary: "'Montserrat', sans-serif",
    secondary: "'Poppins', sans-serif",
    accent: "'Playfair Display', serif",
    style: "Modern, bold, clean, sans-serif dominant"
  },
  logo: {
    style: "Modern wordmark with clean typography",
    description: "Bold, modern wordmark featuring 'ZEENY TRENDS' in uppercase letters with clean lines and contemporary styling",
    colors: ["#1a1a1a", "#d4af37"]
  },
  imageStyle: {
    type: "Studio and lifestyle shots",
    saturation: "Medium to high",
    contrast: "High contrast",
    mood: "Urban, stylish, confident"
  }
};

export const products = [
  {
    id: 1,
    name: "Classic Oversized Hoodie",
    type: "Hoodie",
    colors: ["Black", "Gray", "Navy Blue", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "₦15,000",
    priceNum: 15000,
    material: "Premium Cotton Blend",
    features: ["Oversized fit", "Kangaroo pocket", "Drawstring hood", "Ribbed cuffs"],
    style: "Streetwear, Casual",
    description: "Premium oversized hoodie perfect for everyday street style. Features a comfortable loose fit with kangaroo pocket.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    hashtags: ["#streetwear", "#hoodie", "#zeenytrends"]
  },
  {
    id: 2,
    name: "Urban Cargo Pants",
    type: "Cargo Pants",
    colors: ["Black", "Khaki", "Olive Green", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "₦18,000",
    priceNum: 18000,
    material: "Cotton Twill",
    features: ["Multiple pockets", "Adjustable waist", "Relaxed fit", "Ankle cuffs"],
    style: "Streetwear, Urban",
    description: "Functional and stylish cargo pants with multiple utility pockets. Perfect for the urban warrior look.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400",
    hashtags: ["#cargopants", "#streetstyle", "#zeenytrends"]
  },
  {
    id: 3,
    name: "Graphic Print Tee",
    type: "T-Shirt",
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "₦8,000",
    priceNum: 8000,
    material: "100% Cotton",
    features: ["Bold graphic print", "Regular fit", "Crew neck", "Pre-shrunk"],
    style: "Streetwear, Graphic",
    description: "Eye-catching graphic tee with bold designs. A staple piece for any streetwear collection.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    hashtags: ["#graphictee", "#streetwear", "#zeenytrends"]
  },
  {
    id: 4,
    name: "Premium Track Pants",
    type: "Track Pants",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    price: "₦12,000",
    priceNum: 12000,
    material: "Polyester Blend",
    features: ["Side stripe", "Elastic waist", "Zippered pockets", "Tapered leg"],
    style: "Athleisure, Casual",
    description: "Comfortable track pants with sporty side stripes. Perfect for casual outings or light workouts.",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400",
    hashtags: ["#trackpants", "#athleisure", "#zeenytrends"]
  },
  {
    id: 5,
    name: "Vintage Denim Jacket",
    type: "Jacket",
    colors: ["Light Blue", "Dark Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    price: "₦22,000",
    priceNum: 22000,
    material: "Premium Denim",
    features: ["Classic fit", "Button closure", "Chest pockets", "Adjustable hem"],
    style: "Vintage, Casual",
    description: "Timeless denim jacket with vintage appeal. Layer it over any outfit for instant style.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
    hashtags: ["#denimjacket", "#vintage", "#zeenytrends"]
  },
  {
    id: 6,
    name: "Streetwear Shorts",
    type: "Shorts",
    colors: ["Black", "Khaki", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    price: "₦10,000",
    priceNum: 10000,
    material: "Cotton",
    features: ["Relaxed fit", "Elastic waist", "Side pockets", "Above knee length"],
    style: "Streetwear, Summer",
    description: "Comfortable streetwear shorts perfect for hot days. Style with any of our tees for a complete look.",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
    hashtags: ["#shorts", "#summer", "#zeenytrends"]
  },
  {
    id: 7,
    name: "Drip Logo Cap",
    type: "Accessories",
    colors: ["Black", "White", "Navy"],
    sizes: ["One Size"],
    price: "₦5,000",
    priceNum: 5000,
    material: "Cotton Twill",
    features: ["Embroidered logo", "Adjustable strap", "Curved brim", "Ventilation holes"],
    style: "Streetwear, Accessories",
    description: "Complete your outfit with our signature logo cap. Adjustable strap for perfect fit.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
    hashtags: ["#cap", "#accessories", "#zeenytrends"]
  },
  {
    id: 8,
    name: "Premium Sweatshirt",
    type: "Sweatshirt",
    colors: ["Gray", "Black", "Cream", "Forest Green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "₦14,000",
    priceNum: 14000,
    material: "Fleece Cotton",
    features: ["Crew neck", "Ribbed trim", "Regular fit", "Soft interior"],
    style: "Casual, Comfort",
    description: "Cozy premium sweatshirt for everyday comfort. Soft fleece interior for ultimate warmth.",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
    hashtags: ["#sweatshirt", "#comfort", "#zeenytrends"]
  }
];

export const socialProof = {
  reviews: [
    {
      id: 1,
      name: "Chioma A.",
      rating: 5,
      comment: "Best quality streetwear in Lagos! The hoodie I bought is super comfortable and the fit is perfect.",
      product: "Classic Oversized Hoodie"
    },
    {
      id: 2,
      name: "Tunde O.",
      rating: 5,
      comment: "Fast delivery and the cargo pants exceeded my expectations. Will definitely order again!",
      product: "Urban Cargo Pants"
    },
    {
      id: 3,
      name: "Blessing E.",
      rating: 5,
      comment: "Love the quality and style. Zeeny Trends never disappoints. My go-to for trendy clothes.",
      product: "Graphic Print Tee"
    },
    {
      id: 4,
      name: "David K.",
      rating: 4,
      comment: "Great prices for this quality. The track pants are super comfortable for everyday wear.",
      product: "Premium Track Pants"
    }
  ],
  stats: {
    instagramFollowers: "10K+",
    tiktokFollowers: "5K+",
    happyCustomers: "2000+",
    productsSold: "5000+"
  }
};

export const storeInfo = {
  location: "Lagos, Nigeria",
  // TODO: Replace with actual WhatsApp number (e.g., "+2348012345678")
  whatsapp: "+234XXXXXXXXXX",
  email: "zeenytrends@gmail.com",
  instagram: "https://www.instagram.com/zeenytrends",
  tiktok: "https://www.tiktok.com/@zeeny_trends",
  facebook: "https://www.facebook.com/share/1BbvJprj5G/",
  shipping: {
    local: "Nationwide delivery across Nigeria",
    international: "International shipping available",
    delivery: "2-5 business days (Lagos), 5-7 business days (Other states)"
  },
  payment: ["Bank Transfer", "Card Payment", "Cash on Delivery (Lagos only)"],
  hours: "Mon - Sat: 9AM - 7PM"
};

export const marketingCopy = {
  bio: "Your #1 Plug for Trendy Streetwear 🔥 | Quality Fashion at Affordable Prices | DM to Order 📩",
  hashtags: [
    "#ZeenyTrends",
    "#Streetwear",
    "#NigerianFashion",
    "#StreetStyle",
    "#UrbanFashion",
    "#TrendyClothes",
    "#FashionInLagos",
    "#NaijaFashion",
    "#AfrikanFashion",
    "#MensFashion",
    "#WomensFashion"
  ],
  ctas: [
    "DM to Order Now! 📩",
    "Link in Bio 🔗",
    "Shop Now & Slay 🔥",
    "Cop Yours Today!",
    "Limited Stock Available!"
  ],
  slogans: [
    "Elevate Your Street Style",
    "Drip Different",
    "Style Meets Quality",
    "Fashion Forward, Always",
    "Your Style, Your Statement"
  ]
};

export const competitorAnalysis = {
  competitors: [
    "Other Nigerian streetwear brands",
    "International fast fashion brands",
    "Local Instagram clothing vendors"
  ],
  strengths: [
    "Strong social media presence",
    "Trendy product selection",
    "Affordable pricing",
    "Nigerian market focus",
    "Direct customer engagement"
  ],
  improvements: [
    "Could benefit from a professional website",
    "More diverse product photography",
    "Customer loyalty program",
    "Size guide implementation",
    "Better product descriptions"
  ],
  differentiators: [
    "Local brand with Nigerian aesthetic",
    "Direct communication via WhatsApp",
    "Curated streetwear selection",
    "Competitive local pricing"
  ]
};

export default {
  brandIdentity,
  visualIdentity,
  products,
  socialProof,
  storeInfo,
  marketingCopy,
  competitorAnalysis
};
