"use strict";
function ManageResult(num1, num2) {
    let num3;
    num3 = +num1 + +num2;
    console.log("Kết quả cộng:", num3);
    num3 = +num1 - +num2;
    console.log("Kết quả trừ:", num3);
    num3 = +num1 * +num2;
    console.log("Kết quả nhân:", num3);
    num3 = +num1 / +num2;
    console.log("Kết quả chia:", num3);
}
let num1 = 10;
let num2 = 7;
let num3;
ManageResult(num1, num2);
let num4 = "10";
let num5 = false;
ManageResult(num4, num5);
