//class Person
class Person {
    constructor(firstName, lastName, age, likes){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age} `
        if (this.likes) {
            this.likes.forEach((like) => {
                bio += `${this.firstName} likes ${like}.`
            });
        }
        return bio

    }
    //getter
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    //setter
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

//class Employee
class Employee extends Person {
    constructor(firstName, lastName, age, position, likes){
        super(firstName,lastName, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}`
        //Joseph is a Data Officer 
    }

    getYearsLeft(){
        return 65 - this.age
    }
}

//Create a class for student
class Students extends Person{
    constructor(firstName, lastName, age, likes,grade){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio(){
        const status = this.grade >=70 ? `passing` : `falling`
        return `${this.firstName} is ${status} the class`
    }
    updateGrade(change){
        this.grade+=change
    }
    
}

const me = new Employee('Anna','Peter',27,'Teacher',[])
me.fullName = 'Joseph Muganga'
console.log(me.getBio())




