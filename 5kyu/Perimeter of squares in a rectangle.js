//Link: https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript


function perimeter(n) {
    let arr = populate(n + 1);
    console.log(n, arr);
    return arr.reduce((acc, elem) => {
        acc += 4 * elem;
        return acc;
    }, 0);

}

function populate(n) {

    if (n == 1)
        return [1];
    if (n == 2)
        return [1, 1];
    let res = new Array(n).fill(0);
    res[0] = 1;
    res[1] = 1;
    for (let i = 2; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res;
}
