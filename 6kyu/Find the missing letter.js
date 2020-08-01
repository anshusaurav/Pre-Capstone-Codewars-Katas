//Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(array) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const lettersArr = [...letters.split(''), ...letters.toUpperCase().split('')];

  let startIndex = lettersArr.length - 1;
  for (let i = 0; i < array.length; i++) {
    const index = lettersArr.indexOf(array[i]);
    if (index < startIndex)
      startIndex = index;
  }
  let endIndex = 0;
  for (let i = 0; i < array.length; i++) {
    const index = lettersArr.indexOf(array[i]);
    if (index > endIndex)
      endIndex = index;
  }
  for (let i = startIndex; i <= endIndex; i++) {
    if (array.indexOf(lettersArr[i]) === -1)
      return lettersArr[i];
  }
  return ' ';
}