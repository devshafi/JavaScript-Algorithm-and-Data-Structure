function mutation(arr) {
    const firstArr = [...arr[0].toLowerCase()];
    const testArr = [...arr[1].toLowerCase()];
    
    for (let i = 0; i < testArr.length; i++) {
      if (!firstArr.includes(testArr[i])) {
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);