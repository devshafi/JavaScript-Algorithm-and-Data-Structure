function bouncer(arr) {
    const newArr = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i]) newArr.push(arr[i])
    }
    console.log(newArr);
    return newArr;
  }
  
  
  bouncer([false, null, 0, NaN, undefined, ""]);