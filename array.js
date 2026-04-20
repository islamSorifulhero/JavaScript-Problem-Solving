// let tourist = ['cox-bazar', 'sajek', 'bandorban'];
// tourist.push('chottogram');
// tourist.push('Dhaka', 'Shylet');

// tourist.pop();
// console.log(tourist);


// Problem: Find Highest Scorer
function highestScorer(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }
    let maxMarks = -Infinity;
    let topper = "";

    for (let student of students) {
        if (student.marks > maxMarks) {
            maxMarks = student.marks;
            topper = student.name;
        }
    }
    return topper
}
console.log(
    highestScorer([
        { name: "Rahim", marks: 75 },
        { name: "Karim", marks: 85 },
        { name: "Salam", marks: 80 }
    ])
); // Karim