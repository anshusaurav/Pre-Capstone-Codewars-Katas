//Link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
function scramble(str1, str2) {
    let map = new Map();
    str2.split('').forEach(elem => {
        if (map.has(elem))
            map.set(elem, map.get(elem) + 1);
        else
            map.set(elem, 1);
    })
    let source = new Map();
    str1.split('').forEach(elem => {
        if (source.has(elem))
            source.set(elem, source.get(elem) + 1);
        else
            source.set(elem, 1);
    })
    let arrM = [...map.entries()];
    for (let i = 0; i < arrM.length; i++) {
        if (!source.has(arrM[i][0]) || source.get(arrM[i][0]) < arrM[i][1])
            return false;

    }
    return true;
}
