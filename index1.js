/*
1. Create an HTML file with a button that will trigger the vault combination.
2. Create a script tag in the HTML file to write the JavaScript code for the vault combination.
3. Define a string to display the message to the user.
4. Generate three numbers using unique arithmetic operators to create the three codes in the combination.
5. Display the combination in an alert popup or on the HTML page.
*/

// Step 1 - Define the message to display to the user
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Step 2 - Assign three variables containing the results of calculations using unique arithmetic operators that equal 10, 40, and 39
let a = 5 + 5;   // a = 10
let b = 8 * 5;   // b = 40
let c = 78 - 39; // c = 39

// Step 3 - Combine the codes into a single string
const combination = `${a}, ${b}, ${c}`;

// Step 4 - Display the combination in a dialog box
alert(`${message} ${combination}`);