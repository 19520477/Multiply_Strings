const { convertStringToNumber } = require("./libs/convert");
const { handleSign } = require("./libs/math");

/**
 * @notice : multiply numbers, then convert result to string.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = (num1, num2) => {
  let result = convertStringToNumber(num1) * convertStringToNumber(num2);
  if (handleSign(num1) == handleSign(num2)) {
    console.log(result + "");
  } else if (handleSign(num1) != handleSign(num2)) {
    console.log("-" + result + "");
  }
};

multiply(process.argv[2], process.argv[3]);
