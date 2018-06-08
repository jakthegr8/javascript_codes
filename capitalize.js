// Method 1
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function capWords1(words) {
  let capWordArray = []
  for (let word of words.split(' ')) { capWordArray.push(capitalize(word)); }
  return capWordArray.join(' ');
}

console.log(capWords1('arun kumar'));


// Method 2
function capWords2(words) {
  let result = words[0].toUpperCase();
  for (var i = 1; i < words.length; i++) {
    if (words[i - 1] == ' ') {
      result += words[i].toUpperCase();
    } else {
      result += words[i];
    }
  }
  return result;
}

console.log(capWords2('arun kumar'));
