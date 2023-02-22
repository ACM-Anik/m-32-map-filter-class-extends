// bigger than 20:
const numbers = [12, 5, 10, 30, 20, 35, 25, 60, 50, 40, 15];
const bigNums = numbers.filter(number => number > 20);
console.log(bigNums);
// Smaller than 20:
const tiny = numbers.filter(number => number < 20);
console.log(tiny);


const products = [
    {id: 1, name:'Iphone', price: 120000},
    {id: 2, name:'Samsung', price: 80000},
    {id: 3, name:'RealMe', price: 20000},
    {id: 4, name:'Nokia', price: 30000},
    {id: 5, name:'Blackberry', price: 40000},
];
// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);
console.log(expensive);


