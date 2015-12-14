var x = 1; //1
var y = 2; //2
var z = 0;
var sum = 0;
console.log("1");
for (;;) {
    if (sum < 4000000) {
    z = x + y;
    x = y;
    y = z;
    if (z % 2 === 0) {
     sum = z;
     console.log(sum);
    }
  }

  if (sum >= 4000000){
      break;
  }
}
