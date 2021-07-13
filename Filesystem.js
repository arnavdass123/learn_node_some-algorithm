const fs = require('fs');

// const path = require('path')
// create a file:
// fs.writeFile('example.txt', 'this is an example', err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("file created success fullly")
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err)
//                 console.log(err)
//             else
//                 console.log(file)
//         })
//     }
// });

// to rename file:
// fs.rename('example2kjvdhjw.txt', 'example.txt', err => {
//     if (err)
//         console.log(err);
//     else
//         console.log('file successfully created ')
// })

// append data to file :
// fs.appendFile('example.txt', '\nsome data will be append ', (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log('successfully appended data to the file')
// })

fs.unlink('example.txt', (err) => {
    if (err)
        console.log(err)
    else
        console.log('deleted the items ')
})