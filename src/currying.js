function add(a) {
    return function(b) {
        return a + b
    }
}

add(1)(5)

const add2 = a => b => a + b