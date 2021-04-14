var num = 123,
  reverse = 0,
  rem;

while (num != 0) {
  rem = num % 10;
  reverse = reverse * 10 + rem;
  num = Math.floor(num / 10);
}

console.log(reverse);
