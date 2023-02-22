const numbers = [12, 56, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half); 
// console.log(thirds); 

const friends = ['Tom Hamks', 'Tom Cruise', 'Tom Brady', 'Tom Sulaiman'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);


const products = [
    {id: 1, name:'Iphone', price: 120000},
    {id: 2, name:'Samsung', price: 80000},
    {id: 3, name:'Realme', price: 20000},
    {id: 4, name:'Nokia', price: 30000},
    {id: 5, name:'Blackberry', price: 40000},
];
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(items);
console.log(prices);






