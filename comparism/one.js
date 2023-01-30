function nearestNumbers(num) {
  let floor = Math.floor(num);
  let ceil = Math.ceil(num);
  return [floor, ceil];
}

let result = nearestNumbers(8);
console.log(result); // [7, 9]
