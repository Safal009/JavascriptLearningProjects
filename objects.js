const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

const jonas = {
    Name:'Jonas',
    Lastname:'Schmedtmann',
    Age:2037-1991,
    Job:'Teacher',
    Friends: ['Micheal', 'Peter', 'Steven']
    
}
console.log(jonas.Lastname) //In dot notation just type out the property
console.log(jonas['Lastname']) //In bracket notation use string for property 
const namekey = 'name';
console.log(jonas['Last'+namekey])

const interestedin = prompt('What do you want to know about jonas? Choose between first name last name job and age')//Taking Input from the user
// console.log(jonas[interestedin])

//Adding New Properties using dot
jonas.location = "Portugal";

//Adding New properties using bracket
jonas.udemy =  true;
// console.log(jonas[interestedin])

//Challenge
//Type Jonas has 3 friends and his best friend is Micheal dynamically

console.log(`${jonas.Name} has ${jonas.Friends.length} and his best friend is ${jonas.Friends[0]}`)
