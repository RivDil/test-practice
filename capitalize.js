function capitalize(str){
    const firstChar = str.slice(0,1);
    const restStr = str.slice(1)
    const upperchar = firstChar.toUpperCase()
    return upperchar.concat(restStr);
}

module.exports = capitalize;
