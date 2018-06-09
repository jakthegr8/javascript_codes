// Method 1
function steps1(n) {
	if(Math.sign(n) == 1) {
		for(let i = 0; i < n; i++) {
			let walks = '';
			for(let j = 0; j <= i; j++) {
				walks += '#'
			}
			console.log(walks);
		}
		console.log('\n');
	} else {
		console.log('Opps. You are a negative person!\n')
	}
}

steps1(4)
steps1(6)
steps1(-6)

// Method 2: Recursion
function steps2(n, row = 0, walks = '') {
	if(n == row) { return; }
	if(walks.length == n) {
		console.log(walks);
		return steps2(n, row + 1)
	}
	if(walks.length <= row) {
		walks += '#'
	} else {
		walks += ' '
	}
	steps2(n, row, walks);
}

steps2(4)
steps2(6)
