// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

// let array = [43, 22, 4, 1, 12, 6, 86, 3, 190]
// let even = ((element) => {
//     if (element%2 === 0)
//         return element
// })
// console.log(array.some(even))

let array = [43, 22, 4, 1, 12, 6, 86, 3, 190]
let even = element => {
    return element%2 === 0
}

console.log(array.some(even))