//Link: https://www.codewars.com/kata/559656796d8fb52e17000003/train/javascript




Array.prototype.transpose = function () {

    const matrix = this;
    if (this === undefined)
        return [];
    if (!Array.isArray(this) || !this.length) {
        return [];
    }

    function isempty(mat) {
        if (!mat.length)
            return true;
        return false;
    }
    if (this.every(isempty))
        return [[]];

    const n = matrix.length;
    const m = matrix[0].length;
    let arr = new Array(m * n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i * n + j] = matrix[j][i];
        }
    }
    let res = [];
    let index = 0;
    for (let i = 0; i < m; i++) {
        let tmp = [];
        for (let j = 0; j < n; j++) {
            tmp.push(arr[index]);
            index++;
        }
        res.push(tmp);
    }
    return res;
};
