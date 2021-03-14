module.exports = function check(str, bracketsConfig) {
  const templates = bracketsConfig.map((pair) => pair[0] + pair[1]);

  let result;
  do {
      result = str;
      for (const template of templates) {
          str = str.replace(template, "");
      }
      if (str === "") {
          return true;
      }
  } while (result !== str);

  return false;
}
