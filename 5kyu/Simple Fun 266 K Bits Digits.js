//https://www.codewars.com/kata/5913f53a4ef30521ab00002e
function kBitsDigits(n, k) {
    if (k > n)
        return [];
    let res = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
        if (countSetBits(i) == k)
            res.push(i);
    }
    return res;
}

function countSetBits(originalNumber) {
    let setBitsCount = 0;
    let number = originalNumber;
    while (number) {
        setBitsCount += number & 1;
        number >>= 1;
    }
    return setBitsCount;
}