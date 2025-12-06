// assets.ts
import type { StaticImageData } from "next/image";
import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";

import gs_logo from "./gs_logo.jpg";
import happy_store from "./happy_store.webp";
import upload_area from "./upload_area.svg";
import hero_model_img from "./hero_model_img.png";
import hero_product_img1 from "./hero_product_img1.png";
import hero_product_img2 from "./hero_product_img2.png";
import product_img1 from "./product_img1.png";
import product_img2 from "./product_img2.png";
import product_img3 from "./product_img3.png";
import product_img4 from "./product_img4.png";
import product_img5 from "./product_img5.png";
import product_img6 from "./product_img6.png";
import product_img7 from "./product_img7.png";
import product_img8 from "./product_img8.png";
import product_img9 from "./product_img9.png";
import product_img10 from "./product_img10.png";
import product_img11 from "./product_img11.png";
import product_img12 from "./product_img12.png";
import profile_pic1 from "./profile_pic1.jpg";
import profile_pic2 from "./profile_pic2.jpg";
import profile_pic3 from "./profile_pic3.jpg";

// ------------------- TYPES -------------------

export interface User {
  id: string;
  name: string;
  email: string;
  image: string | StaticImageData;
  cart?: Record<string, any>;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  mrp: number;
  price: number;
  images: (string | StaticImageData)[];
  category: string;
  storeId: string;
  inStock: boolean;
  store: Store;
  rating: Rating[];
  createdAt: string;
  updatedAt: string;
}

export interface Store {
  id: string;
  userId: string;
  name: string;
  description: string;
  username: string;
  address: string;
  status: string;
  isActive: boolean;
  logo: string | StaticImageData;
  email: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface Rating {
  id: string;
  rating: number;
  review: string;
  user: User;
  productId: string;
  createdAt: string;
  updatedAt: string;
  product: {
    id: string;
    name: string;
    category: string;
  };
}

export interface Spec {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  accent: string;
}

export interface Address {
  id: string;
  userId: string;
  name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  createdAt: string;
}

export interface Coupon {
  code: string;
  description: string;
  discount: number;
  forNewUser: boolean;
  forMember: boolean;
  isPublic: boolean;
  expiresAt: string;
  createdAt: string;
}

export interface OrderItem {
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface Order {
  id: string;
  total: number;
  status: string;
  userId: string;
  storeId: string;
  addressId: string;
  isPaid: boolean;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  isCouponUsed: boolean;
  coupon?: Coupon | Rating;
  orderItems: OrderItem[];
  address: Address;
  user: User;
}

// ------------------- ASSETS -------------------

export const assets = {
  upload_area,
  hero_model_img,
  hero_product_img1,
  hero_product_img2,
  gs_logo,
  product_img1,
  product_img2,
  product_img3,
  product_img4,
  product_img5,
  product_img6,
  product_img7,
  product_img8,
  product_img9,
  product_img10,
  product_img11,
  product_img12,
};

// ------------------- DATA -------------------

export const categories = [
  "Headphones",
  "Speakers",
  "Watch",
  "Earbuds",
  "Mouse",
  "Decoration",
];

export const dummyRatingsData: Rating[] = [
  {
    id: "rat_1",
    rating: 4.2,
    review:
      "I was a bit skeptical at first, but this product turned out to be even better than I imagined. The quality feels premium, it's easy to use, and it delivers exactly what was promised. I've already recommended it to friends and will definitely purchase again in the future.",
    user: {
      name: "Kristin Watson",
      image: profile_pic1,
      id: "user1",
      email: "kristin@example.com",
    },
    productId: "prod_1",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  {
    id: "rat_2",
    rating: 5.0,
    review:
      "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
    user: {
      name: "Jenny Wilson",
      image: profile_pic2,
      id: "user2",
      email: "jenny@example.com",
    },
    productId: "prod_2",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  {
    id: "rat_3",
    rating: 4.1,
    review:
      "This product is amazing. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
    user: {
      name: "Bessie Cooper",
      image: profile_pic3,
      id: "user3",
      email: "bessie@example.com",
    },
    productId: "prod_3",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  // ... continue for rat_4, rat_5, rat_6
];

// ------------------- STORE -------------------

export const dummyStoreData: Store = {
  id: "store_1",
  userId: "user_1",
  name: "Happy Shop",
  description:
    "At Happy Shop, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest fashion trends, top-notch electronics, home essentials, or unique lifestyle products — we've got it all under one digital roof.",
  username: "happyshop",
  address:
    "3rd Floor, Happy Shop , New Building, 123 street , c sector , NY, US",
  status: "approved",
  isActive: true,
  logo: happy_store,
  email: "happyshop@example.com",
  contact: "+0 1234567890",
  createdAt: "2025-09-04T09:04:16.189Z",
  updatedAt: "2025-09-04T09:04:44.273Z",
  user: {
    id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
    name: "Great Stack",
    email: "user.greatstack@gmail.com",
    image: gs_logo,
  },
};

// ------------------- PRODUCTS -------------------

export const productDummyData: Product[] = [
  {
    id: "prod_1",
    name: "Modern table lamp",
    description:
      "Modern table lamp with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty. Enhance your audio experience with this earbuds. Indulge yourself in a world of pure sound with 50 hours of uninterrupted playtime. Equipped with the cutting-edge Zen Mode Tech ENC and BoomX Tech, prepare to be enthralled by a symphony of crystal-clear melodies.",
    mrp: 40,
    price: 29,
    images: [product_img1, product_img2, product_img3, product_img4],
    category: "Decoration",
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    rating: dummyRatingsData,
    createdAt: "Sat Jul 29 2025 14:51:25 GMT+0530",
    updatedAt: "Sat Jul 29 2025 14:51:25 GMT+0530",
  },
  // ... continue with the rest of products
];

// ------------------- SPECS -------------------

export const ourSpecsData: Spec[] = [
  {
    title: "Free Shipping",
    description:
      "Enjoy fast, free delivery on every order no conditions, just reliable doorstep.",
    icon: SendIcon,
    accent: "#05DF72",
  },
  {
    title: "7 Days easy Return",
    description: "Change your mind? No worries. Return any item within 7 days.",
    icon: ClockFadingIcon,
    accent: "#FF8904",
  },
  {
    title: "24/7 Customer Support",
    description:
      "We're here for you. Get expert help with our customer support.",
    icon: HeadsetIcon,
    accent: "#A684FF",
  },
];

// ------------------- ADDRESSES -------------------

export const addressDummyData: Address = {
  id: "addr_1",
  userId: "user_1",
  name: "John Doe",
  email: "johndoe@example.com",
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "USA",
  phone: "1234567890",
  createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530",
};

// ------------------- COUPONS -------------------

export const couponDummyData: Coupon[] = [
  {
    code: "NEW20",
    description: "20% Off for New Users",
    discount: 20,
    forNewUser: true,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:35:31.183Z",
  },
  {
    code: "NEW10",
    description: "10% Off for New Users",
    discount: 10,
    forNewUser: true,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:35:50.653Z",
  },
  {
    code: "OFF20",
    description: "20% Off for All Users",
    discount: 20,
    forNewUser: false,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:42:00.811Z",
  },
  {
    code: "OFF10",
    description: "10% Off for All Users",
    discount: 10,
    forNewUser: false,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:42:21.279Z",
  },
  {
    code: "PLUS10",
    description: "20% Off for Members",
    discount: 10,
    forNewUser: false,
    forMember: true,
    isPublic: false,
    expiresAt: "2027-03-06T00:00:00.000Z",
    createdAt: "2025-08-22T11:38:20.194Z",
  },
];

// ------------------- USERS -------------------

export const dummyUserData: User = {
  id: "user_31dQbH27HVtovbs13X2cmqefddM",
  name: "GreatStack",
  email: "greatstack@example.com",
  image: gs_logo,
  cart: {},
};
