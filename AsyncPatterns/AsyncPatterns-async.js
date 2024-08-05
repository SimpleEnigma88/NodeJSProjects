const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};

const start = async () => {
    try {
        const first = await getText('./first.txt');
        const second = await getText('./second.txt');
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();
