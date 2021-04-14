var n = 5343,
  sum=0,
  rem;

while (n > 0) {
  rem = n%10
  sum = sum+rem
  n = Math.floor(n/10)
}
console.log(sum)