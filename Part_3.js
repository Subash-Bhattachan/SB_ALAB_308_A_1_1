// PART 3: DEFERRED EXECUTION
//let my_textbox = document.querySelector("my-textbox")

// writing a function that prints out a list of prime numbers between 1 and n.
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


let n = 10000;

// check for every number from 1 to n
const result = [];
for (let i = 1; i <= n; i++) {
    // check if current number is prime
    if (isPrime(i)) {
        result.push(i);
    }
}

console.log(result.join(' '));

// function that is called on the html page to display the prime numbers
function sendPrimeNumbers() {
    let my_textbox = document.getElementById("my-textbox");
   setTimeout(() => {
        my_textbox.innerText = result.join(", ");
    }, 2000);
    alert ("Calculation is finished!"); // to send the message as the calculation is finished

}

