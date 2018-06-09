// Method 1
function anagram(str1, str2) {
	let leftstr = str1.split('');
	for(let char of str2) {
		if(leftstr.indexOf(char) == -1) {
			if(leftstr.indexOf(char.toLowerCase()) == -1) {
				return false;
			}
		}
	}
	return true;
}

console.log(anagram('rail safety', 'fairy tales'));
console.log(anagram('rail safety', 'fairy TALES'));
console.log(anagram('rail safety', 'fairy simple'));

// Method 2
function anagram1(str1, str2) {
	let lstr1 = str1.toLowerCase().split('').sort().join('');
	let lstr2 = str2.toLowerCase().split('').sort().join('');
	return lstr1 === lstr2;
}

console.log(anagram1('rail safety', 'fairy tales'));
console.log(anagram1('rail safety', 'fairy TALES'));
console.log(anagram1('rail safety', 'fairy simple'));
