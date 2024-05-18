import 'products/ProductsIndex'; //webpack sees that we are trying to import the module that begins with the word products
// If webpack cannot find a products dependency in nodemodulse then it will search for products in webpack.config.js mainly in remotes  section
import 'cart/CartShow';

console.log("we are inside the container");
 