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


// function onlyCharacter(str) {
//     // validation
//     if (typeof str !== "string") {
//         return "Invalid";
//     }

//     // remove spaces + uppercase
//     let result = str.split(" ").join("").toUpperCase();

//     return result;
// }
// const result = onlyCharacter('Hello we have a plain');
// console.log(result);



function bestTeam(player1, player2) {
    // validation
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    // total calculation
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

    // compare
    if (total1 < total2) {
        return player1.name;
    } else if (total2 < total1) {
        return player2.name;
    } else {
        return "Tie";
    }
}
console.log(
    bestTeam(
        { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
        { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
    )
); // Brazil

console.log(
    bestTeam(
        { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
        { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
    )
); // Tie

console.log(
    bestTeam(
        { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
        { name: "France", foul: 10, cardY: 2, cardR: 1 }
    )
); // Germany

console.log(
    bestTeam(
        { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
        "France"
    )
); // Invalid