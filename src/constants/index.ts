import home from "@/public/icons/home.svg";
import category from "@/public/icons/categories.svg";
import about from "@/public/icons/about.svg";
import contact from "@/public/icons/contact.svg";
import faq from "@/public/icons/faq.svg";
import product1 from "@/public/images/product-1.png";
import product2 from "@/public/images/product-2.png";
import product3 from "@/public/images/product-3.png";
import product4 from "@/public/images/product-4.png";

export const navItems = [
  {
    name: "Home",
    href: "/",
    icon: home,
  },
  {
    name: "Our Category",
    href: "/categories",
    icon: category,
  },
  {
    name: "About us",
    href: "/about",
    icon: about,
  },
  {
    name: "Contact us",
    href: "/contact",
    icon: contact,
  },
  {
    name: "FAQs",
    href: "/faq",
    icon: faq,
  },
] as const;

export const productData = [
  {
    id: 1,
    image: product1,
    category: "Dresses",
    rating: 4.5,
    reviews: 2910,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
    price: "AED 900",
    originalPrice: null,
    discount: null,
    colors: ["#be968e", "#333333", "#e8e8e8"],
    moreColors: "+2",
    isWishlisted: false,
    isInCart: false,
  },
  {
    id: 2,
    image: product2,
    category: "Dresses",
    rating: 4.5,
    reviews: 2910,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
    price: "AED 900",
    originalPrice: "AED 1300",
    discount: "25% OFF",
    colors: ["#be968e", "#333333", "#e8e8e8"],
    moreColors: "+2",
    isWishlisted: false,
    isInCart: false,
  },
  {
    id: 3,
    image: product3,
    category: "Dresses",
    rating: 4.5,
    reviews: 2910,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
    price: "AED 900",
    originalPrice: null,
    discount: null,
    colors: ["#be968e", "#333333", "#e8e8e8"],
    moreColors: "+2",
    isWishlisted: true,
    isInCart: true,
  },
  {
    id: 4,
    image: product4,
    category: "Dresses",
    rating: 4.5,
    reviews: 2910,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
    price: "AED 900",
    originalPrice: "AED 1300",
    discount: "25% OFF",
    colors: ["#be968e", "#333333", "#e8e8e8"],
    moreColors: "+2",
    isWishlisted: false,
    isInCart: false,
  },
];

export const ratingsData = [
  { stars: 5, percentage: 67 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 9 },
];
