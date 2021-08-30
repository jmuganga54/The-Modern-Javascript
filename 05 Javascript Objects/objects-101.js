let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`);

//Challenge area
let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}
console.log(`${person.name} is ${person.age} and live in ${person.location}`)
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and live in ${person.location}`)