let pow = (base, exp) => {
  let result = 1;
  for (var i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
};

/**
 * @notice : check string is positive or negative number
 * @param {string} str
 * @return {int}
 */
let handleSign = (str) => {
  let bool_i = 0;
  if (str[0] == "+" || (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57)) {
    bool_i = 0;
  } else if (str[0] == "-") {
    bool_i = 1;
  }
  return bool_i;
};

module.exports = { pow, handleSign };
