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


function removeDuplicate(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid"
    }
    let unique = [];
    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num)
        }
    }
    return unique;
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));