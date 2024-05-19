import faker from "faker";
import { id_ID } from "faker/lib/locales";

// let products = '';
// for(let i=0 ;i<5;++i){
//     const name = faker.commerce.productName();
//     products+=`<div>${name}</div>`;
// }
// console.log("we are inside index.js of products");
// document.querySelector('#dev-products').innerHTML = products;

const mount = (el) => {//Now we have got a function to call either in situation 1 or 2
    let products = '';
    for (let i = 0; i < 5; ++i) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    console.log("we are inside index.js of products");
    el.innerHTML = products;
    //If we are using react we can change this as ReactDOM.render(<App/>,el);
}

// Situation:1
// We are running tis file in isolation, in this case we are using local index.html
// file which definitely has a div with id_ID dev-products

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');
    if(el){
        mount(el);
    }
}

// Situation:2
// We are running this file in production and in this case this code is used by container
// In this case we are not sure that container has a div with id dev-products
//In this case we do not want to immediately render the app.It is up to container on how and when to show the products
//In situation 2 rather than using the mount function immediately we will export the mount function and container can
//import this function

export {mount};


// Keeping both this situation in mind we need to write code satisfying both the cases