for (let i = 0; i < 5; i++){
    const {readFile} = require('fs')

    console.log(`started task ${i}`)
    readFile('./content/first.txt', 'utf8', (err, result) =>{
        if (err){
            console.log(err)
            return
        }
    
        console.log(result)
        console.log(`completed task ${i}`)
    
    })
    
    console.log(`starting task ${i+1}`)
}