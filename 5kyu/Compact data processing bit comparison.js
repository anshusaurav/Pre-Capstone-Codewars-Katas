function Network(count) {
    this.cameras = [];
    for (var i = 0; i < count; i++)
        this.cameras.push(new Camera(0, -30));
}

Network.prototype.process = function (byte) {
    const bin = toBinaryString(byte).split('').reverse().join('');
    const index = toDecimalNumber(bin.slice(0, 4).split('').reverse().join(''));
    //   console.log(index);
    const h1 = bin[4] === '1' ? 5 : 0;
    const h2 = bin[5] === '1' ? 5 : 0;
    const w1 = bin[6] === '1' ? 5 : 0;
    const w2 = bin[7] === '1' ? 5 : 0;
    if (index < this.cameras.length)
        this.cameras[index].move(h1 - h2, w2 - w1);
}

function Camera(h, v) {
    this.horizontal = h;
    this.vertical = v;
}

Camera.prototype.move = function (h, v) {
    console.log(h, v);

    this.horizontal = this.horizontal + v > 45 ? 45 : this.horizontal + v < -45 ? -45 : this.horizontal + v;
    this.vertical = this.vertical + h > 45 ? 45 : this.vertical + h < -45 ? -45 : this.vertical + h;
}
//Link: https://www.codewars.com/kata/5247799e69828fb3aa00019b/train/javascript
function toBinaryString(number) {
    if (number === 0)
        return '0';
    let res = [], num = number
    while (num >= 1) {
        if (num % 2 == 0) {
            num = num / 2;
            res.push(0);
        }
        else {
            res.push(1);
            num = Math.floor(num / 2);
        }

    }
    return '0'.repeat(8 - res.length) + res.reverse().join('');
}

function toDecimalNumber(binString) {
    return binString.split('').map(elem => +elem).reverse().reduce((acc, elem, index) => {
        acc += elem * Math.pow(2, index);
        return acc;
    }, 0);
}