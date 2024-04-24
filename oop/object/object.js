const user = {
    name: "Bagas",
    age: 22,
    isMarried: false,
    greeting: function(){
        // destructuring
        const {name, age, isMarried} = this
        return `Hello, my name is ${name} and I am ${age} years old and I am ${isMarried ? "married" : "single"}`
    }
}

console.log(user)
// console.log(user.greeting())
// Object.keys => melihat key/property array
// console.log(Object.keys(user))
// console.log(Object.values(user))