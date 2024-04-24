class User {
    firstName = ''
    lastName = ''
    username = ''
    age = 0

    // constructor
    constructor(firstName, lastName, username, age) {
        {
            this.firstName = firstName
            this.lastName = lastName
            this.username = username
            this.age = age
        }
    }

    // method
    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
    }
}

const user = new User("Bagas", "Saputra", "BagasSaputra", 22)
console.log(user.greeting())
