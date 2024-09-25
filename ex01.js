// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. Write the code to sort this array in ascending order.

let array = [1, 30, 4, 25, 10000]

function compareFunc(a, b) {
    if (a > b) return 1
    if (a < b) return -1
    if ( a === b) return 0
}

array.sort(compareFunc)
console.log(array)