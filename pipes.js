const fs = require('fs')
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt', 'utf8')
const writeStream = fs.createWriteStream('example1.txt.gz')
readStream.pipe(gzip).pipe(writeStream)