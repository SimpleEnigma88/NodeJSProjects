const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (nameObj, age) => {
    console.log(`${nameObj.name} is ${age} years old`);
});

customEmitter.on('response', () => {
    console.log(`Employee details received`);
});
// First emit parameter is event name, additional parameters are passed to the listener as arguments to be used as you see fit.
customEmitter.emit('response', { name: 'John' }, 34); // Order matters! Emitting before listening will not work