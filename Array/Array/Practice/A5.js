// Given two arrays, write a program to merge and sort them.
let a = [2, 3, 1, 4]
let b = [6, 7, 9, 5]

function merge(a, b) {
    let c = [...a, ...b]

    for (let i = 0; i < c.length; i++) {
        for (let j = i + 1; j < c.length; j++) {
            if (c[i] > c[j]) {
                [c[i], c[j]] = [c[j], c[i]]
            }
        }
    }
    return c
}

console.log(merge(a, b))