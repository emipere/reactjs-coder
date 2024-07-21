/* eslint-disable no-unused-vars */

import {items} from "../mock/mockData";


export const getProducts = (category) => {
const filteredItems=items.filter((items)=> items.categories.includes(category));

    return new Promise ((resolve,reject)=>{
       if (items.length > 0) {
        setTimeout(()=>{
            resolve(filteredItems);
        },1000);
       } else {
        reject ("No hay productos disponibles");
       }
    });
};