function changingAddress(data){
    setTimeout(()=>{
        if (typeof data === "number") {
            console.log("data bukan string");
        } else if (data === undefined) {
            console.log("data kosong");
        } else {
            console.log("alamat sudah di ubah");
        }
    },1000)
}

async function addressCheck (addressProp) {
    try {
    const resultChanging = await changingAddres(addressProp);
    console.log("ini result changing ",resultChanging);
    } catch (error) {
        console.log("ini error address ",error);
    }
}

addressCheck("alamat")



