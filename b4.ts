function checkValue<T>(condition:T): void {
    if (condition) {
        console.log('Xin chào');
    } else {
        console.log('Tạm biệt');
    }
}
checkValue(undefined);
