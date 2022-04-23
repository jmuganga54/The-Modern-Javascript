const person = {
    firstName: 'Joseph',
    lastName: 'Muganga',
    age: 54,
    getBio() {
        return `${this.firstName} is ${this.age}`
    }
}

const bio = person.getBio()
console.log(bio)

// const person = new person('Ibra','Londezya', 54)
// const bio = person.getBio()
// console.log(bio)

const person1 = new person('Joseph', 'Muganga', 64)
const person2 = new person('Ibrahim', 'Samson', 28)

const bio1 = person1.getBio()
console.log(bio)

const bio2 = person2.getBio()