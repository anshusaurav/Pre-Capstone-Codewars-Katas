
Array.prototype.sort = function () {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = 1; j < (this.length - i); j++) {
      if (this[j - 1] > this[j]) {
        const temp = this[j - 1];
        this[j - 1] = this[j];
        this[j] = temp;
      }

    }
  }
  return this;
}