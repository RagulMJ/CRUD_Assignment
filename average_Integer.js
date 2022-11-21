arr = [10, 20, 30, 40, 50, 60];

function calculateAverage(array) {
  var sum = 0;
  array.forEach(function (num) {
    sum += num;
  });
  average = sum / arr.length;

  return average;
}
console.log(calculateAverage(arr));
