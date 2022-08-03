import { compose, pipe } from "lodash/fp"

let input = "    JavaScript    "
let output = "<div>" + input.trim() + "</div>"

const trim = str => str.trim()
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

const transform = pipe(trim, toLowerCase, wrap("div"))
console.log(transform(input))

// pure function
function myFunction(number) {
    return number * 2
}

// immutability
const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
}
// const updated = Object.assign({}, person, { name: "Bob" })
const updated = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
}
console.log("Person => ", person)
console.log("Updated => ", updated)