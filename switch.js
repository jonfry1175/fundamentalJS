// // // // // // // // // // // // // // // // // Buatlah suatu kondisi dimana jika score bernilai lebih dari atau sama dengan 80 maka mencetak  A, jika score bernilai lebih dari atau sama dengan 70 maka B,jika score bernilai lebih dari atau sama dengan 50 maka C, jika score bernilai lebih dari atau sama dengan 40 maka D, selain dari itu maka E.  note : variabel score nilai telah dideklarasikan.


// // // // // // // // // // // // // // // // let score = 90

// // // // // // // // // // // // // // // // let i = 10
// // // // // // // // // // // // // // // // do {
// // // // // // // // // // // // // // // //   console.log(i)
// // // // // // // // // // // // // // // //   i++
// // // // // // // // // // // // // // // // } while (i < 5)

// // // // // // // // // // // // // // // let i = 0;
// // // // // // // // // // // // // // //   while (i < 10) {
// // // // // // // // // // // // // // //     console.log(i++);
// // // // // // // // // // // // // // //     if (i===5) {
// // // // // // // // // // // // // // //         break;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   }


// // // // // // // // // // // // // // //  	

// // // // // // // // // // // // // // // #
// // // // // // // // // // // // // // // ###
// // // // // // // // // // // // // // // #####
// // // // // // // // // // // // // // // #######
// // // // // // // // // // // // // // // #########

// // // // // // // // // // // // // // // let temp = ''
// // // // // // // // // // // // // // // for(let i = 0; i < 10; i+2){
// // // // // // // // // // // // // // //     temp += '#'
// // // // // // // // // // // // // // //     console.log(temp)
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // for(let i = 1; i < 10; i+=2) {
// // // // // // // // // // // // // //     let temp = '  ';
// // // // // // // // // // // // // //     for(let z = 0; z < i; z++) {
// // // // // // // // // // // // // //         temp += '#';
// // // // // // // // // // // // // //         for(let j = 0; j < i; j++) {
// // // // // // // // // // // // // //         temp += '#';
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     console.log(temp);
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // for (let i = 0; i < 6; i++) {
// // // // // // // // // // // // //     var output = '';
// // // // // // // // // // // // //     for (let j =0; j < 6 - i; j++) output += ' ';
// // // // // // // // // // // // //     for (let k = 0; k <= i; k++) output += '# ';
// // // // // // // // // // // // //     console.log(output);  
// // // // // // // // // // // // // } 

// // // // // // // // // // // // for (let i = 0; i < 6; i++) {
// // // // // // // // // // // //     var output = '';
// // // // // // // // // // // //     for (let j =0; j < 6 - i; j++) output += ' ';
// // // // // // // // // // // //     for (let k = 0; k <= i; k++) output += '# ';
// // // // // // // // // // // //     console.log(output);  
// // // // // // // // // // // // } 

// // // // // // // // // // // for (let i = 1; i <= 5; i++) {
// // // // // // // // // // //     let temp = '';
// // // // // // // // // // //     for (let j = 1; j <= 5 - i; j++) {
// // // // // // // // // // //         temp += ' '; // Menambahkan spasi sebelum karakter '#'
// // // // // // // // // // //     }
// // // // // // // // // // //     for (let k = 1; k <= i; k++) {
// // // // // // // // // // //         temp += '#'; // Menambahkan karakter '#'
// // // // // // // // // // //     }
// // // // // // // // // // //     console.log(temp);
// // // // // // // // // // // }


// // // // // // // // // // for (let i = 1; i <= 5; i++) {
// // // // // // // // // //     let temp = '';
// // // // // // // // // //     for (let j = 1; j <= 5 - i; j++) {
// // // // // // // // // //         temp += ' '; // Menambahkan spasi sebelum karakter '#' sesuai dengan jumlah baris
// // // // // // // // // //     }
// // // // // // // // // //     for (let k = 1; k <= 2 * i - 1; k++) {
// // // // // // // // // //         temp += '#'; // Menambahkan karakter '#' sebanyak (2 * i - 1) get bilangan ganjil
// // // // // // // // // //     }
// // // // // // // // // //     console.log(temp);
// // // // // // // // // // }


// // // // // // // // // const training = ["Enigma", "Camp", "Code", "Node"];
// // // // // // // // // let size = training.length;
// // // // // // // // // console.log(size)

// // // // // // // // const name1 = ["Cecilie", "Lone"];
// // // // // // // // const name2 = ["Emil", "Tobias", "Linus"];
// // // // // // // // const name3 = ["Robin", "Morgan"];
// // // // // // // // const students = name1.concat(name2, name3);

// // // // // // // // console.log(students)

// // // // // // // function name(value) {
// // // // // // //     const nameVar = [value]
// // // // // // //     return nameVar
// // // // // // //   }

// // // // // // //   console.log(name(["budi","dayat","hamid","dodi","farhan"]));

// // // // // // const camp = (value) ... {
// // // // // //     const campFunct = value;
// // // // // //     const campInd = arrayFunct[3];
// // // // // //     return campInd;
// // // // // //   }
// // // // // // console.log(camp(["Enigma", "Camp", "Code", "Node","Javascript"]));

// // // // // const student = (value) => {
// // // // //     const studentVar = value
// // // // //     const arraySlice = studentVar.slice(1);
// // // // //     return studentVar
// // // // // }
// // // // // console.log(student(["budi","dayat","hamid","dodi","farhan"]));

// // // // const nameArray = (value) => {
// // // //     const nameVar = ["Bagas","Agil","Doni"]
// // // //     return nameVar
// // // //   }

// // // //   console.log(nameArray)

// // // function nameArray(value) {
// // //     const nameIndx = value.map((newName)=>newName[0]);
// // //     return nameIndx;
// // //   }

// // // console.log(nameArray(["budi","dayat","hamid","dodi","farhan"]));

// // const numbers = [45, 4, 9, 16, 25];

// // let txt = "";
// // numbers.forEach(myFunction);

// // function myFunction(value) {
// // console.log(txt += value);
// // }




// /**
//  * Buatlah suatu function bernama laptopGpu yang menerima 2 parameter, dimana parameter itu berupa array bernama laptop dan  gpu.  sehingga ketika kode dijalankan akan mencetak output seperti berikut :
// [ '{acer dengan gpu 4050}', '{asus dengan gpu 4060}', '{axioo dengan gpu 4070}',  '{hp dengan gpu 4080}',  '{lenovo dengan gpu 4090}']
//  */


// let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];

// let gpu = [4070, 4090, 4050, 4080, 4060];


// const sortGpu = gpu.sort(a-b)
// const laptopGpu = (laptop, gpu) => {
//     const laptopGpu = laptop.map((value, index) => {
//         return `${value} dengan gpu ${gpu[index]}`
//     })
//     return laptopGpu
// }
// console.log(laptopGpu(laptop,gpu));

let laptop = ["asus", "lenovo", "macbook", "acer", "hp", "axioo"];

let gpu = [4070, 4090, 4050, 4080, 4060, 4444];

// const laptopGpu = (valLap, valGpu) => {
//     valLap.sort()
//     valGpu.sort()
//     let result = []

//     for (let i = 0; i < valLap.length && i < valGpu.length; i++) {
//         result.push(`${valLap[i]} dengan gpu ${valGpu[i]}`)
//     }
//     return {result}
// }

const laptopGpu = (valLap, valGpu) => {
    valLap.sort();
    valGpu.sort();
    let result = [];

    for (let i = 0; i < valLap.length && i < valGpu.length; i++) {
        result.push(`{${valLap[i]} dengan gpu ${valGpu[i]}}`);
    }
}

console.log(laptopGpu(laptop, gpu));


// console.log(laptop.sort())
// console.log(gpu.sort())

