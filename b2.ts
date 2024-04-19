function swapIndex<T,U>(arr: T[], index1: number, index2: number): T[] {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error('Vi tri ko hop le');
    }
    const newArr = [...arr];
    [newArr[index1], newArr[index2]] = [newArr[index2], newArr[index1]];
    return newArr;
}
console.log(swapIndex([7, 7,5,33,2,99],1, 2));
