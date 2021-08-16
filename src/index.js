const one = (number) => {
    switch (number) {
        case 0:
            return "zero";
            break;
        case 1:
            return "one";
            break;
        case 2:
            return "two";
            break;
        case 3:
            return "three";
            break;
        case 4:
            return "four";
            break;
        case 5:
            return "five";
            break;
        case 6:
            return "six";
            break;
        case 7:
            return "seven";
            break;
        case 8:
            return "eight";
            break;
        case 9:
            return "nine";
            break;
    }
};

const ten = (number) => {
    switch (number) {
        case 10:
            return "ten";
            break;
        case 11:
            return "eleven";
            break;
        case 12:
            return "twelve";
            break;
        case 13:
            return "thirteen";
            break;
        case 14:
            return "fourteen";
            break;
        case 15:
            return "fifteen";
            break;
        case 16:
            return "sixteen";
            break;
        case 17:
            return "seventeen";
            break;
        case 18:
            return "eighteen";
            break;
        case 19:
            return "nineteen";
            break;
    }
};

const dozens = (number) => {
    switch (number) {
        case 2:
            return "twenty";
            break;
        case 3:
            return "thirty";
            break;
        case 4:
            return "forty";
            break;
        case 5:
            return "fifty";
            break;
        case 6:
            return "sixty";
            break;
        case 7:
            return "seventy";
            break;
        case 8:
            return "eighty";
            break;
        case 9:
            return "ninety";
            break;
    }
};

function formatHundredSpaces(arrayOfDigits) {
    const hundred = `${one(arrayOfDigits[0])} hundred`;

    if (arrayOfDigits[1] === 1) {
        return `${hundred} ${ten(+`${arrayOfDigits[1]}${arrayOfDigits[2]}`)}`;
    }
    if (arrayOfDigits[1] === 0 && arrayOfDigits[2] === 0) {
        return `${hundred}`;
    }
    if (arrayOfDigits[1] === 0) {
        return `${hundred} ${one(arrayOfDigits[2])}`;
    }
    if (arrayOfDigits[2] === 0) {
        return `${hundred} ${dozens(arrayOfDigits[1])}`;
    }

    return `${hundred} ${dozens(arrayOfDigits[1])} ${one(
        arrayOfDigits[2]
    )}`.trim();
}

module.exports = function toReadable(number) {
    const arrayOfDigits = Array.from(String(number), Number);

    if (number >= 0 && number < 10) return one(number);
    else if (number >= 10 && number < 20) return ten(number);
    else if (number >= 20 && number < 100)
        return `${dozens(arrayOfDigits[0])} ${
            arrayOfDigits[1] === 0 ? "" : one(arrayOfDigits[1])
        }`.trim();
    else if (number >= 100 && number < 1000)
        return formatHundredSpaces(arrayOfDigits);
};
