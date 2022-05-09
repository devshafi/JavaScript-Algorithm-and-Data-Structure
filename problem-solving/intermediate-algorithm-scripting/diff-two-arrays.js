function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    console.log(newArr);
    const finalArr = newArr.filter(el => {
        //  console.log(el)
        return !arr1.includes(el) || !arr2.includes(el)
    })

    console.log(finalArr)

    return finalArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);