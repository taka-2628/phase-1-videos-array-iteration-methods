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

// Calculate the total price of the inventories - .reduce() takes an independently declared function as argument
function reducer(accumulator, item){
    //console.log(accumulator, item)
    let total = item.price * item.inventory
    return accumulator += total
}

let totalPrice = books.reduce (reducer, 0)
console.log(totalPrice)
//LOG: 715

// Concatenate all the titles - .reduce() takes an anonymous function as argument


let allTheTitles = books.reduce (function(accumulator, item){ /*console.log(accumulator, item)*/; return accumulator + ", " + item.title}, "").substring(2)


console.log(allTheTitles)
//LOG: Eloquent JavaScript, JavaScript: The Good Parts, Learn JavaScript VISUALLY, You don't know js, JavaScript: The Definitive Guide

