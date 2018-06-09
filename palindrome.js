// Method 1
function isPalindrome1(str) {
	return str === str.split('').reverse().join('')
}

// Method 2
function isPalindrome2(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1]
	})
}

console.log(isPalindrome1('abba'));
console.log(isPalindrome1('Arun'));

console.log(isPalindrome2('abba'));
console.log(isPalindrome2('Arun'));
