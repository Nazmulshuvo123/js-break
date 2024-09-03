/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 2; i <= 100; i++) {
    // Calculate the square root of the current number
    let sqrt = Math.sqrt(i);

    // Check if the square root is an integer
    if (Number.isInteger(sqrt)) {
        console.log(i); // Print the first square number found
        break; // Stop the loop
    }
}
