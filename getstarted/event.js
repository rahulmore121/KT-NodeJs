// Events Module
// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
// To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:
// The EventEmitter Object
// You can assign event handlers to your own events with the EventEmitter object.
// In the example below we have created a function that will be executed when a "scream" event is fired.
// To fire an event, use the emit() method.

var EventEmitter = require('events');
var event = new EventEmitter();

//Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// event.on('scream', myEventHandler);

// //Fire the 'scream' event:
// event.emit('scream');




event.on('sayHello',()=>{
    console.log("hello");
    });
event.on('sayHello',()=>{
        console.log("hello world");
        });
event.on('sayHello',()=>{
        console.log("Sayhello");
            });
event.emit("sayHello")







event.on("checkstatus",(sts,msg)=>{
    console.log(`the status code is ${sts} and message is ${msg}`);
})
event.emit("checkstatus",200,"ok")





let m=0;
event.once('FireOnce',()=>{
    console.log(++m);
        });
event.emit("FireOnce")
event.emit("FireOnce")