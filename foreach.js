let books = [
    {
        title: 'Eloquent JavaScript',
        price: 16.00,
        inventory: 5
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 10.50,
        inventory: 10
    },
    {
        title: 'Learn JavaScript VISUALLY',
        price: 25.00,
        inventory: 2
    },
    {
        title: 'You don\'t know js',
        price: 60.00,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitive Guide',
        price: 18.95,
        inventory: 0
    }
]


// Callback function #1 
// This function logs title of an element in an array in uppercase 
// Assign a varible to the anonymous function
const logTitleUpperCase = function (item) {
    console.log(item.title.toUpperCase())
}

// Callback fruntion #2
// This function logs title of an element in an array in lowercase
// Assign a varible to the arrow function
const logTitleLowerCase = item => console.log(item.title.toLowerCase())



// .forEach takes logTitleUpperCase
books.forEach(logTitleUpperCase);
//LOG: ELOQUENT JAVASCRIPT
//LOG: JAVASCRIPT: THE GOOD PARTS
//LOG: LEARN JAVASCRIPT VISUALLY
//LOG: YOU DON'T KNOW JS
//LOG: JAVASCRIPT: THE DEFINITIVE GUIDE

// .forEach takes logTitleLowerCase
books.forEach(logTitleLowerCase);
//LOG: eloquent javascript
//LOG: javascript: the good parts
//LOG: learn javascript visually
//LOG: you don't know js
//LOG: javascript: the definitive guide



// WITHOUT using .forEach() method (good way to see what .forEach() method does)
// Write a function that: 
//      Loop through an array
//      Executes a callback function on every element in the array
function loopThrough (inventory, foo){
    for (item of inventory){
        foo(item) 
    }
}

loopThrough(books, logTitleUpperCase)
//LOG: ELOQUENT JAVASCRIPT
//LOG: JAVASCRIPT: THE GOOD PARTS
//LOG: LEARN JAVASCRIPT VISUALLY
//LOG: YOU DON'T KNOW JS
//LOG: JAVASCRIPT: THE DEFINITIVE GUIDE
loopThrough(books, logTitleLowerCase)
//LOG: eloquent javascript
//LOG: javascript: the good parts
//LOG: learn javascript visually
//LOG: you don't know js
//LOG: javascript: the definitive guide


