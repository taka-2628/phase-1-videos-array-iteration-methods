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

// .map is a method that is called on an array 
// .map method takes a function as an argument,
// then create a new array,
// then populates the new array with the result of calling a provided function on every element in the calling array

books.map(fiftyPercentSale);
books.map(stockItemByFive);

/* this below function from firstclassfunction03.js is replaced by .map() method
function updateInventory (inventory, updaterFoo){
    let updatedInventoryArray = []
    for (let item of inventory){
        updatedInventoryArray.push(updaterFoo(item))
    }
    console.log(updatedInventoryArray);
}
*/

function fiftyPercentSale(item){
    item.price = Math.floor(item.price/2)
    return item
}

function stockItemByFive(item){
    item.inventory += 5;
    return item;
}

