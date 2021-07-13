// npm modules:
// const color = require("cli-color");
// console.log(color.red("hello node js"))

// local module:
// const auth=require('./auth')
// auth.login("arnav bhai")

const path = require('path')
// console.log('folder name',path.dirname(__filename))
// console.log('folder name',path.basename(__filename))

// extension:


// file system:
const fs = require('fs')

const data = fs.writeFile(path.join(__dirname, 'test', 'text.txt'), '1', (err) => {
    if (err) {
        throw err
    }
    console.log("file created")

    fs.appendFile(path.join(__dirname, 'test', 'text.txt'), 'more data\n', (err) => {
        if (err) {
            throw err
        }
        else {
            console.log("file appended")
        }

    })

})
// read file:
fs.readFile(path.join(__dirname, 'test', "text.txt"), 'utf-8', (err, data) => {
    if (err) {
        throw err

    }
    else {
        // const content=Buffer.from(data)
        // console.log(content.toString())
        console.log(data)
    }
})

// evnts module
const Emitter = require('events')
const { register } = require('./auth')

// const myEmitter = new Emitter()
// myEmitter.on('somename', (data) => {
//     console.log(data)
// })

// myEmitter.emit('somename', {
//     name: 'arnav',
// })

class Auth extends Emitter {
    register(username) {
        console.log('register successfully')
        this.emit('registered', username)
    }
}
const auth = new Auth()
auth.register('arnav')


module.exports = data











// make directory
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("folder created...")
// })

// create a file




