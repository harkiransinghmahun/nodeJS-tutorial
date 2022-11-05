// GLOBALS - NO WINDOW. In node there is no window object as it has been released from the browser. Cant do DOM opeations

// Node JS specific global variables
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module
// process - info about the current environment where the process is being executed


console.log(__filename)
console.log(__dirname)
 
setInterval(() => {console.log("Hello World")}, 1000)