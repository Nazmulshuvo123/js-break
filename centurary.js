/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
// Solve using for loop

for( i = 1; i <= 200; i++){
    console.log(i);
    if( i >= 100){
        break;
    }

}
console.log("===============")

//Solve using while loop

let n = 1;
while( n <=200){
    console.log(n);
    if( n === 100){
        break;
    }
    n++;
}


