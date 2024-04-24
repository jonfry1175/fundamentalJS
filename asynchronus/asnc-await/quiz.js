function findName(){
    setTimeout(()=>{
        console.log("find name");
    },4000)
}

function sortName(){
    setTimeout(()=>{
        console.log("sort name");
    },3000)
}

function manipulatingName(){
    setTimeout(()=>{
        console.log("manipulating name");
    },2000)
}

function changingName(){
    setTimeout(()=>{
        console.log("changing name");
    },1000)
}

async function nameChange (){
    try{
    const resultFind = await findName();
    const resultSort = await sortName();
    const resultManipulate = await manipulatingName();
    const resultChanging = await changingName();
    }catch(error){
        console.log(error);
    }
}

nameChange()

