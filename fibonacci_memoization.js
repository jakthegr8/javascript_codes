function slowFib(n) {
	if(n < 2) { return n; }
	return fib(n - 1) + fib(n - 2);
}

function memoiz(fn) {
	let cache = {}
	return function(...args) {
		if(cache[args]) {
			return cache[args];
		} else {
			let result = fn.apply(this, args);
			cache[args] = result;
			return result;
		}
	}
}

const fib = memoiz(slowFib)
console.log(fib(100));
