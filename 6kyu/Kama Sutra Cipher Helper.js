//Link: https://www.codewars.com/kata/5361372e700d2a9627000cf1/train/javascript

function KamaSutraCipher(key) {
  //...
  this.encode = function (str) {
    console.log('enc', str);
    let src = key.map(elem => elem[0]);
    let dest = key.map(elem => elem[1]);
    return str.split('').map(elem => {
      if (src.includes(elem)) {
        const ind = src.indexOf(elem);
        return dest[ind];
      }
      else if (dest.includes(elem)) {
        const ind = dest.indexOf(elem);
        return src[ind];
      } else
        return elem;
    }).join('');
  };
  this.decode = function (str) {
    console.log('dec', str);
    let src = key.map(elem => elem[1]);
    let dest = key.map(elem => elem[0]);
    return str.split('').map(elem => {
      if (src.includes(elem)) {
        const ind = src.indexOf(elem);
        return dest[ind];
      }
      else if (dest.includes(elem)) {
        const ind = dest.indexOf(elem);
        return src[ind];
      } else
        return elem;
    }).join('');
  }
}