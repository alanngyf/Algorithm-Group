/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num==1){
        return true;
    }
    var primes = primeFactorization(num);
    for(var i=0; i<primes.length; i++){
      if(primes[i]!=2 && primes[i]!=3 && primes[i]!=5){
        return false;
      }
    }
    return true;
};

function primeFactorization(num){
  var root = Math.sqrt(num),  
  result = arguments[1] || [],  //get unnamed paremeter from recursive calls
  x = 2; 
  
  if(num % x){//if not divisible by 2 
   x = 3;//assign first odd
   while((num % x) && ((x = x + 2) < root)){}//iterate odds
  }
  //if no factor found then num is prime
  x = (x <= root) ? x : num;
  result.push(x);//push latest prime factor

  //if num isn't prime factor make recursive call
  return (x === num) ? result : primeFactorization(num/x, result) ;
}