const letterCount = (str, chr) =>{
    let count = 0
    for(let letter of str){
        if(letter === chr){
            count++
        }
    }
    return count
}

module.exports = letterCount