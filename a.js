const products = [
    { name: "Laptop", price: 50000, stock: 5 },
    { name: "Mouse", price: 500, stock: 0 },
    { name: "Keyboard", price: 1200, stock: 3 },
    { name: "Monitor", price: 15000, stock: 0 }
];

const priceLessThan1000 = products.filter(p => p.price < 1000 );
console.log(priceLessThan1000);
