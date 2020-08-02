//Link: https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
var Ball = function (ballType) {
  if (ballType === undefined)
    Ball.prototype.ballType = "regular"
  else
    Ball.prototype.ballType = "super"
};