// The Node.js file system module allows you to work with the file system on your computer.
// To include the File System module, use the require() method:
// Common use for the File System module:
// Read files
// Create files
// Update files
// Delete files
// Rename files

const file=require('fs')
const http=require('http')
const url=require('url')



//write file        
//The fs.writeFile() method is used to write files on your computer.

file.writeFile('index.txt','i am writing data into file ',(err)=>{
    if(err){
        throw console.err;
    }
    console.log("data saved");
})




//appending the file

// The fs.appendFile() method is used to append files on your computer.
var fs = require('fs');

fs.appendFile('index.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

// Read Files
// The fs.readFile() method is used to read files on your computer.
file.readFile('index.txt',(err,data)=>{
    console.log(data.toString());
    //console.log(err);
})


// Delete Files
// To delete a file with the File System module,  use the fs.unlink() method.
// The fs.unlink() method deletes the specified file:

// file.unlink('index.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });
