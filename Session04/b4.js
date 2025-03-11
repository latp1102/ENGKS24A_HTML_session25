function check(n) {
  if (!Number.isInteger(n)) {
    return "Dữ liệu không hợp lệ";
  }
  if (n < 2) {
    return "Không phải là số nguyên tố";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "Không phải là số nguyên tố";
    }
  }
  return "Là số nguyên tố";
}
console.log(check(17));
console.log(check(6));
console.log(check("text"));
