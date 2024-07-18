//If the number can be divided by 3, print FIZZ instead of Number, if it can be divided by 5, print BUZZ and when it is divisible by both 3 and 5, print FIZZBUZZ

//This is my own solution to the problem itself.

imprimir(30) //Here the top number is specified and the function returns each number from 1 to the top number.
function imprimir (max) {
    
        for(let i = 1; i <= max; i ++){
            let texto = "";
            if( i%3 == 0 ){
                texto = "FIZZ"
            }
            if( i%5 == 0){
                texto = texto + "BUZZ"
            }
            console.log(texto == "" ? i : texto )
            texto = "";
        }
}


