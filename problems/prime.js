/* Check if a number is a Prime Number */

function isPrime(num){

var isPrime = true;

for(var i = 2; i < num; i++){
    if ( num%i == 0) isPrime = false;
}

return isPrime;
}

isPrime(7);

/* Find series of Prime Number */

function primeNumber(num){
    
    var primeArray = [];
    var index = 0;
            
    for(var i = 2; i < num; i++){
        var isPrime = true;
        
        for(var j = 2; j < i;j++){
            if( i%j == 0 ) isPrime = false;   
        }
        
        if(isPrime){
            primeArray[index] = i;
            index++;
        }
    }    
    
    return primeArray;
 
}

primeNumber(30);

/* Find Prime Factors */

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

primeFactors(13195);

