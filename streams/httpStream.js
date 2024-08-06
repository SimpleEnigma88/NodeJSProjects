let http = require('http');
let fs = require('fs');

http
    .createServer((req, res) => {
        // const text = fs.readFileSync('./streams/bigFile.txt', 'utf8');
        // res.end(text);
        const fileStream = fs.createReadStream('./streams/bigFile.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe(res);
        });
        fileStream.on('error', (err) => {
            res.end(err);
        });
    })
    .listen(5000);