
// PART_1: STACK OVERFLOW

let counter = 0; 

    function simpleIncrement() {
        counter++;
        
        if (counter < 15000) {
        // now surrounding the function in a try/ catch block
        try {
            simpleIncrement(); // recursive function
        } catch (error) {
            console.log("An error occured during recursion: ", error); // logging the error message
            console.log(counter); // logging the counter variable
            }
        }

        return counter;
    }
        
    try {
        console.log(simpleIncrement());
    } catch (error) {
	        console.log("An error occured in the main function: ", error);       
}




// rough drafts

// global variable
// let counter = 0; 
// function simpleIncrement() {
//     counter++;
//     return counter; 
// } 


// console.log(simpleIncrement()); // 1
// console.log(simpleIncrement()); // 2
// console.log(simpleIncrement()); // 3


// let counter_1 = 0;
// function simpleIncrement() {
//     counter_1++
//     if(counter_1 < 1500){
//         simpleIncrement(); // recursive function
//     }
//     return counter_1;
// }

// console.log(simpleIncrement());