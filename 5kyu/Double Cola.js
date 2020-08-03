//Link: https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

function whoIsNext(names, r) {
    let x = names.length;
    let cnt = 1;
    while (r > x) {
        r -= x;
        cnt *= 2;
        x *= 2;
    }
    return names[Math.floor((r - 1) / cnt) % x];
}

