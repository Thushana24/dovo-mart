import type { LucideIcon } from "lucide-react";
import { Home, Info, ShoppingBag, Phone, ShoppingCart } from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
  count?: number | null;
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Contact", href: "/contact", icon: Phone },
  { name: "Cart", href: "/cart", icon: ShoppingCart , count: 3},
];


