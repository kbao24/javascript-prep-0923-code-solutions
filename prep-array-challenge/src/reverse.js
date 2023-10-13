/* exported reverse */
function reverse(array) {
  const newArr = [];
  for (let i = array.length - 1; i > -1; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
