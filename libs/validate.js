/**
 * @notice : check if string contains character that is not a number
 * @param {string} str
 * @return {string}
 */
let validateNumber = (str) => {
  let result = str;
  if (str[0] == 0 || str[0] == "+" || str[0] == "-") {
    result = str.substring(1);
  }

  for (var i = 0; i <= result.length - 1; i++) {
    if (result.charCodeAt(i) < 48 || result.charCodeAt(i) > 57) {
      console.error(`The character ${result[i]} is not a number!`);
      return;
    }
  }
  return result;
};

module.exports = { validateNumber };
