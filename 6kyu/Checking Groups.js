//Link: https://www.codewars.com/kata/54b80308488cb6cd31000161/train/javascript

function groupCheck(s) {
    let cntOne = 0, cntTwo = 0, cntThree = 0;
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            cntOne++;
            arr.push(s[i]);
        }
        else if (s[i] === ')') {
            cntOne--;
            if (arr[arr.length - 1] !== '(')
                return false;
            arr.pop();
        }
        if (s[i] === '{') {
            cntTwo++;
            arr.push(s[i]);
        }
        else if (s[i] === '}') {
            cntTwo--;
            if (arr[arr.length - 1] !== '{')
                return false;
            arr.pop();
        }
        if (s[i] === '[') {
            cntThree++;
            arr.push(s[i]);
        }
        else if (s[i] === ']') {
            cntThree--;
            if (arr[arr.length - 1] !== '[')
                return false;
            arr.pop();
        }

        if (cntOne < 0 || cntTwo < 0 || cntThree < 0)
            return false;
    }
    if (cntOne == 0 && cntTwo == 0 && cntThree == 0) {
        return true;
    }
    return false;
}