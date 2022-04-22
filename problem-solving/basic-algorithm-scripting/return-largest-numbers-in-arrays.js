function largestOfFour(arr) {

    let largestArray = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = -1000000000;
        for (let j = 0; j < arr[i].length; j++) {
            // console.log(arr[i][j]);
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];

            }
        }
        largestArray.push(largestNumber)
    }
    console.log(largestArray);
    return largestArray
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));