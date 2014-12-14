/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Ans - 6857

*/

//largestPrimeFactor(600851475143); since number is very high this will crash your browser

largestPrimeFactor(13195);

function largestPrimeFactor(num){
    var primeFactorsArray = primeFactors(num);
    return primeFactorsArray[(primeFactorsArray.length -1)] ;
}

function primeFactors(num){
    
    var check = num;
    var isCheckPrime = true;
    var factorsArray = [];
    var factorsArrayIndex = 0;
    
    for(var i = 2; i < num; i++){
    
        if( check%i == 0){
            
            do{
                check = check/i;
                isCheckPrime = isPrime(check);
                factorsArray[factorsArrayIndex] = i;
                factorsArrayIndex++;
            }
            while( check%i == 0)
        
        }
        
    }
    
        return factorsArray;
}
    
function isPrime(num){

var isPrime = true;

for(var i = 2; i < num; i++){
    if ( num%i == 0) isPrime = false;
}

return isPrime;
}