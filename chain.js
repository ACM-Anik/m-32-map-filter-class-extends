// Jehetu, array er vitore ache, tai age array er index diye object dhore tarpor property ber korte hobe
const users = [{id: 1, name: 'Ayon', job: 'doctor'}];
// console.log(users.name);
console.log(users[0].name);

// mixed array and object
const data = {
    count: 5000,
    data:[
        {id: 1, name: 'anik', job: 'leader'},
        {id: 2, name: 'ayon', job: 'co-leader'},
    ]
};
// console.log(data.data[0].job);


const user = {
    id: 5001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '35/A Kochu Khet',
            second: 'third floor',
            third: 'right side' 
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
};
const userFloor = user.address;
console.log(userFloor);  




