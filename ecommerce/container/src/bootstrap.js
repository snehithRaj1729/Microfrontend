import {mount as productsMount} from 'products/ProductsIndex'; //webpack sees that we are trying to import the module that begins with the word products
// If webpack cannot find a products dependency in nodemodulse then it will search for products in webpack.config.js mainly in remotes  section
// import 'cart/CartShow';
import { mount as cartMount } from 'cart/CartShow';

console.log("we are inside the container");
productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));