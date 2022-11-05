const num1 = 5;
const num2 = 3;

function addValues(){
    console.log(`The sum is ${num1 + num2}`)
}

addValues()

// Note that we are not exporting this function or variables. However, it we require this module, then the funciton will be invoked on its own. 