const users = [
    {
        name: "Bagas",
        age: 22,
        isMarried: false
    }, {
        name: "Agil",
        age: 21,
        isMarried: true
    }, {
        name: "Doni",
        age: 20,
        isMarried: false
    }, {
        name: "Farhan",
        age: 19,
        isMarried: true
    }, {
        name: "Hafiz",
        age: 15,
        isMarried: false
    }, {
        name: "Iqbal",
        age: 11,
        isMarried: true
    },
    {
        name: "Joko",
        age: 27,
        isMarried: false
    }
]

// users.forEach((user, index) => {
//     console.log(`${index+1} name: ${user.name}, age: ${user.age}, isMarried: ${user.isMarried}`)
// })

const filteredUsers = users.filter((user) => user.age >= 20)
console.log(`list user yang mempunyai KTP:`)
filteredUsers.sort((a, b) => a.name.localeCompare(b.name))

filteredUsers.forEach((user, index) => {
    const {name, age, isMarried} = user
    console.log(`${index+1}. name: ${name}, age: ${age}, isMarried: ${isMarried}`)
})

// users.forEach((user, index) => {
//     const {name, age, isMarried} = user
//     let isKtp = false
//     if(age >= 20) {
//         isKtp = true
//     }
//     if(isKtp) {
//         console.log(`${index+1}. name: ${name}, age: ${age}, isMarried: ${isMarried}`)
//     }
// })