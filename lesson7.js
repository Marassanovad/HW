// Task 1
class Calculator {

    add(a, b) {
        return a + b
    }
    subtract(a, b) {
        return a - b
    }
    multiply(a, b) {
        return a * b
    }
    divide(a, b) {
        return a / b
    }
}

const calculator = new Calculator()

console.log(calculator.add(10, 5)) // 15
console.log(calculator.subtract(10, 5)) // 5
console.log(calculator.multiply(10, 5)) // 50
console.log(calculator.divide(10, 5)) // 2



// Task 2
class Employee {
    firstname;
    lastname;

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = firstname.toLowerCase() + "." + lastname.toLowerCase() + "@company.com"
        this.fullname = firstname + " " + lastname
    }
}

let emp1 = new Employee("John", "Smith")
console.log(emp1.fullname) // "John Smith"
let emp2 = new Employee("Mary", "Sue")
console.log(emp2.email) // "mary.sue@company.com"
let emp3 = new Employee("Antony", "Walker")
console.log(emp3.firstname) // "Antony"
console.log(emp3.lastname) // "Walker"

// Task 3
class Circle{
    radius;

    constructor(radius){
        this.radius = radius
    }

    getArea(){
        console.log(Math.PI * (this.radius**2))
    }
    getPerimeter(){
        console.log(2* Math.PI * this.radius)
    }
}

let circy = new Circle(11)
circy.getArea() // 380.132711084365
circy.getPerimeter() // 69.115038378975451


//Task 4
class User {
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount ++
    }
}

const u1 = new User("johnsmith10")
console.log(User.userCount) // 1
console.log(u1.username) // "johnsmith10"

const u2 = new User("marysue1989")
console.log(User.userCount) // 2
console.log(u2.username) // "marysue1989"

const u3 = new User("milan_rodrick")
console.log(User.userCount) // 3
console.log(u3.username) // "milan_rodrick"

