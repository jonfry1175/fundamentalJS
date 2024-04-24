const createKTP = (umur) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            umur >= 17 ? resolve("KTP berhasil dibuat") : reject("KTP gagal dibuat") 
        }, 3000)
    })
}

function asyncSum1(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result;
            result = num1 + num2
            if(result < 0) {
                reject('negative number')
            }
            resolve(result)
        }, 2000)    
    })
}

const main = async () => {
    try {
        const result = await asyncSum1(2, 3)
        if(result < 10) {
            throw new Error('kurang dari 10')
        }
        console.log(result)
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("checking done ... ")
    }
}

main()