function longestWord(str){
    let longestWord="";
    const words=str.split(" ")

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord=word;
        }
    }

return longestWord
}

console.log(longestWord("I work up today !"))
console.log(longestWord("I work up staight !"))