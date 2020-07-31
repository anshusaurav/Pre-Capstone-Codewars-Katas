

//Link: https://www.codewars.com/kata/586a514cc66d18807f0000a6/train/javascript
const bruteForceDetected = (() => {
  let failedIps = [];
  let failedCnts = [];
  return loginRequest => {
    if (loginRequest.successful) {
      let index = failedIps.indexOf(loginRequest.sourceIP);
      if (index !== -1) {
        failedCnts[index] = 0;
      }
      return false;
    }
    else {
      let index = failedIps.indexOf(loginRequest.sourceIP);
      if (index !== -1) {
        let cnt = failedCnts[index] + 1;
        failedCnts[index] = cnt;
        if (cnt >= 20)
          return true;
        return false;
      }
      else {
        failedIps.push(loginRequest.sourceIP);
        failedCnts.push(1);
        return false;
      }
    }
  };
})();