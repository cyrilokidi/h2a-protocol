module.exports.hexToAscii = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i += 2)
    result += String.fromCharCode(parseInt(str.substring(i, i + 2), 16));
  return result;
};
