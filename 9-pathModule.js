const path = require("path")

console.log(path.sep)

const filePath = path.join("/content//////", "subfolder", "text.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absoluteFilePath = path.resolve(__dirname, "content", "subfolder", "text.txt")
const absoluteFilePath2 = path.resolve(__dirname, filePath)
console.log(absoluteFilePath)
console.log(absoluteFilePath2)