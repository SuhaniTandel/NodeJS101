// //Q1
// // //Folder space_project created synchronously
// const fs = require("fs");
// fs.mkdirSync("space_project");
// fs.rmdirSync("space_project");

// //Folder space_project created Asynchronously
// fs.mkdir("space_project",(err)=>{
//     if(err){
//         throw err
//     }  
// })

//Q2
//create a file log.txt and add the line -using synchronously 
//const fs = require("fs");
// fs.writeFileSync('./space_project/log.txt', 'ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.');

// // create a file log.txt and add the line -using Asynchronously 
// let data='ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.'
// fs.writeFileSync('./space_project/log.txt', data,(err)=>{
//     if(err){
//         throw err
//     }  
// })

//Q3
//create a file log.txt and add the line -using synchronously 
// const fs = require("fs");
// fs.writeFileSync('space_project/log.txt', "ISRO has started working on Gaganyaan.");
// console.log('File content replaced synchronously.');

// // create a file log.txt and add the line -using Asynchronously 
// const data2 = "ISRO has started working on Gaganyaan.";
// fs.writeFile('space_project/log.txt', data2, (err) => {
//     if (err) 
//         throw err;
//     console.log('File content replaced asynchronously.');  
// })  


//Q4
//create a file log.txt and add the line -using synchronously
//  const fs = require("fs");
// fs.appendFileSync('space_project/log.txt', "\n  The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.");
// console.log('Content appended synchronously.');

// // create a file log.txt and add the line -using Asynchronously
//  const data3 = " \n The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
//  fs.appendFile('space_project/log.txt', data3, (err) => {
//      if (err) 
//         throw err;
//      console.log('Content appended asynchronously.');
// })

//Q5
//create a file log.txt and add the line -using synchronously
// const fs = require("fs");
// fs.renameSync('space_project/log.txt', 'space_project/update.txt');
// console.log('File renamed synchronously.');

// // create a file log.txt and add the line -using Asynchronously
// fs.rename('space_project/log.txt', 'space_project/update.txt', (err) => {
//     if (err)
//          throw err;
//     console.log('File renamed asynchronously.');
// })

//Q6
//create a file log.txt and add the line -using synchronously
// const fs = require("fs");
// const data = fs.readFileSync('space_project/update.txt', 'utf8');
// console.log('Data read synchronously:', data);
// console.log('We are excited');

// // create a file log.txt and add the line -using Asynchronously
// fs.readFile('space_project/update.txt', 'utf8', (err, data) => {
//     if (err) 
//     throw err;
//     console.log('Data read asynchronously:', data);
//     console.log('We are excited');
// })

//Q7
//create a file log.txt and add the line -using synchronously
// const fs = require("fs");
// fs.unlinkSync('space_project/update.txt');
// console.log('File deleted synchronously.');

// // create a file log.txt and add the line -using Asynchronously
// fs.unlink('space_project/update.txt',(err)=>{
//     if(err){
//         throw err
//     }
//     console.log('File deleted asynchronously.')
// })

//Q8
//create a file log.txt and add the line -using synchronously
// const fs = require("fs");
// fs.rmdirSync('space_project');
// console.log('Folder deleted synchronously.');


// // create a file log.txt and add the line -using Asynchronously
// fs.rmdir('space_project',(err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Folder deleted asynchronously.')
// })