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

// Take an inventory array as an argument 
// Loop through the array and update every item  
// Push the updated items to a new array and update it 

function updateInventory (inventory, updaterFoo){
    let updatedInventoryArray = []
    for (let item of inventory){
        updatedInventoryArray.push(updaterFoo(item))
    }
    console.log(updatedInventoryArray);
}
 

// Take an item as an argument
// Update the items price to 50% off
function fiftyPercentSale(item){
    item.price = Math.floor(item.price/2)
    return item
}

updateInventory(books, fiftyPercentSale);
/* => [
  { title: 'Eloquent JavaScript', price: 8, inventory: 5 },
  { title: 'JavaScript: The Good Parts', price: 5, inventory: 10 },
  { title: 'Learn JavaScript VISUALLY', price: 12, inventory: 2 },
  { title: "You don't know js", price: 30, inventory: 8 },
  { title: 'JavaScript: The Definitive Guide', price: 9, inventory: 0 }
]
*/


// Take an item as an argument
// Restorcks the items inventory by 5
function stockItem(item){
    item.inventory += 5;
    return item;
}

updateInventory(books, stockItem);
/* =>
[
    { title: 'Eloquent JavaScript', price: 8, inventory: 10 },
    { title: 'JavaScript: The Good Parts', price: 5, inventory: 15 },
    { title: 'Learn JavaScript VISUALLY', price: 12, inventory: 7 },
    { title: "You don't know js", price: 30, inventory: 13 },
    { title: 'JavaScript: The Definitive Guide', price: 9, inventory: 5 }
]
*/

