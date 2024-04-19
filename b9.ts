function concatArr<T>(arr: (T | T[])[]): T[] {
    let newArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(concatArr(arr[i] as T[]));
        } else {
            newArr.push(arr[i] as T);
        }
    }
    return newArr;
}

let arr = [1, [2, [3, 4], 5], 6];
console.log(concatArr(arr));