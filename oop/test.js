const axios = require("axios")
const url = "http://localhost:3012"

const test = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}


test()

// with axios
const test2 = async () => {
    const response = await axios.get(url)
    const data = response.data
    console.log(data)
}

// test2()