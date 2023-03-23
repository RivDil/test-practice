function analyzeArray(arr){
    const details = {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    return details
}
module.exports = analyzeArray;