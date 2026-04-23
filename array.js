// let tourist = ['cox-bazar', 'sajek', 'bandorban'];
// tourist.push('chottogram');
// tourist.push('Dhaka', 'Shylet');

// tourist.pop();
// console.log(tourist);


// // Problem: Find Highest Scorer
// function highestScorer(students) {
//     if (!Array.isArray(students)) {
//         return "Invalid";
//     }
//     let maxMarks = -Infinity;
//     let topper = "";

//     for (let student of students) {
//         if (student.marks > maxMarks) {
//             maxMarks = student.marks;
//             topper = student.name;
//         }
//     }
//     return topper
// }
// console.log(
//     highestScorer([
//         { name: "Rahim", marks: 75 },
//         { name: "Karim", marks: 85 },
//         { name: "Salam", marks: 80 }
//     ])
// ); // Karim


// function removeDuplicate(arr) {
//     if (!Array.isArray(arr)) {
//         return "Invalid"
//     }
//     let unique = [];
//     for (let num of arr) {
//         if (!unique.includes(num)) {
//             unique.push(num)
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));



// // Problem: Password Validator
// function isValidPassword(password) {
//     if (typeof password !== "string") {
//         return "Invalid";
//     }
//     if (password.length < 8) {
//         return "Invalid"
//     }
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNumber = false;

//     for (let char of password) {
//         if (char >= 'A' && char <= "Z") {
//             hasUpper = true;
//         }
//         else if (char >= 'a' && char <= 'z') {
//             hasLower = true;
//         }
//         else if (char >= '0' && char <= '9') {
//             hasNumber = true;
//         }
//     }
//     if (hasUpper && hasLower && hasNumber) {
//         return 'Valid';
//     }
//     else {
//         return "Invalid";
//     }
// }
// console.log(isValidPassword("Pass1234"));
// console.log(isValidPassword('password'));


function cartTotal(cart) {
    // validation
    if (!Array.isArray(cart)) {
        return "Invalid";
    }

    let total = 0;

    for (let item of cart) {
        if (typeof item.price !== "number" || typeof item.quantity !== "number") {
            return "Invalid";
        }

        total += item.price * item.quantity;
    }

    return total;
}
console.log(
  cartTotal([
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Pant", price: 1000, quantity: 1 }
  ])
); // 2000