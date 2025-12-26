// Write a program to count vowels and consonants in a string.
function count(string) {
    let vowels = 0
    let strings = 0
    let v="aeiou"
    for (let value of string) {
        if (v.includes(value)) {
            vowels++
        }
        else if(v.match(/[a-z]/)){
            strings++
        }
    }
    return {vowels, strings}
}

console.log(count("i am a gamer bro"))