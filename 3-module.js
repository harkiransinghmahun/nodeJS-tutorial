// Modules - encapsulated code (only share minimum code and do not share the sensitive information)
// CommonJS - every file is a module (by default)

// For require always start with ./
// Module exports and requires
const names = require("./4-firstModule") // This will execute the 4-firstModule file
const func = require("./5-secondModule")
const altExports = require("./6_alternativeExportWays")

// console.log(names)
// console.log(func)
// console.log(altExports)

// console.log(module.children[0].exports)
// console.log(module.children[1].exports)
// console.log(module.children[2].exports)

// func.sayHi("Varad")
// func.sayHi(names.harkiran)
// func.sayHi(names.shay)



// Requiring a module will run the file that is being required

const sum = require("./7-mindGrenade")