///// Masala 01
// function rewerse(num) {
//     let a = num.toString().split('').reverse().join('')
//     return a
// }
// console.log(rewerse(50));


////// Masala 02
// let arr = ["text", "world", "laptop"];
// let empty = {};  
// let result = arr.reduce((obj, item) => {
//   obj[item] = item.length;
//   return obj;
// }, empty);  
// console.log(result); 


///// Masala 03
// function findMinMaxWords(str) {
//     const words = str.split(' ');
//     let minWord = words[0];
//     let maxWord = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length < minWord.length) {
//             minWord = words[i];
//         }
//         if (words[i].length > maxWord.length) {
//             maxWord = words[i];
//         }
//     }
//     console.log(minWord);
//     console.log(maxWord);
// }
// findMinMaxWords("assalommu aleykum ustoz");


///// Masala 04
// function getLevel(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }
// console.log(getLevel(5))


///// Masala 05
// const countNM = (num) => {
//     let a = num.toString().split('').reduce((item, index) => {
//         return item + Number(index); 
//     }, 0); 
//     return 
// }
// console.log(countNM(123)); 


///// 6-Masalani ustozdan so'rash kerak 


///// Masala 07
// const sumToArray = (...numbers) => {
//     const sum = numbers.reduce((item, index) => item + index, 0)
//     return Array.from(String(sum), Number)
// };

// console.log(sumToArray(1,2,3,4,5));


///// Masala 08
// function searchA(str) {
//     let res = str.split('').filter(x => x === 'a' || x === 'A').join('').length
//     return res
// }
// console.log(searchA('assalomu aleykum'));
///// Masala 09


///// Masala 10
// let arr = [1,2,3,4,5,6]
// function cenNUM(num){
//     let numLEN = num.length
//     if(numLEN % 2 === 0){
//         let res = num[numLEN / 2 -1]
//         let res2 = num[numLEN / 2]
//         return (res + res2) / 2
//     }else{
//         return num[Math.floor(numLEN / 2)]
//     }
// }
// console.log(cenNUM(arr));