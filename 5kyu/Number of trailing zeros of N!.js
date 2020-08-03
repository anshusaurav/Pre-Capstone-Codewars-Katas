//Link: https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/solutions/javascript

function zeros(n) {
    let res = 0, i;
    for (i = 5; n / i >= 1; i *= 5)
        res += Math.floor(n / i);
    return res;
}