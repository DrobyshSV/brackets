module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let arrayOfOpenedBrackets = bracketsConfig.map((t) => t[0]);
  let arrayOfClosedBrackets = bracketsConfig.map((t) => t[1]);
  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    if (arrayOfOpenedBrackets.includes(currentBracket)) {
      if (
        stack[stack.length - 1] === currentBracket &&
        arrayOfClosedBrackets.includes(currentBracket)
      ) {
        stack.pop();
      } else {
        stack.push(currentBracket);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElementOfStack = stack[stack.length - 1];
      let index = arrayOfOpenedBrackets.indexOf(topElementOfStack);
      if (str[i] === arrayOfClosedBrackets[index]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
