// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

// let array = [43, 22, 4, 1, 12, 6, 86, 3, 190, 0]
// let positive = element => {
//     return element > 0
// }
// console.log(array.every(positive))

// let array = [43, 22, 4, 1, 12, 6, 86, 3, 190, 0]
// let value = array.every((item) => {
//     if (item > 0) {
//         return true
//     }
// })
// console.log(value)

let array = [43, 22, 4, 1, 12, 6, 86, 3, 190]
let result = array.every((element) => {
    return element > 0
})
console.log(result)