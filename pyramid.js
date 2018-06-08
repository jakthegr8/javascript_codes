function buildPyramid(n, row=0, col='') {
  let totalColLen   = (2 * n) - 1;
  let currentColLen = col.length;

  if (n == row) { return; }

  if (currentColLen == totalColLen) {
    console.log(col);
    return buildPyramid(n, row + 1);
  }

  const midpoint = Math.floor(totalColLen / 2);
  if (midpoint - row <= currentColLen && midpoint + row >= currentColLen) {
    col += '#';
  } else {
    col += ' ';
  }
  buildPyramid(n, row, col)
}

buildPyramid(3)
buildPyramid(5)
buildPyramid(10)
