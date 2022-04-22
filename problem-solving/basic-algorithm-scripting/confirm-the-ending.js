function confirmEnding(str, target) {
    const strLength = str.length;
    const targetLength = target.length;

    const targetStartingStartPosition = strLength - targetLength;
    const subStringStartingFromTargetPosition = str.substring(targetStartingStartPosition);
    // const 
    console.log(strLength);
    console.log(targetLength);
    console.log(targetStartingStartPosition);
    console.log(subStringStartingFromTargetPosition)

    return isStringEndWithTarget = target == subStringStartingFromTargetPosition;

}

console.log(confirmEnding("Abstraction", "n"));