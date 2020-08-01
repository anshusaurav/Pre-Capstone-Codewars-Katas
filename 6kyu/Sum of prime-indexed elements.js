//Link: https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript
function total(arr) {
    if (arr.length < 2)
        return 0;
    const primes = prime(arr.length, true);
    return arr.reduce((acc, elem, index) => {
        if (primes.includes(index))
            acc += elem;
        return acc;
    }, 0)
}
function prime(n, flag) {
    (typeof flag === "undefined" || flag === false) ? flag = false : flag = true;

    function isPrime(num) {
        if (num === 0 || num === 1) {
            return false;
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    if (flag) {
        var arr = [2];
        for (var i = 3; i <= n; i += 2) {
            if (isPrime(i)) {
                arr.push(i);
            }
        }
        return arr;
    } else {
        return isPrime(n);
    }
}
