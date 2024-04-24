class User {
    // constructor
    constructor(inputName, inputAge) {
        {
            this.name = inputName
            this.age = inputAge
        }
        console.log(`creating user ${inputName} with age ${inputAge}`)
    }
}

const user = new User("Bagas", 22)
const user2 = new User("Agil", 21)
const user3 = new User("Doni", 20)
console.log(user2)