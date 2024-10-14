// function getRandNumbers (min, max, length) {
//     var arr = []
//     for (var i=0; i>length; i++) {
//         arr[i] =  Math.floor(Math.random() * (max - min) + min)
//     }
//     return arr
// }
//  console.log(getRandNumbers(2,8,8))

// function getTotal(arr) {
//     var sum = 0
//     for (var i=0; i<arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(getTotal([2, 4, 5]))

// function kiem_tra_snt(n)
// {
//     var flag = true;
//     if (n < 2){
//         flag = false;
//     }
//     else{
//         // lặp từ 2 tới n-1
//         for (var i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag == true){
//         return console.log(n + " là số nguyên tố <br/>");
//     }
//     else{
//         return console.log(n + " không phải là số nguyên tố <br/>");
//     }
// }

// console.log(kiem_tra_snt(7))

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal (orders) {
//     sum = 0
//     for (var i = 0; i<orders.length; i++) {
//         sum = sum + orders[i].price
//     }
//     return sum
// }
// console.log(getTotal(orders))

// function run(object) {
//     var arr = [];
//     for (var key in object) {
//         arr.push(`Thuộc tính ${key} có giá trị ` + object[key]);
//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));

var arr = ["a","b","c","a","b","d"]
console.log(new Set(arr))

