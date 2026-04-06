const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversed = [];

for (let i = colors.length - 1; i >= 0; i--) {
    reversed.push(colors[i]);
}

console.log(reversed);


const numbers = [12, 98, 5, 41, 23, 78, 46];

let evenNumbers = [];

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);

var number = ['Tom', 'Tim', 'Tin', 'Tik']

let result = [];
for (let i of number) {
    result = result + i
}
console.log(result);