var isPrime = function (number) {
  for (var x = 3; x < number; x++) {
    if(number % x === 0) {  //if it isnt prime, returns false
      return false;
    }
  }
  return true; //is prime
};

var factor = function(num) {
  var sum;
  for (var i = 0; i < num; i++) {
    if (num % i === 0 && isPrime(i)) { //finds the largest factor
      sum = i;
    }
  }
  console.log(sum);
};
factor(1001); //numbers greater than 1,000,000 cause lag.
