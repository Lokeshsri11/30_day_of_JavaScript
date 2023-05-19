// Data types 
// 1. Primitive data type
// 2. Non-primitive data-type


//Primitive Data Types
let word = 'Lokesh'  //We can't modify this stored variable 
word[0] = 'Y'

let numOne = 2
let numTwo = 2
console.log(numOne == numTwo)    //true 

let js = 'JavaScript'
let py = 'Python'
console.log(js == py)   //false


//Non-primitive Data Types
let num = [1, 2, 3]
num[0] = 10
console.log(num)   //[10.2.3]

let nums = [1, 2, 3]
let numse = [1, 2, 3]
console.log(nums == numse)   //false

//Numbers
let age = 21
const gravity = 9.81  //we use const foe non-changing values

//Math object
const PI = Math.PI
console.log(PI)

console.log(Math.min(3, 1, 5, -6))  // -6 find minimum value
console.log(Math.max(3, 2, 6, 5))   // 6  find maximum value 

const randNum = Math.random()
console.log(randNum)               //create random number between 0 to 0.99999

//Square root
console.log(Math.sqrt(100))    // 10

//Power
console.log(Math.pow(2, 3))      //8

//Strings
let space = ''   // an empty space string 
let firstNames = 'Lokesh'

//String concatenation
// let fullName = firstName + space + lastName;
// console.log(fullName)

//Paragraph
const Paragraph = 'hufwfibciicigiliivieclefefgefugeufeuruevvuyvueguve'
console.log(Paragraph)


//Template literals
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)

// length
let ps = 'javascript'
console.log(ps.length)   //10

//Let us access different character in "javascript" string
let string = 'javascript'
let firstLetter = string[0]
console.log(firstLetter)

//toUpperCase()
let uc = 'Lokesh'
console.log(uc.toUpperCase())

//toLoweCase()
let lc = 'LOKESH'
console.log(lc.toLowerCase())

// substr()
let subs = 'lokesh'
console.log(subs.substr(3, 2))

// Substring()
let ss = 'lokesh'
console.log(ss.substring(0, 4))

//split()
let sl = 'Iam Lokesh Srivastava'
console.log(sl.split())
console.log(sl.split(' '))

//trim()
let tr = '   Iam Lokesh Srivastava    '
console.log(tr)
console.log(tr.trim(' '))

//include()
// let inc = 'Iam lokesh srivastava'
// console.log(inc.includes(lokesh))  //true
// console.log(inc.includes(Lokesh))  //false - it is a case sensitive 


//replace
let rep = 'Lokesh srivastava'
console.log(rep.replace('srivastava', 'sri'))

//charAt()
let chr = '30 Days Of JavaScript'
console.log(chr.charAt(0))        // 3

let lastIndex = chr.length - 1
console.log(chr.charAt(lastIndex)) // t


//charCodeAt()
let code = '30 Days Of JavaScript'
console.log(code.charCodeAt(3))        // D ASCII number is 68

let LastIndex = code.length - 1
console.log(code.charCodeAt(LastIndex)) // t ASCII is 116


//indexOf()
let ind = '30 Days Of JavaScript'

console.log(ind.indexOf('D'))          // 3
console.log(ind.indexOf('Days'))       // 3
console.log(ind.indexOf('days'))       // -1
console.log(ind.indexOf('a'))          // 4
console.log(ind.indexOf('JavaScript')) // 11
console.log(ind.indexOf('Script'))     //15
console.log(ind.indexOf('script'))     // -1


//concat()
let con = '30'
console.log(con.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland

//starsWith
let star = 'Love is the best to in this world'

console.log(star.startsWith('Love'))   // true
console.log(star.startsWith('love'))   // false
console.log(star.startsWith('world'))  // false

//parseInt
//parseFloat


