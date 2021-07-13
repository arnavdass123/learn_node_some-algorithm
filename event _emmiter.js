const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (n1, n2) => {
    console.log('tutorial event has occured', n1 + n2)
})

eventEmitter.emit('tutorial', 1, 2)

