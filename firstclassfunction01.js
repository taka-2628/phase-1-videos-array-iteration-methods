//takes an array and console.log each element 
const loopThroughArray = function(array){
    for (let item of array){
        console.log(item)
    }
}

//takes an array and capitalize each element and put them in new array
const capitalizeArray = function(array){
    let newArray = []
    for (let item of array){
        newArray.push(item.toUpperCase())
    }
    console.log(newArray)
}


function handleBooks(fun){
    let books = [
        'Eloquent JavaScript', 
        'JavaScript: The Good Parts', 
        'Learn JavaScript VISUALLY',
        'You don\'t know js',
        'JavaScript: The Definitive Guide'
    ]

    fun(books);
}

handleBooks(loopThroughArray);
// LOG: Eloquent JavaScript
// LOG: JavaScript: The Good Parts
// LOG: Learn JavaScript VISUALLY
// LOG: You don't know js
// LOG: JavaScript: The Definitive Guide
handleBooks(capitalizeArray);
/* LOG:
[
  'ELOQUENT JAVASCRIPT',
  'JAVASCRIPT: THE GOOD PARTS',
  'LEARN JAVASCRIPT VISUALLY',
  "YOU DON'T KNOW JS",
  'JAVASCRIPT: THE DEFINITIVE GUIDE'
]
*/

