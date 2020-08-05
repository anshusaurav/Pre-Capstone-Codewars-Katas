//Link: https://www.codewars.com/kata/587c0138110b20624e000253/train/javascript

function interpreter(tape, array) {
    let arr = array.split('');
    let ind = 0;
    while (ind < arr.length) {
        for (let i = 0; i < tape.length && ind < arr.length; i++) {
            if (tape[i] == 0) {
                ind++;
            }
            else {
                arr[ind] = arr[ind] === '1' ? '0' : '1';
            }
        }
    }
    return arr.join('');
    // Implement your MiniBitMove interpreter here
}