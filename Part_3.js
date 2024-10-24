// PART 3: DEFERRED EXECUTION

// writing a function that prints out a list of prime numbers between 1 and n.
let n = 10000;
function isPrime(n) {
    // since 0 and 1 is not prime, return false.
    if (n == 1 || n == 0) 
        return false;

    
    for (let i = 2; i < n; i++) {
        
        if (n % i == 0) 
            return false;
    }
    
    return true;
}

//now calling the isPrime function in a given setting

// check for every number from 1 to n
const result = [];
for (let i = 1; i <= n; i++) {
    // check if current number is prime
    if (isPrime(i)) {
        result.push(i);
    }
}

console.log(result); // to see if it prints out in terminal

// now writing a function that is called on the html page to display the prime numbers on the HTML element itself
function sendPrimeNumbers(n) {
    let my_textbox = document.getElementById("my-textbox");
   setTimeout(() => {
        my_textbox.innerText = result.join(", ");
    }, 4000);
    alert ("Calculation is finished!"); // to send the message as the calculation is finished

}

