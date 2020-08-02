//Link: https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

function transpose(matrix) {
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
}