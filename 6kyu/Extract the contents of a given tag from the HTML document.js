
//Link: https://www.codewars.com/kata/5808ce703e55743db7000d92/train/javascript



function getTagContent(htmlString, tag) {
    const strStart = `<${tag}`;
    const strEnd = `</${tag}>`;
    let res = [];
    console.log(htmlString, tag);
    while (htmlString.indexOf(strStart) !== -1) {
        const indexStart = htmlString.indexOf(strStart);
        const indexS = htmlString.slice(indexStart + 1).indexOf('>');
        const indexEnd = htmlString.indexOf(strEnd);
        if (indexEnd !== -1) {
            res.push(htmlString.slice(indexStart + 2 + indexS, indexEnd).trim());
            htmlString = htmlString.slice(indexEnd + strEnd.length + 1);
        }
        else {
            break;
        }
    }
    return res;
}