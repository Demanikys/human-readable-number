module.exports = function toReadable(number) {
    var result = '';
    var counter = number.length;
    var numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    var specNumArr = ['zero', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var specDecArr = ['zero', 'one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (Math.floor(number / 100) !== 0) {
        result = `${numArr[Math.floor(number / 100)]} hundred`;
        if (number % 100 === 0) {
            return result;
        } else if ((number % 100) >= 11 && (number % 100) <= 19) {
            result = `${result} ${specNumArr[(number % 100) - 10]}`;
        } else if ((number % 100) > 0 && (number % 100) <= 10) {
            result = `${result} ${numArr[(number % 100)]}`;
            return result;
        } else if ((number % 100) >= 20 && (number % 100) <= 99) {
            result = `${result} ${specDecArr[Math.floor((number % 100) / 10)]}`;
            if (number % 10 === 0) {
                return result;
            } else {
                result = `${result} ${numArr[number % 10]}`;
            }
        }
    } else {
        if (Math.floor(number / 10) !== 0) {
            if (number === 10) {
                return numArr[number];
            } else if (number > 10 && number < 20) {
                result = `${specNumArr[number % 10]}`
                return result;
            } else {
                result = `${specDecArr[Math.floor(number / 10)]}`
                if (number % 10 !== 0) {
                    result = `${result} ${numArr[number % 10]}`;
                } else {
                    return result;
                }
            }
        } else {
            return numArr[number];
        }
    }
    return result;
}
