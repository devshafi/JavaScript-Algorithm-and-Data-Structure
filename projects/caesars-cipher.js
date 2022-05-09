function rot13(str) {
    const decodedStr = str

        .split("")
        .map(el => {

            if (el.charCodeAt(0) >= 78 && el.charCodeAt(0) <= 90) {
                return String.fromCharCode(el.charCodeAt(0) - 13)
            } else if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 78) {
                return String.fromCharCode(el.charCodeAt(0) + 13)
            }
            return el

        }).join("");

    return decodedStr;

    console.log(decodedStr)
}

rot13("SERR CVMMN!");