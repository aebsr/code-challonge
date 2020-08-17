const input = 'a,b$c'
const expected = 'c,b$a'
const regex = /^[A-Za-z0-9 ]+$/
let actual

// convert string to array
let arr = Array.from(input)

// filter out special chars, sort
let letters = arr.filter(letter =>
 regex.test(letter)
).sort().reverse()

// put special chars back
for (i=0;i<arr.length;i++) {
 let char = arr[i]
 if (!regex.test(char)) {
  letters.splice(i,0, char)
 }
}

// stringify
actual = letters.join('')

// test
console.log(expected === actual)