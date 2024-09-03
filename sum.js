/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let total = 0;
let num = 1;
while(true){
    total = total + num;
   console.log(total);
   if(total >= 100){
    break;
   }
   num++; 
   
}
