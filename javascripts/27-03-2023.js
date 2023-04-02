Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]

Array.isArray([]);
Array.isArray([1]);

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

const a = Array(3).fill('X'); // [ 'X', 'X', 'X' ]]

// console.log({a})

// arr.at
// arr.flatMap
// arr.flat
// arr.findLast
// arr.findLastIndex
// arr.shift()
// arr.keys
// arr.unshift(el)
// Array.indexOf
// Array.lastIndexOf
// Array.reduce
// array.reduceRight
// array.some
// array.every
// array.reverse()
// array.map
// array.forEach
// array.at
// array.filter
// array.pop
// array.keys
// array.join
// array.findIndex
// array.find
// array.fill
// array.concat
// array.entries
// array.sort


["a", "b", "c"].entries()
// 0 'a'
// 1 'b'
// 2 'c'