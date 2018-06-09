function reverseInt(int) {
	let revInt = parseInt(int.toString().split('').reverse().join(''), 10)
	return revInt * Math.sign(int)
}

console.log(reverseInt(800));
console.log(reverseInt(-590));
