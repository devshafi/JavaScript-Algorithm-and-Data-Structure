
function factorialCalculator(n) {
    if (n == 0) return 1;
    else return factorialCalculator(n - 1) * n;
}

console.log(factorialCalculator(5))



function factorialWithRecursion(n) { // 5
    if (n == 0) return 1;
    else return factorialWithRecursion(n - 1) * n;
}



