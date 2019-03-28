function shuffleArr (arr) {
    return arr.sort(randomCompare)
}

function randomCompare(a,b) {
    // ternary
    return (Math.random() > 0.5)
        ? 1
        : -1
}


module.exports = shuffleArr