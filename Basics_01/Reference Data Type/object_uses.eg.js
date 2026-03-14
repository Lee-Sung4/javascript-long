// example 

const product = {
  name: "Laptop",
  price: 60000,
  brand: "HP",
  inStock: false
};

if(product.inStock){
    console.log(`${product.brand} ${product.name} is available`);
} else {
    console.log("This product is not Available");
    
}