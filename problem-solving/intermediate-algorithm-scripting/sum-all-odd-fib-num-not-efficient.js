function sumFibs(num) {

    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      const val = fib[i - 2] + fib[i - 1]
      fib.push(val)
    }
    // console.log(fib)
  
    const res =
      fib
        .filter(el => el % 2 !== 0 && el < num)
        .reduce((n,el)=> el+n,0)
  
    console.log(res);
  
    return res
  }
  
  sumFibs(75025);