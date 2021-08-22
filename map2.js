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

// instead of passing in fiftyPercentSale as a callback function,
// writes out an anonymous function as a callback function
let updatedInventory = books.map(function (item){
    item.price = Math.floor(item.price / 2);
    return item;
})

console.log(updatedInventory);
/*
[
    { title: 'Eloquent JavaScript', price: 8, inventory: 5 },
    { title: 'JavaScript: The Good Parts', price: 5, inventory: 10 },
    { title: 'Learn JavaScript VISUALLY', price: 12, inventory: 2 },
    { title: "You don't know js", price: 30, inventory: 8 },
    { title: 'JavaScript: The Definitive Guide', price: 9, inventory: 0 }
]
*/


/* the function below is turned into an anonymous function in the case above
let updatedInventory = books.map(fiftyPercentSale);

function fiftyPercentSale(item){
    item.price = Math.floor(item.price/2)
    return item
}
*/
