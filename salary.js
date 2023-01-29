/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const maxValueIndex = salary.indexOf(Math.max(...salary));
  salary.splice(maxValueIndex, 1);
  const minValueIndex = salary.indexOf(Math.min(...salary));
  salary.splice(minValueIndex, 1);
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
  }
  return sum / salary.length;
};

const salary = [1000, 2000, 3000];
console.log(average(salary));
