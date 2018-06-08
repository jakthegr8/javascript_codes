// Method 1
function reverse_str_1(str) {
  var chars = str.split(''), new_str = [];
  chars.forEach(function(ch){ new_str.unshift(ch); });
  return new_str.join('');
}

// Method 2
function reverse_str_2(str) {
  return str.split('').reverse().join('');
}

// Method 3. ES6 way
function reverse_str_3(str) {
  let reversed = '';
  for (let char of str) { reversed = char + reversed; }
  return reversed;
}

// Method 4. Reverse index reversing
// Method 5. Middle pivot switch reversing

console.log(reverse_str_1('Arun'));
console.log(reverse_str_2('Arun'));
console.log(reverse_str_3('Arun'));
