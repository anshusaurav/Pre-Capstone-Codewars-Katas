//LinK: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
    if (!str)
        return false;
    str = str.trim();
    if (str.length === 0)
        return false;
    let res = twitterize(str);
    if (res.length > 140)
        return false;
    return res;
}
function twitterize(str) {
    //   str = str.replace( /\n/g, " " ).split( " " )
    return '#' + str.replace(/\n/g, " ").split(" ").map(elem => {
        //     console.log(elem.toUpperCase());
        return elem.slice(0, 1).toUpperCase() + elem.slice(1)
    }).join('');
}