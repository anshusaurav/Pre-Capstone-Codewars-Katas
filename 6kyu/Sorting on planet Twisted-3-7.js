//Link: https://www.codewars.com/kata/58068479c27998b11900056e

function sortTwisted37(array) {
  let arr = [...array];
  let str = arr.join('|');
  str = str.replace(/7/g, "a");
  str = str.replace(/3/g, "7");
  str = str.replace(/a/g, "3");
  arr = str.split('|').map(elem => +elem);
  arr.sort((a, b) => a - b)
  str = arr.join('|');
  str = str.replace(/3/g, "a");
  str = str.replace(/7/g, "3");
  str = str.replace(/a/g, "7");
  arr = str.split('|').map(elem => +elem);
  return arr;

}