function destroyer(arr, ...toRemoves) {
    return arr.filter(e => {
      return !toRemoves.includes(e)
    })
  
  }
  
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);