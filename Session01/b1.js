function minNumber(arr) {
  if (!Array.isArray(arr)) {
    return "Giá trị không hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng không chứa phần tử";
  }

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] - arr[i] === 0)) { 
      return "Giá trị không hợp lệ";
    }
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return `Phần tử nhỏ nhất trong mảng ${min}`;
}

console.log(minNumber([2, 4, 8, 1, 9]));
console.log(minNumber([]));
console.log(minNumber("abc"));
console.log(minNumber([5, 2, 7, 5, 4]));
