function chunkArray(array, size) {
  const chunked = [];
  for (let ele of array) {
    const last = chunked[chunked.length - 1]
    if (!last || last.length === size) {
      chunked.push([ele])
    } else {
      last.push(ele)
    }
  }
  return chunked;
}

console.log(chunkArray([1,2,3,4,5,6,7], 2));
