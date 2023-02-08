let arr = ["a", "b", "c", "b"];
let value = 2;
let currentIndex = arr.indexOf(value);
let nextIndex = -1;

for (let i = currentIndex + 1; i < arr.length; i++) {
  if (arr[i] === value) {
    nextIndex = i;
    break;
  }
}

console.log(nextIndex);
