function checkValue2<T, U>(var1: T, var2: U, var3: any): void {
    console.log(var1);
    console.log(var2);
    console.log(var3);
}

let var1: undefined = undefined;
let var2: number = 42;
let var3 = 'Hello, world!';
checkValue2(var1, var2, var3);
