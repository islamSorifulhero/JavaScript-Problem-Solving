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


// function cartTotal(cart) {
//     // validation
//     if (!Array.isArray(cart)) {
//         return "Invalid";
//     }

//     let total = 0;

//     for (let item of cart) {
//         if (typeof item.price !== "number" || typeof item.quantity !== "number") {
//             return "Invalid";
//         }

//         total += item.price * item.quantity;
//     }

//     return total;
// }
// console.log(
//   cartTotal([
//     { name: "Shirt", price: 500, quantity: 2 },
//     { name: "Pant", price: 1000, quantity: 1 }
//   ])
// ); // 2000


// function longestWord(sentence) {
//     // validation
//     if (typeof sentence !== "string") {
//         return "Invalid";
//     }

//     let words = sentence.split(" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }
// console.log(longestWord("I am learning programming")); // programming


// function majorityElement(arr) {
//     // validation
//     if (!Array.isArray(arr)) {
//         return "Invalid";
//     }

//     let countMap = {};

//     // count frequency
//     for (let num of arr) {
//         countMap[num] = (countMap[num] || 0) + 1;
//     }

//     let n = arr.length;

//     // check majority
//     for (let key in countMap) {
//         if (countMap[key] > n / 2) {
//             return Number(key);
//         }
//     }

//     return "No Majority";
// }
// console.log(majorityElement([2, 2, 1, 2, 3])); // 2
// console.log(majorityElement([1, 2, 3, 4]));    // No Majority




// function twoSum(arr, target) {
//     // validation
//     if (!Array.isArray(arr)) {
//         return "Invalid";
//     }

//     let map = {};

//     for (let i = 0; i < arr.length; i++) {
//         let needed = target - arr[i];

//         if (map[needed] !== undefined) {
//             return [map[needed], i];
//         }

//         map[arr[i]] = i;
//     }

//     return "Not Found";
// }

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([1, 2, 3], 7)); // Not FoundF

function diagonalSum(matrix) {
    // validation
    if (!Array.isArray(matrix)) {
        return "Invalid";
    }

    let n = matrix.length;

    for (let row of matrix) {
        if (!Array.isArray(row) || row.length !== n) {
            return "Invalid";
        }
    }

    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += matrix[i][i];
    }

    return sum;
}
console.log(diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); // 15