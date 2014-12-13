/*

Find series of Prime Number

*/

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