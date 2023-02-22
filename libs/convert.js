const { validateNumber } = require("./validate");
const { pow } = require("./math");

/**
 * @notice : convert string to number
 * @param {string} str
 * @return {int}
 */
let convertStringToNumber = (str) => {
  let result = 0;
  let no_sign_num = validateNumber(str);
  for (var index = 0; index < no_sign_num.length; index++) {
    result +=
      (no_sign_num.charCodeAt(index) - 48) *
      pow(10, no_sign_num.length - 1 - index);
  }
  return result;
};

module.exports = {
  convertStringToNumber,
};
