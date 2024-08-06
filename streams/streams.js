const { createReadStream } = require('fs');

const stream = createReadStream('./streams/bigFile.txt', { highWaterMark: 110000, encoding: 'utf8' }); // highWaterMark is the size of the buffer in bytes

stream.on('data', (result) => {  // Streams allow us to read the file in 'chunks' of data
    console.log(result);
});

stream.on('error', (error) => {
    console.error(error);
});


// Output without string encoding; the output is a buffer in chunks of 65536 bytes(64KB)
/*
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 32 21 0a 48 65 6c 6c 6f ... 65486 more bytes >
    <Buffer 64 20 33 37 30 32 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 37 30 33 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 37 30 34 21 0a 48 65 6c 6c 6f 20 ... 65486 more bytes >
        <Buffer 72 6c 64 20 37 33 34 33 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 33 34 34 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 33 34 35 21 0a 48 65 6c 6c ... 65486 more bytes >
            <Buffer 64 20 31 30 39 33 32 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 30 39 33 33 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 30 39 33 34 21 0a 48 65 6c ... 65486 more bytes >
                <Buffer 38 31 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 34 33 38 32 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 34 33 38 33 21 0a 48 65 6c 6c 6f 20 57 6f ... 65486 more bytes >
                    <Buffer 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 37 38 33 31 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 37 38 33 32 21 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 ... 41160 more bytes > */