console.log("cat")

const d = require('./data.json')
const shuffleArr = require('./shuffle')


const sorted = shuffleArr(d.wait)


console.log(sorted)


