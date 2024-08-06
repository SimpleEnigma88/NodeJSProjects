const { writeFileSync } = require('fs');
for (let i = 0; i < 200001; i++) {
    writeFileSync('./streams/bigFile.txt', `Hello World ${i}!\n`, { flag: 'a' });
}