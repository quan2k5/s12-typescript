function ManageResult<T, U>(num1: T, num2: U): void {
    let num3: number;
    num3 = +num1 + +num2;
    console.log("Kết quả cộng:", num3);
    num3 = +num1 - +num2;
    console.log("Kết quả trừ:", num3);
    num3 = +num1 * +num2;
    console.log("Kết quả nhân:", num3);
    num3 = +num1 /+num2;
    console.log("Kết quả chia:", num3);
}
let num1: number = 10;
let num2: number = 7;
let num3: number;
ManageResult<number, number>(num1, num2);
let num4: string = "10";
let num5: boolean = false;
ManageResult<string, boolean>(num4, num5);