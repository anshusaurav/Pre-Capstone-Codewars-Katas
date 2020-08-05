//Link: https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript

function int32ToIp(int32) {
    let bStr = toBinaryString(int32);
    return toDecimalNumber(bStr.slice(0, 8)) + '.' +
        toDecimalNumber(bStr.slice(8, 16)) + '.' +
        toDecimalNumber(bStr.slice(16, 24)) + '.' +
        toDecimalNumber(bStr.slice(24, 32));
}
function toDecimalNumber(binString) {
    return binString.split('').map(elem => +elem).reverse().reduce((acc, elem, index) => {
        acc += elem * Math.pow(2, index);
        return acc;
    }, 0);
}
function toBinaryString(number) {
    if (number === 0)
        return '0';
    let res = [], num = number
    while (num >= 1) {
        if (num % 2 == 0) {
            num = num / 2;
            res.push(0);
        }
        else {
            res.push(1);
            num = Math.floor(num / 2);
        }

    }
    return '0'.repeat(32 - res.length) + res.reverse().join('');
}
