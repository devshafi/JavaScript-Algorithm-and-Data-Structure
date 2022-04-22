function chunkArrayInGroups(arr, size) {

    const iterations = Math.ceil(arr.length / size);
    console.log(iterations)
    const newArr = [];
  
    for (let i = 0; i < iterations; i++) {
      const fArr = arr.splice(0, size);
      newArr.push(fArr);
    }
  
    console.log(newArr)
    return newArr;
  
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);