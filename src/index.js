module.exports = function check(str, bracketsConfig) {
  let bracketsOpen = [];
  let bracketsClose = [];
  let bracketPair = [];
  let openedStack = [];
  const arr = str.split('');
  
  bracketsConfig.forEach(element => {
    if (element[0] === element[1]) {
      bracketPair.push(element[0]);
    } else {
      bracketsOpen.push(element[0]);
      bracketsClose.push(element[1]);
    }
  });
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (bracketPair.indexOf(el) >= 0) {
      if (openedStack[openedStack.length - 1] == el) {
        openedStack.pop();
      } else {
        openedStack.push(el);
      }
    } else if (bracketsOpen.indexOf(el) >= 0) {
      openedStack.push(el);
    } else if (bracketsClose.indexOf(el) >= 0) {
      let index = bracketsClose.indexOf(el);
      if (bracketsOpen[index] !== openedStack.pop()) {
        return false;
      }
    } else {
      return false;
    }
  }
  
  return openedStack.length === 0;
}
