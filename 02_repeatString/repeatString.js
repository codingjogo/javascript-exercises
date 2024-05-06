const repeatString = function (str, n) {
//   get str
//   var my-str
    let myStr = '';
//   loop through n
/*
  get str
  var my-str
  loop through n
  while n != 0, do my-str += str
  inside while loop:
  if n is 0 then return empty string ''
  if n is 1 then return str
  if n is -1 then return 'ERROR'
*/
    for (let i = 0; i < n; i++) {
        if (n === 0) {
            return;
        } else if (n === 1) {
            myStr = str;
        } else if (n < 0) {
            return 'ERROR'
        } else {
            myStr += str;
        }
    }
    return myStr;
};

// Do not edit below this line
module.exports = repeatString;
