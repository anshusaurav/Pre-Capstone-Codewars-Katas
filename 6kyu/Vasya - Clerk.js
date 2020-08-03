//Link https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

function tickets(peopleInLine) {
    let cnt50 = 0, cnt25 = 0;
    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === 25)
            cnt25++;
        else if (peopleInLine[i] === 50) {
            if (cnt25 >= 1) {
                cnt25--;
                cnt50++;
            }
            else
                return 'NO'
        }
        else {
            if (cnt50 >= 1 && cnt25 >= 1) {
                cnt50--;
                cnt25--;
            }
            else if (cnt25 >= 3) {
                cnt25 -= 3;
            }
            else {
                return "NO"
            }
        }
    }
    return "YES"
}