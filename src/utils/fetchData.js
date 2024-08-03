/* eslint-disable no-unused-vars */

import { items } from "../mock/mockData";

export const getProducts = (category) => {
  let filteredItems = [...items];

  if (category) {
    filteredItems = items.filter((items) => items.category.includes(category));
  }

  return new Promise((resolve, reject) => {
    if (items.length > 0) {
      setTimeout(() => {
        resolve(filteredItems);
      }, 1500);
    } else {
      reject("No hay productos disponibles");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = items.find((item) => item.id === parseInt(id));
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject("No hay productos disponibles");
      }
    }, 1500);
  });
};
