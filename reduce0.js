let numbers = [1, 2, 3];

// WITHOUT USING .REDUCE()
// Calculate the total of element of the array

function sumOfElements(array){
    let sum = 0;
    for (element of array) {
        sum += element
    }
    return sum;
}

sumOfElements(numbers);
//=> 6


// USING .REDUCE() 
// An anonymous function as an argument
// Calculate the total of element of the array
let sumAnn = numbers.reduce(function(previousValue, currentValue){return previousValue + currentValue})

sumAnn;
//=> 6


// USING .REDUCE() 
// An arrow function as an argument
// Calculate the total of element of the array
let sumArr = numbers.reduce((previousValue, currentValue) => (previousValue + currentValue))

sumArr;
//=> 6

// USING .REDUCE() 
// An independently reclared function as an argument
// Calculate the total of element of the array
let sumIndDcld = numbers.reduce(addItAllUp);
function addItAllUp(previousValue, currentValue){
    return previousValue + currentValue;
}

sumIndDcld;
//=> 6

