// to make a directory or folder:
const fs = require('fs')
fs.mkdir('tutorial', err => {
    if (err)
        console.log(err)
    else
        fs.writeFile('./tutorial/example.txt', '123', (err) => {
            if (err)
                console.log(err)
            else
                console.log('successfylly created a file')
        })
    //     console.log('folder successfully created and removing folder')
    // fs.rmdir('tutorial', err => {
    //     if (err)
    //         console.log('successfully deleted the folder')

})



