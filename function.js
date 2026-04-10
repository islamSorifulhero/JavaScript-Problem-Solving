// function fanOffKor() {
//     console.log('bosa theke uthe dara');
// }
// fanOffKor();

// function square(Number) {
//     console.log(Number);
//     console.log("value of the number:", Number);
// }
// square(4)


// function add(price1, price2) {
//     const total = price1 + price2;
//     return total;
// }
// const bill = add(5, 80)
// console.log(bill);

// function numbers(num1, num2, num3, num4) {
//     return num1 + num2 + num3 + num4;
// }
// const result = numbers(1, 2, 3, 4)
// console.log(result);


// function oddNumber(num) {
//     if (num % 2 === 0) {
//         return num / 2;
//     }
//     else {
//         return num * 2;
//     }
// }
// const result = oddNumber(10);
// console.log(result);


// function make_avg(arr, size) {
//     let sum = 0;
//     for (let i = 0; i < size; i++) {
//         sum += arr[i];
//     }
//     return sum / size;
// }
// const numbers = [10, 20, 30, 40, 100]
// const result = make_avg(numbers, numbers.length)
// console.log(result);


function count_zero(str) {
    let count = 0;
    for (let char of str) {
        if (char === '0') {
            count++;
        }
    }
    return count;
}
const result = count_zero('1010010');
console.log(result);