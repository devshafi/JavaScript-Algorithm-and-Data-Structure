function sumFibs(num) {
    let prev = 1;
    let curr = 1;
    let next = prev + curr;
    let sum = 2;
  
    // console.log(prev, curr, next)
    while (next <= num) {
      if (next % 2 != 0) {
        // console.log(next)
        sum += next;
      }
      prev = curr;
      curr = next;
      next = prev + curr
    }
    console.log(sum)
    return sum;
  }
  
  sumFibs(10);