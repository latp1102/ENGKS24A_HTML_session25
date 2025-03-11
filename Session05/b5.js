function check(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) && arr[i] > 0) {
      count++;
    }
  }

  if (count == 0) {
    return "không có số nguyên trong mảng";
  }
  return count;
}
console.log(check([4, 5.4, 6, -2]));
console.log(check([1.2, -3, -6]));

