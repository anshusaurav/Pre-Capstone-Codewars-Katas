//Link: https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript

function dblLinear(n) {
    let first = 0;
    let second = 0;
    let cnt = 0;
    let res = [];
    res.push(1);
    while (first + second < n + cnt) {
        let tmp1 = 2 * res[first] + 1;
        let tmp2 = 3 * res[second] + 1;
        if (tmp1 < tmp2) {
            res.push(tmp1);
            first++;
        }
        else if (tmp2 < tmp1) {
            res.push(tmp2);
            second++;
        }
        else {
            res.push(tmp1);
            second++;
            first++;
            cnt++;
        }

    }
    //   console.lo/g(res);
    return res[res.length - 1]
}