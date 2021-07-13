// read directory
const fs =require('fs')
fs.readdir('example', (err, files) => {
    if (err)
        console.log(err)
    else
        for (let file of files) {
            const fs = require('fs')
            fs.unlink('./example/' + file, (err) => {
                if (err)
                    console.log(err)
                else
                    console.log('successfully deleted file')
            })
        }
})