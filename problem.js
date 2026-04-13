// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9 / 5) + 32;
//     return fahrenheit;
// }
// var result = celsiusToFahrenheit(30)
// console.log(result);


// ///////22222222222
// function countValue(str){
//     let count = 0;
//     let vowels = 'aeiouAEIOU';

//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countValue('hello'));
// console.log(countValue('Bangladesh'));



// ///////////33333333333333333///////
// function findLongestWord(sentence) {
//     let words = sentence.split(" ");
//     let longest = "";

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// let text = "I am learning Programming to become a programming";
// console.log(findLongestWord(text));


////444444444444////
// function getRandomNumber() {
//     return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
// }
// console.log(getRandomNumber());


//5555555555///////
function lowest(numbers) {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
const heights = [212, 312, 143, 54, 243, 122, 133, 422, 333, 233];
console.log(lowest(heights));