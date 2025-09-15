// src/data/asyncmocks.js
const PRODUCTS = [
  { id: "1", title: "Torta de Chocolate 18cm", category: "cakes",   price: 1200, stock: 8,  pictureUrl: "/img/Matilda.jpg",              description: "Bizcochuelo húmedo con ganache" },
  { id: "2", title: "Red Velvet 22cm",         category: "cakes",   price: 1500, stock: 5,  pictureUrl: "/img/Red Velvet.jpg",           description: "Clásica red velvet" },
  { id: "3", title: "Mini Lemon Pie",          category: "mini",    price: 180,  stock: 20, pictureUrl: "/img/Lemmon.jpg",               description: "Mini tartaleta de limón" },
  { id: "4", title: "Mini Chocotorta",         category: "mini",    price: 200,  stock: 15, pictureUrl: "/img/chocotorta.jpg",           description: "Versión mini" },
  { id: "5", title: "Cookie Chips x 6",        category: "cookies", price: 600,  stock: 30, pictureUrl: "/img/Cookies con chips.jpg",    description: "Galletas con chips" },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryId ? PRODUCTS.filter(p => p.category === categoryId) : PRODUCTS);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS.find(p => p.id === id) ?? null);
    }, 2000);
  });
};


