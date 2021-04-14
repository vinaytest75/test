var num = 12321,
  rem,
  revNum = 0,
  temp = num;

while (num > 0) {
  rem = num % 10;
  revNum = revNum * 10 + rem;
  num = Math.floor(num / 10);
}

if (temp == revNum) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
