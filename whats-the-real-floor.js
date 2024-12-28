function getRealFloor(n) {
    // if (n <= 0) {
    //     return n;
    // } else if (n < 13) {
    //     return n - 1;
    // }else {
    //     return n - 2;
    // }
    return n <= 0 ? n : n < 13 ? n - 1 : n - 2;
}

console.log(getRealFloor((-5)));