function findMaxChar(str) {
  let charMap = {},
    maxCount = 0,
    maxChar = '';
  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    if(maxCount < charMap[char]) {
      maxChar = char
      maxCount = charMap[char]
    }
  }
  return maxChar;
}

console.log(findMaxChar('sooooper'));
