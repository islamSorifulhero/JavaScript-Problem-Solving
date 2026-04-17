// function totalFine(fine) {
//     return fine;
// }

// const result = totalFine(405);
// console.log(result);



// function totalFine(fine){
//     let result = fine + 20;
//     return result;
// }

// const result = totalFine(405);
// console.log(result); // 425


// // Task 01///////////////////
// function totalFine(fare) {
//     if (typeof fare !== "number" || fare <= 0) {
//         return 'Invalid';
//     }
//     const result = fare + (fare * 20 / 100) + 30;
//     return result;
// }
// console.log(totalFine(200));


function onlyCharacter(str) {
    // validation
    if (typeof str !== "string") {
        return "Invalid";
    }

    // remove spaces + uppercase
    let result = str.split(" ").join("").toUpperCase();

    return result;
}
const result = onlyCharacter('Hello we have a plain');
console.log(result);