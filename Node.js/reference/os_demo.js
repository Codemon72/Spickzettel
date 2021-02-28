
const os = require('os');

// Platform
console.log(os.platform()); // -> 'darwin' for mac, 'win32' for windows, etc

// CPU Arch
console.log(os.arch()); // -> x64

// CPU Core Info
console.log(os.cpus()); // object with loads of info

// Free memory
console.log(os.freemem()); // a long number

// Total memory
console.log(os.totalmem()); // a bigger number

// Home dir
console.log(os.homedir()); // -> /Users/Codemon72

// Uptime
console.log(os.uptime()); // number of seconds your system has been running