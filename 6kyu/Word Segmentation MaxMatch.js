
//Link: https://www.codewars.com/kata/5be350bcce5afad8020000d6/train/javascript

function maxMatch(sentence) {
    let start = 0;
    let end = sentence.length;
    let res = [];
    let cnt = 0;
    while (true) {
        let str = sentence.slice(start, end);
        if (VALID_WORDS.has(str)) {
            res.push(str);
            cnt += str.length;
            start = cnt;
            end = sentence.length;
        }
        else {
            if (str.length === 1) {
                res.push(str);
                cnt += str.length;
                start = cnt;
                end = sentence.length;
            }
            else {
                end--;
            }
        }
        if (cnt === sentence.length)
            break;
    }
    return res;
}