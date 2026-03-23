export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  compatibility: string[];
  material?: string;
  inStock: boolean;
  reviews: Review[];
}

export const CATEGORIES = [
  "Engine Parts",
  "Suspension & Steering",
  "Braking System",
  "Electricals",
  "Clutch & Gearbox",
  "Body & Cabin",
];

export const BRANDS = [
  "Tata Motors",
  "Ashok Leyland",
  "Mahindra",
  "BharatBenz",
  "Eicher",
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Oil Filter",
    category: "Engine Parts",
    brand: "BharatBenz",
    price: 900,
    image: new URL("../images/Oil filter.jpeg", import.meta.url).href,
    description: "High-quality oil filter designed for all BharatBenz trucks. Ensures optimal engine performance and protection by efficiently removing contaminants from engine oil.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "Premium Filter Media & Steel Housing",
    inStock: true,
    reviews: [],
  },
  {
    id: "2",
    name: "Diesel Water Separator",
    category: "Engine Parts",
    brand: "BharatBenz",
    price: 1500,
    image: new URL("../images/Diesel water separator.jpeg", import.meta.url).href,
    description: "High-performance diesel water separator designed for all BharatBenz truck models. Effectively separates water and contaminants from diesel fuel, protecting the engine from corrosion and damage.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "Stainless Steel & Premium Filter Media",
    inStock: true,
    reviews: [],
  },
  {
    id: "3",
    name: "U Bolt",
    category: "Suspension & Steering",
    brand: "BharatBenz",
    price: 1300,
    image: new URL("../images/U bolt for Bharat benz.jpeg", import.meta.url).href,
    description: "Heavy-duty U bolt designed for all BharatBenz truck models. Provides secure suspension attachment and ensures stability for heavy-load applications.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "High-Tensile Steel",
    inStock: true,
    reviews: [],
  },
  {
    id: "4",
    name: "Oil Seal Front",
    category: "Engine Parts",
    brand: "BharatBenz",
    price: 150,
    image: new URL("../images/Oil seal front.jpeg", import.meta.url).href,
    description: "High-quality front oil seal designed for BharatBenz trucks. Prevents oil leakage and ensures proper engine sealing and performance.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "Rubber & Steel",
    inStock: true,
    reviews: [],
  },
  {
    id: "5",
    name: "Clutch Plate Assembly",
    category: "Clutch & Gearbox",
    brand: "Eicher",
    price: 9500,
    image: new URL("../images/Gear box mounting.jpeg", import.meta.url).href,
    description: "Heavy-duty clutch plate for Eicher Pro series trucks. Smooth engagement and long life.",
    compatibility: ["Eicher Pro 3015", "Eicher Pro 6025"],
    material: "Sintered Friction Material & High-Tensile Steel",
    inStock: false,
    reviews: [],
  },
  {
    id: "8",
    name: "Bogie Bush",
    category: "Suspension & Steering",
    brand: "BharatBenz",
    price: 1200,
    image: new URL("../images/Boggy bush.jpeg", import.meta.url).href,
    description: "This high-quality bogie bush is specially designed for all types of Bharat Benz trucks, ensuring perfect compatibility and reliable performance. Manufactured using heavy-duty, durable materials, it is built to withstand tough road conditions and heavy loads.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "Heavy-Duty Rubber",
    inStock: true,
    reviews: [],
  },
  {
    id: "9",
    name: "C-Rod Bush",
    category: "Suspension & Steering",
    brand: "BharatBenz",
    price: 400,
    image: new URL("../images/C- rod bush.jpeg", import.meta.url).href,
    description: "High-quality C-rod bush designed for all BharatBenz trucks. Provides reliable suspension support and durability for heavy-duty applications.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "Heavy-Duty Rubber",
    inStock: true,
    reviews: [],
  },
  {
    id: "10",
    name: "Kamani U Bolt Buffer",
    category: "Suspension & Steering",
    brand: "BharatBenz",
    price: 450,
    image: new URL("../images/Kamani U bolt buffer.jpeg", import.meta.url).href,
    description: "High-quality Kamani U bolt buffer designed for all BharatBenz truck models. Provides superior suspension support and reduces vibration for a smoother ride.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "Rubber & Metal",
    inStock: true,
    reviews: [],
  },
  {
    id: "11",
    name: "Hub Bolt with Nut",
    category: "Body & Cabin",
    brand: "BharatBenz",
    price: 200,
    image: new URL("../images/Hub bolt with nutt.jpeg", import.meta.url).href,
    description: "High-quality hub bolt with nut designed for all BharatBenz trucks. Ensures secure wheel attachment and reliable performance.",
    compatibility: ["All BharatBenz Trucks", "BharatBenz 2823C", "BharatBenz 3523R"],
    material: "High-Strength Steel",
    inStock: true,
    reviews: [],
  },
];
