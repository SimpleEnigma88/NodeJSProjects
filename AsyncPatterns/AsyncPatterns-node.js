const { readFile, writeFile } = require('fs').promises; // Promisified version of the fs module

const start = async () => {
    try {
        const first = await readFile('./first.txt', 'utf8');
        const second = await readFile('./second.txt', 'utf8');
        await writeFile('./result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, { flag: 'a' }); // Flag 'a' appends to the file
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();
