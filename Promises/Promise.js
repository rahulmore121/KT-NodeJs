// A Promise has four states: 
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

// A promise can be created using Promise constructor.
// Syntax
// var promise = new Promise(function(resolve, reject){
//      //do something
// });

// Promise Consumers
// Promises can be consumed by registering functions using .then and .catch methods.

// 1. then() 
// then() is invoked when a promise is either resolved or rejected. It may also be defined as a career which takes data from promise and further executes it successfully.

// 2. catch() 

// catch() is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.













function addition(a,b){
    return a+b;
}

function add(){
   let a=10;
   let b=20;
    return new Promise((res,rej)=>{
        if(a!=0 && b!=0){
            let sum=addition(a,b)
            res("the addition is "+ sum)
        }
            rej("Value of a and b is invalid")
       
    });
}

add().then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
});

add()
