// File system operations.

// Resad, write, delete, and manage files.


const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, Node.js!');

// Read the file
const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);