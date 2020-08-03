//Link: codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n) {
    if (n <= 0 || n % 2 == 0)
        return null;
    if (n == 1)
        return '*\n';
    let ss = (n - 1) / 2;
    let cnt = 1;
    let res = "";
    while (ss > 0) {
        res += (" ".repeat(ss) + "*".repeat(cnt) + "\n");
        cnt += 2;
        ss -= 1;
    }
    console.log(res);
    ss = 0;
    cnt = n;
    while (cnt > 0) {
        res += (" ".repeat(ss) + '*'.repeat(cnt) + "\n");
        cnt -= 2;
        ss += 1;
    }
    return res;
}