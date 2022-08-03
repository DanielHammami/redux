// updating arrays
const numbers = [1, 2, 3]

const index = numbers.indexOf(2)
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
]
console.log("added => ", added)

const removed = numbers.filter(n => n !== 2)
console.log("removed => ", removed)

const updating = numbers.map(n => n === 2 ? 20 : n)
console.log("updating => ", updating)