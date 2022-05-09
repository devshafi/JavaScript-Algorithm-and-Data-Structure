function convertToRoman(num) {

    const thousands = parseInt(num / 1000);
    const thousandsRemainder = num % 1000;
    const nineHundred = parseInt(thousandsRemainder / 900);
    const nineHundredRemainder = thousandsRemainder % 900;
    const fiveHundreds = parseInt(nineHundredRemainder / 500);
    const fiveHundredsRemainder = nineHundredRemainder % 500;
    const hundreds = parseInt(fiveHundredsRemainder / 100);
    const hundredsRemainder = fiveHundredsRemainder % 100;
    const nineties = parseInt(hundredsRemainder / 90);
    const ninetiesRemainder = hundredsRemainder % 90;
    const fifties = parseInt(ninetiesRemainder / 50);
    const fiftiesRemainder = ninetiesRemainder % 50;
    const tens = parseInt(fiftiesRemainder / 10);
    const tensRemainder = fiftiesRemainder % 10;
    const nines = parseInt(tensRemainder / 9);
    const ninesRemainder = tensRemainder % 9;
    const fives = parseInt(ninesRemainder / 5);
    const fivesRemainder = ninesRemainder % 5;
    const ones = parseInt(fivesRemainder / 1);

    console.log(`thousands ${thousands}`);
    console.log(`nineHundred ${nineHundred}`);
    console.log(`fiveHundreds ${fiveHundreds}`);
    console.log(`hundreds ${hundreds}`);
    console.log(`nineties ${nineties}`);
    console.log(`fifties ${fifties}`);
    console.log(`tens ${tens}`);
    console.log(`nines ${nines}`);
    console.log(`fives ${fives}`);
    console.log(`ones ${ones}`);

    let roman = "";
    if (thousands > 0 && thousands <= 3) roman += "M".repeat(thousands);
    if (nineHundred > 0) roman += "CM";
    if (fiveHundreds > 0 && fiveHundreds <= 3) roman += "D".repeat(fiveHundreds);
    if (hundreds > 0 && hundreds <= 3) roman += "C".repeat(hundreds);
    else if (hundreds > 3) roman += "CD";
    if (nineties > 0) roman += "XC";
    if (fifties > 0 && fifties <= 3) roman += "L".repeat(fifties);
    if (tens > 0 && tens <= 3) roman += "X".repeat(tens);
    else if (tens > 3) roman += "XL";
    if (nines > 0) roman += "IX";
    if (fives > 0 && fives <= 3) roman += "V".repeat(fives);
    if (ones > 0 && ones <= 3) roman += "I".repeat(ones)
    else if (ones > 3) roman += "IV";

    console.log(roman);
    return roman;
}

convertToRoman(1999);