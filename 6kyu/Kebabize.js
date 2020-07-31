//Link https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
function kebabize(str) {

    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (isAlpha(str[i]))
            if (str[i] === str[i].toUpperCase())
                res += '-' + str[i].toLowerCase();
            else
                res += str[i];

    }
    if (res.length > 0) {
        if (res[0] !== '-')
            return res;
        else
            return res.slice(1);
    }
    else
        return '';
}
function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
}
