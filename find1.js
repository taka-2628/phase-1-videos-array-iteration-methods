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


// Write a fucntion that:
//      Find a given book ('JavaScript: The Definitive Guide')
function isTheBook(item){
    return item.title === 'JavaScript: The Definitive Guide'
}

// Write a fucntion that:
//      Find a book that needs to be stocked (less than 3 in inventory)
function stockFirst(item){
    return item.inventory < 3
}

// .find() takes isTeBook as an argument
let foundItem = books.find(isTheBook);
console.log(foundItem);
// LOG: { title: 'JavaScript: The Definitive Guide', price: 18.95, inventory: 0 }

// .find() takes stockFirst as an argument
let itemToStock = books.find(stockFirst);
console.log(itemToStock);
// LOG: { title: 'Learn JavaScript VISUALLY', price: 25, inventory: 2 }

// .find() takes an anonymous function as an argument 
let booksLessThanFifteen = books.find(function(item){
    return item.price < 15
})
console.log(booksLessThanFifteen);
// LOG: { title: 'JavaScript: The Good Parts', price: 10.5, inventory: 10 }


// .find() takes an arrow function as an argument
let soldOut = books.find(item => item.inventory === 0);
console.log(soldOut);
// LOG: { title: 'JavaScript: The Definitive Guide', price: 18.95, inventory: 0 }


// WITHOUT using .find() method (good way to see what .find() method does)
// Write a function that: 
//      Loop through an inventory array
//      Find the first item whose condition returns true based on a finder callback function
function loopThroughAndFind(inventory, finder){
    let result = null
    for (let item of inventory){
        if(finder(item) === true){
            result = item
            break 
        }
    }
    return result
}

//console.log(loopThroughAndFind(books, isTheBook));
// LOG: { title: 'JavaScript: The Definitive Guide', price: 18.95, inventory: 0 }

//console.log(loopThroughAndFind(books, stockFirst));
// LOG: { title: 'Learn JavaScript VISUALLY', price: 25, inventory: 2 }