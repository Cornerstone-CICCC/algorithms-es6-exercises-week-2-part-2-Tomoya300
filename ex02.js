// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

let array = [3, 50, 23, 56, 130, 2, 19]

let search = array.find((element) => {
    return element > 10
})
console.log(search)




// array.forEach((item) => {
//     if (item > 10) {
//         console.log(item) 
//     }
// })


// let arr2 = [1, 2, 3, 4, 5, 6]
// arr2.forEach((item) => {
//     return item
// })
