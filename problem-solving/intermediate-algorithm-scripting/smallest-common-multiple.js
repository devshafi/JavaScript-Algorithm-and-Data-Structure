
function gcdTwoNum(num1, num2) {
    let n1 = Math.max(num1, num2); // large number
    let n2 = Math.min(num1, num2); // small number

    while (n2 != 0) {
        let remainder = n1 % n2;
        n1 = n2;
        n2 = remainder;

    }
    return n1
}

function lcmTwoNumber(n1, n2) {
    // calculate LCM
    return (n1 * n2) / gcdTwoNum(n1, n2);

}

function rangeToArray(range) {
    let n1 = Math.min(...range); // first number in range
    let n2 = Math.max(...range); // last number in range
    let arr = [];
    for (let i = n1; i <= n2; i++) {
        arr.push(i)
    }
    return arr;
}

// lcm(a,b,c) = lcm(lcm(a,b),lcm(c))
function smallestCommons(rangeArray) {
    const arr = rangeToArray(rangeArray);
    while (arr.length >= 2) {
        let n1 = arr.shift();
        let n2 = arr.shift();
        arr.unshift(lcmTwoNumber(n1, n2))

    }
    return arr[0];
}




console.log(smallestCommons([1, 5]))
// console.log(lcmTwoNumber(3, 6));

// console.log(lcmTwoNumber(60,24))
// console.log(gcdTwoNum(60, 24));