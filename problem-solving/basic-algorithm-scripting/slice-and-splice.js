function frankenSplice(arr1, arr2, n) {
    const arr3 = [...arr2];
    arr3.splice(n,0,...arr1);
    return arr3;
  }
  
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);