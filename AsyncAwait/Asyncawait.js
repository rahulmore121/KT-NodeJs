// Async await

// function that return promise should be always written as async
//asynch function always return promise



async function weather(){
let Delhiweather=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("27 degreee")
    },2000)
});

let Bangloreweather=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("19 degreee")
    },5000)
});
// Delhiweather.then((data)=>
// console.log("hello i am delhi"+data))
// console.log("hello world");
// Bangloreweather.then((data)=>
// console.log("hello i am banglore "+ data))

console.log("fetching delhi weather ")
let del=await Delhiweather;
console.log(" delhi weather fetched")
console.log("fetching Banglore weather ")
let ban=await Bangloreweather;
console.log(" Banglore weather fetched")
return [del,ban]



}
async function fun(){
    return "i am a funny function";
}

async function display(){
    let b=await fun()
   let a= await weather()
    return [a,b]
}


let a=display()
a.then(data=>console.log(data))




//console.log(a)//return promise