














// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. Spread 
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 44, 30];

// 6. destructuring
const {x, y, z, ...c} = {x: 45, y: 12, z: 32, name:'Shakib', age: 38, salary: 450000};
const [a, b, ...r ] = [12, 13 , 44, 56, 60, 70];
console.log(y);