import faker from "faker";

let products = '';
for(let i=0 ;i<5;++i){
    const name = faker.commerce.productName();
    products+=`<div>${name}</div>`;
}
// console.log(products);
console.log("we are inside index.js of products");
document.querySelector('#dev-products').innerHTML = products;