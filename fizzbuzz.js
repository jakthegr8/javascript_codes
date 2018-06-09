// Method 1
function fizzBuzz(n) {
  for(var i = 1; i <= n; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log('fizzBuzz');
    } else if(i % 3 == 0) {
      console.log('fizz');
    } else if(i % 5 == 0) {
      console.log('buzz');
    } else { console.log(i); }
  }
}

// Method 2
function fizzBuzzRecursion(n) {
  if(n == 0) { return; } // Break the recursion
  if(n % 3 == 0 && n % 5 == 0) {
    console.log('fizzBuzz');
  } else if(n % 3 == 0) {
    console.log('fizz');
  } else if(n % 5 == 0) {
    console.log('buzz');
  } else { console.log(n); }
  fizzBuzzRecursion(n - 1)
}


fizzBuzz(15)
fizzBuzzRecursion(15)
