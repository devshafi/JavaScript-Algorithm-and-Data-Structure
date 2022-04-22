function findElement(arr, func) {
    let num = 0;
  
    for(let i=0;i<arr.length;i++){
      num = arr[i];
      if(func(num)){
        return num;
      }
    }
    return undefined;
  }
  
  findElement([1, 3, 5, 9], num => num % 2 === 0);