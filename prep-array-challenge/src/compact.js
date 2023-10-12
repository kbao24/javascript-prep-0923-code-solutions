/* exported compact */

function compact(array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (
      element !== false &&
      element !== null &&
      !Number.isNaN(element) &&
      !element === 0 &&
      element !== undefined &&
      element !== ''
    ) {
      newArr.push(element);
    }
  }

  return newArr;
}
