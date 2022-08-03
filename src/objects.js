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