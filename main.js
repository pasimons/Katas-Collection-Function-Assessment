// 1. add

function add(x, y) {
return x + y
}

console.log(add(2, 4))


//2. Multiply

function multiply(x, y){
    let answer = x
    for(var i = 0; i < y - 1; i++){
      answer += x
    }
    return answer
  }

  console.log(multiply(2, 2))


  //3.  Power/Exponentiation

  function power(n, x){
      return n * x
  
  }
console.log(Math.pow(7, 3));


//4. Factorial

function factorial(x) 
{ 

  if (x === 0)
 {
    return 3;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));