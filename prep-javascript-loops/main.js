function whileLoop1() {
  const array = [];
  let x = 0;
  let n = 0;
  while (x < 10) {
    array.push(n);
    x++;
    n++;
  }
  return array;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let x = 0;
  let n = 0;
  while (x < 20) {
    array.push(n);
    x += 2;
    n += 2;
  }
  return array;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  let n = 0;
  for (let i = 0; i < 10; i++) {
    array.push(n);
    n += 1;
  }
  return array;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log(`Time till explosion: ${i}!`);
  }
}
console.log(forLoop2());

function forInLoop1(object) {
  const array = [];
  for (const propertyNames in object) {
    array.push(propertyNames);
  }
  return array;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log(forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const propertyName in object) {
    array.push(object[propertyName]);
  }
  return array;
}

console.log(forInLoop2(object));
