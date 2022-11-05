// Built in modules

const os = require("os")

// info about current end user
const user = os.userInfo()
console.log(user)

// method returns the system up time in sec
console.log(`System uptime is ${os.uptime()/60} minutes`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemort: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS)