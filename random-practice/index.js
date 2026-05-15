// const str = "javascript";
// const vowel = 'aeiouAEIOU'
// let count = 0
// for (const s of str) {
//     if (vowel.includes(s)) count++
// }
// console.log(count)


// const user = {
//     name: "Ahmad",
//     age: 22,
//     city: "Delhi"
// };

// for (const key in user) {
//     console.log(user[key])
// }

// const count = Object.keys(user).length
// console.log(count)



// const nums = [1, 2, 3, 4];
// nums.forEach((n) => console.log(n * 2))



// const nums = [1, 2, 3];

// const expectedArr = []

// nums.forEach((n) => expectedArr.push(n * 2))
// console.log(expectedArr)


// const names = ["ali", "john", "sara"];

// const upperCaseName = names.map((n) => n.toUpperCase())
// console.log(upperCaseName)


// const products = [
//     { name: "Phone", price: 1000 },
//     { name: "Laptop", price: 5000 }
// ];

// const price = products.map((p) => p.price)
// console.log(price)

// const num = [1, 2, 3]
// const output = num.map((n) => ({ value: n }))
// console.log(output)




// const nums = [1, 2, 3, 4, 5, 6];

// const evenNum = nums.filter((n) => n % 2 === 0)
// console.log(evenNum)


// const users = [
//     { name: "Ali", active: true },
//     { name: "Sara", active: false }
// ];

// const activeUser = users.filter((u) => u.active)
// console.log(activeUser)



// const nums = [1, 2, 3, 4, 5, 6];
// const evenNum = nums.find((n) => n % 2 === 0)

// console.log(evenNum)

// const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Sara" }
// ];

// const foundUser = users.find((u) => u.name === 'Ali')
// console.log(foundUser)



// const nums = [1, 2, 3, -4, 5, 6];
// const x = nums.some((n) => n < 0)
// console.log(x)


// const users = [
//     { id: 1, name: "Ali", role: 'user' },
//     { id: 2, name: "Sara", role: 'admin' }
// ];

// const u = users.some((u) => u.role === 'admin')
// console.log(u)


// const nums = [1, 2, 3, -4, 5, 6];

// const ans = nums.every((n) => n > 0)
// console.log(ans)



// const nums = [1, 2, 3, -4, 5, 6];

// const sum = nums.reduce((acc, curr) => acc + curr, 0)
// console.log(sum)



// const arr = ["a", "b", "a", "c", "b", "a"]

// const ans = arr.reduce((acc, curr) => {
//     if (acc[curr]) {
//         acc[curr]++
//     } else {
//         acc[curr] = 1
//     }
//     return acc
// }, {})

// console.log(ans)


// const users = [
//     { name: "Ali", role: "admin" },
//     { name: "Sara", role: "user" },
//     { name: "John", role: "admin" }
// ];

// const grouped = Object.groupBy(users, user => user.role)
// console.log(grouped)


// const sentences = [
//     "hello world",
//     "javascript is fun"
// ];

// const ans = sentences.flatMap((s) => s.split(' '))
// console.log(ans)


// const num = [1, 2, 3]

// const sol = num.flatMap((n) => [n, n])
// console.log(sol)


// const users = [
//     { name: "Ali", role: "admin" },
//     { name: "Sara", role: "user" },
//     { name: "John", role: "admin" }
// ];

// const keys = users.map((u) => Object.keys(u))
// console.log(keys)


// const value = users.map((u) => Object.values(u))
// console.log(value)


// const entries = users.map((u) => Object.entries(u))
// console.log(entries)




// const input = {
//     a: 1,
//     b: 2
// };

// const swapped = Object.fromEntries(
//     Object.entries(input).map(([key, val]) => [val, key])
// )
// console.log(swapped)


// const num = [1, 2, 3, 5, 3]

// // const sorted = num.sort((a, b) => b - a)
// // console.log(sorted)

// const arr = [...new Set(num)]
// console.log(arr)


// const map = new Map()

// map.set('hindi', 50)
// map.set('Eng', 50)
// map.set('Math', 50)
// // console.log(map)

// for (const [key, val] of map) {
//     console.log(key, val)
// }


// function* countTofive() {
//     for (let i = 1; i <= 5; i++) {
//         yield i
//     }
// }
// const countObj = countTofive()
// console.log(countObj)
// for (const num of countObj) {
//     console.log(num)
// }


// function* infiniteIdGenerator() {
//     let id = 1;
//     while (true) {
//         yield `ID_${id++}`;
//     }
// }

// // Execution
// const idStream = infiniteIdGenerator();

// console.log(idStream.next().value); // "ID_1"
// console.log(idStream.next().value); // "ID_2"
// console.log(idStream.next().value); // "ID_3"
// console.log(idStream.next().value); // "ID_3"


// const promiseArr = [
//     Promise.resolve('Data A'),
//     Promise.resolve('Data B'),
//     Promise.resolve('Data C'),
//     Promise.resolve('Data D'),
//     Promise.resolve('Data E'),
// ]


// async function processPromis() {
//     for await (const data of promiseArr) {
//         console.log(data)
//     }
// }
// processPromis()