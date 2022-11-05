// Asynchronous task
// Downside is that the use of call backs makes the code messy and unreadable
// Alternative is to use async await

const {readFile, writeFile} = require('fs')
const { setMaxIdleHTTPParsers } = require('http')

console.log('Start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if (err) {
            console.log(err)
            return
        }

        const second = result
        writeFile('./content/result-async.txt', `Here is the result of async operations ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("Done with this task")

        } )

    })

    // console.log(result)

})
console.log("Starting with the next task")