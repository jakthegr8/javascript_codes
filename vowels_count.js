// Method 1
function vowelsCount(str) {
  let vow = ['a', 'e', 'i', 'o', 'u'],
    count = 0;
  for(let char of str.toLowerCase()) {
    if(vow.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(vowelsCount('Arun kumar'));
console.log(vowelsCount('aeiou'));

// Method 2
function vowelsCountRegx(str) {
  return str.match(/[aieou]/gi).length
}

console.log(vowelsCountRegx('Arun kumar'));
console.log(vowelsCountRegx('aeiou'));
