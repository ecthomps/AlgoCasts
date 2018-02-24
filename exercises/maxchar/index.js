// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    maxChar = "";
    max = 0;
    charObj = {};

    for(let char of str)
        charObj[char] = charObj[char] + 1 || 1;

    for(let char in charObj){
        if(max < charObj[char]){
            max = charObj[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;

//Solution 1

// function maxChar(str) {

    // const charMap = {};
    // let max = 0;
    // let maxChar = '';

    // charMap[str] = charMap[str] + 1 || 1;

    // for (let char in charMap){
    //     if(charMap[char] > max){
    //         max = charMap[char];
    //         maxChar = char;
    //     }
    // }
    // return maxChar;
    
// }


//Solution 2

// function maxChar(str) {

//     const charMap = {};
//     let max = 0;
//     let maxChar = '';

//     for(let char of str){
//         if(!charMap[char]){
//             charMap[char] = 1;
//         } else{
//             charMap[char]++;
//         }
//     }

//     for (let char in charMap){
//         if(charMap[char] > max){
//             max = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }
