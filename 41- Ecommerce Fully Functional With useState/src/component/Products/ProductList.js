// ================= IMAGES =================
import img111 from '/images/img111.jpg';
import img112 from '/images/img112.jpg';
import img113 from '/images/img113.jpg';
import img114 from '/images/img114.jpg';
import img115 from '/images/img115.jpg';
import img117 from '/images/img117.jpg';
import img118 from '/images/img118.jpg';
import img119 from '/images/img119.jpg';
import img120 from '/images/img120.jpg';
import img121 from '/images/img121.jpg';
import img122 from '/images/img122.jpg';
import img123 from '/images/img123.jpg';
import img124 from '/images/img124.jpg';
import img125 from '/images/img125.jpg';

import mFashion1 from '/images/mFashion1.jpg';
import mFashion3 from '/images/mFashion3.jpg';
import mFashion7 from '/images/mFashion7.jpg';

import fFashion1 from '/images/fFashion1.png';
import fFashion2 from '/images/fFashion2.png';
import fFashion3 from '/images/fFashion3.png';
import fFashion4 from '/images/fFashion4.png';
import fFashion5 from '/images/fFashion5.png';
import fFashion6 from '/images/fFashion6.jpg';
import fFashion7 from '/images/fFashion7.jpg';
import fFashion8 from '/images/fFashion8.jpg';

// ================= PRODUCTS LIST =================
const ProductsList = [
  // Women
  {
    id: 1,
    name: "Women Floral Dress",
    img: fFashion1, price: 1499,
    oldPrice: 1999, salesMela: true,
    freshArrival: false, category: "Women"
  },
  {
    id: 2,
    name: "Denim Jacket",
    img: fFashion2,
    price: 2199,
    oldPrice: 2799,
    salesMela: false,
    freshArrival: true,
    category: "Men"
  },

  {
    id: 3,
    name: "Women Kurti Set",
    img: fFashion3, price: 1999,
    oldPrice: 2599, salesMela: true,
    freshArrival: false,
    category: "Women"
  },
  {
    id: 4,
    name: "Women Handbag",
    img: fFashion4, price: 1599,
    oldPrice: 1999, salesMela: false,
    freshArrival: true,

    category: "Women"
  },
  {
    id: 5,
    name: "Women Fresh Arrival Top", img: fFashion5, price: 899,
     oldPrice: 1299, salesMela: false, freshArrival: true, category: "Fresh Arrival"
  },
  {
    id: 6,
    name: "Women Dress Combo",
    img: fFashion6,
    price: 2499,
    oldPrice: 3999, 
    salesMela: true,
    freshArrival: false,
    category: "Sales Mela"
  },
  {
    id: 7,
    name: "Women Casual Top",
    img: fFashion7,
    price: 899, 
    oldPrice: 1299, salesMela: false,
    freshArrival: true, category: "Women"
  },
  {
    id: 8,
    name: "Women Evening Dress",
    img: fFashion8,
    price: 1299,
    oldPrice: 1799,
    salesMela: false,
    freshArrival: true, category: "Women"
  },



  // Men
  {
    id: 9,
    name: "Men Casual Shirt",
    img: mFashion1,
    price: 1299,
    oldPrice: 1799, salesMela: false,
    freshArrival: true,
    category: "Men"
  },
  {
    id: 10,
    name: "Men Formal Blazer",
    img: mFashion3, price: 3499,
    oldPrice: 4299, salesMela: false, freshArrival: true, category: "Men"
  },
  { id: 11, name: "Men Sports Shoes", img: mFashion7, price: 2799, 
    oldPrice: 3499, salesMela: true, freshArrival: true, category: "Men" },



  // Kids
  { id: 12, name: "Kids Casual T-Shirt", img: img112, price: 499, 
    oldPrice: 799, salesMela: false, freshArrival: true, category: "Kids" },
  { id: 13, name: "Kids Winter Hoodie", img: img113, price: 899, 
    oldPrice: 1199, salesMela: true, freshArrival: false, category: "Kids" },
  { id: 14, name: "Kids School Shoes", img: img114, price: 1199, 
    oldPrice: 1599, salesMela: false, freshArrival: true, category: "Kids" },
  { id: 15, name: "Kids New Arrival Dress", img: img115, price: 799,
     oldPrice: 1099, salesMela: false, freshArrival: true, category: "Kids" },



  //  Others
  { id: 16, name: "Trendy Bag", img: img111,
     price: 699, oldPrice: 999, salesMela: false, freshArrival: true, category: "Sales Mela" },
  { id: 17, name: "Sneakers Combo", img: img117, 
    price: 1999, oldPrice: 2799, salesMela: true, freshArrival: false, category: "Sales Mela" },

  {
    id: 18,
    name: "Casual Hat", img: img118, price: 499, oldPrice: 699, salesMela: false, freshArrival: true, category: "Kids"
  },

  {
    id: 19,
    name: "Kids Summer Shorts",
    img: img119,
    price: 399,
    oldPrice: 599, salesMela: false,
    freshArrival: true, category: "Kids"
  },
  {
    id: 20,
    name: "Stylish Jacket",
    img: img120,
    price: 1599, oldPrice: 2199, salesMela: true,
    freshArrival: false, category: "Men"
  },
  {
    id: 21,
    name: "Trendy Sneakers",
    img: img122,
    price: 2299, oldPrice: 2999, salesMela: true,
    freshArrival: true, category: "Kids"
  },
  {
    id: 22,
    name: "Girls Party Dress",
    img: img121,
    price: 1299, oldPrice: 1799, salesMela: false, freshArrival: true, category: "Kids"
  },
  {
    id: 23,
    name: "Boys Hoodie",
    img: img123, price: 899,
    oldPrice: 1199, salesMela: true,
    freshArrival: false,
    category: "Kids"
  },
  {
    id: 24,
    name: "Casual Cap",
    img: img124, price: 299,
    oldPrice: 499, salesMela: false,
    freshArrival: true, category: "Fresh Arrival"
  },
  {
    id: 25,
    name: "Denim Pants",
    img: img125, price: 1399, oldPrice: 1999, salesMela: true,
    freshArrival: false,
    category: "Kids"
  },
];

export default ProductsList;
