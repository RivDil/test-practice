const caesar = function(str,num) {
    let regex = (/\w/g);
    let strDivided = str.split('');
    let arr = [];
    for (let i = 0; i < strDivided.length; i++){
        if (strDivided[i].match(regex)){ 
            let code = strDivided[i].charCodeAt()
            if (code >= 65 && code <= 90){
                let sum = code + (num%26);
                if (sum < 65){
                    sum += 26;
                    arr.push(String.fromCharCode(sum))
                }else if (sum > 90){
                    sum = sum-26;
                    arr.push(String.fromCharCode(sum))
                }else arr.push(String.fromCharCode(sum))
            }
            if (code >= 97 && code <= 122){
                let sum = code + (num%26);
                if (sum < 97){
                    sum += 26;
                    arr.push(String.fromCharCode(sum))
                }else if (sum > 122){
                    sum =sum- 26;
                    arr.push(String.fromCharCode(sum))
                }else arr.push(String.fromCharCode(sum))
            }
        }else{
            arr.push(str[i])
        }
    }
    return arr.join('')
};

module.exports = caesar;