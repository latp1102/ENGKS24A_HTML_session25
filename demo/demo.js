// // expression function hàm biểu thức
// function index() {
//     let char = prompt("nhập tên");
//     console.log(char);
    
// }

// index();

// let index2 = function() {

// }

// index();
// // khai báo đc
// function index () {
//     console.log("khai báo");
    
// }
// ko đc
// let index = function() {
//     console.log("khái niệm");
    
// }

/*
1 .Tham số
 định nghĩa
 kiếu dữ liệu
 tính private
 1 tham số
 nhiều tham sô

2. Truyền tham số
 1 tham số
 nhiều tham số

3. Argument?
 đối tượng argument (đối số)
 giới thiệu vòng for
 for of

 */
// định nghĩa
// function writeLog(message) {
//     console.log('message');
    
// }
// writeLog('test message');
// kiểu dữ liệu
// function writeLog(message) {
//     console.log(typeof message);
    
// }
// writeLog('message');
// tham số
// function writeLog(message, message2) {
//     console.log(message);
    
//     console.log(message2);
    
// }
// writeLog('test' , 'test03');
// truyền mảng đối số
// function writeLog() {
//     console.log(arguments);
    
// }
// writeLog('log')

// function writeLog() {
//     for (let param of arguments) {
//         console.log(param);
        
//     }
    
// }
// writeLog('log1', 'log2', 'log3')

// function writeLog() {
//     let myStr = '';
//     for (let param of arguments) {
//         myStr += `${param} - `
        
//     }
//     console.log(myStr);
    
    
// }
// writeLog('log1', 'log2', 'log3')

// Return
// confirm('message')
// function cong(a, b) {
//     // return a + b;
//     // return [a, b];// mảng
//     return (a.toString() + b.toString());// chuỗi
    
// }

// let total = cong(2, 8);
// console.log(total);

// function sum(a ,b) {
//     return a + b;
// }
// let total = sum(5, 6);
// console.log(total);

// function parameter & arguments
// mayBanNuoc("10k");// "dasani"
// // đối số thực tế arguments
// mayBanNuoc("20k");// bò húc

// function mayBanNuoc(price) {
//     if (price === "10k") {
//         console.log("bạn muốn dasani");
        
//     } else if (price === "20k") {
//         console.log("bạn muốn bò húc");
        
//     } else {
//         console.log("mệnh giá tiền");
        
//     }
//     mayBanNuoc("30");
// }

// calculate2Number(10, 2020, "+");
// calculate2Number(-1, 11, "-");
// calculate2Number(2, 3, " *");
// calculate2Number(4, 5, "/");
// function calculate2Number(number1, number2, operatoroperator) {
//     if (operator === "+") {
//         console.log("tong = ", number1 + number2);
        
//     } else if (operator === "-"){
//         console.log("hiệu =", number1 - number2);
//     } else if (operator === "*"){
//         console.log("tích =", number1 * number2);
        
//     } else if (operator === "/"){
//         console.log("thương =", number1 / number2);
        
//     } else {
//         console.log("phép tính không hợp lệ");
        
//     }
// }

// calculate2Number();
// // console.log(a);

// function sayHi(name) {
//     console.log("hello ", name);
    
// }
// sayHi("phong");
// (function sayHi(name) {
//     console.log("hello ", name);
    
// })("phong");
// function multiply(a, b ) {
//     return a * b;
// } console.log(multiply(4));
// function add(a = 1, b) {
//     return a + b;
//     } console.log(add(5));
// function myFunction() {
//     let myNum = 10;
//     function showNum() {
//         alert(myNum);
//     }
//     return showNum();
//  }
 
//  let callFunc = myFunction();
//  myFunction();

// function myFunction(x) {
//     if (x == 1) {
//         return true;
//     } else {
//         return false;
//     }
//  }

// console.log(myFunction());// false
// function myFunction(){
//     let count = 0;
//     let firstNum = 48;
//     return;
//     var secondNum = 109;
//  }

// console.log(myFunction());
// function isEvenOrOdd(number) {
//     const arr = ['Chẵn', 'lẻ'];
//     return arr[number % 2];
//   }
// console.log(isEvenOrOdd(11,4,65,6));
// console.log(isEvenOrOdd(1));\
// let a = [1,2,3];

// console.log(a[1 + 1]);

// declaration
// mottj hàm tính tổng hai số nguyên a và b
// 1
/**
 * hàm tính tổng hai số nguyên
 * @param {*} firstNumber số nguyên thứ nhất
 * @param {*} secondNumber số nguyên thứ hai
 * @returns tổng hai số nguyên
 * Auth: (-11/03/2025)
 * Update
 */
function sum(firstNumber, secondNumber) {

    const total = firstNumber + secondNumber;
    console.log(`Tổng 2 số ${firstNumber} và ${secondNumber} = ${total}`);
    
    return firstNumber + secondNumber;

}
// console.log(total(5, 6));
const result = sum(5,6);

// const sum = function(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// };
// console.log(sum(5,6));
// const sum = (firstNumber, secondNumber) => 
//     firstNumber + secondNumber
// [1,2,3].find((element) => element > 1)

console.log(sum(10,20));


