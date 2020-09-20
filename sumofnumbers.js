const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testList));

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testList));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion(testList));

function sumTheSimpleWay(list) {
  return list.reduce((memo, num) => memo + num, 0);
}

console.log(sumTheSimpleWay(testList));
