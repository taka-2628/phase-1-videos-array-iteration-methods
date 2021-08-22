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

function printReports(foo){
    console.log(foo(books))
}

function totalInventory(array){
    let total = 0;
    for(let item of array){
        total += item.inventory
    };
    return `Total Inventory: ${total} items`
}

function replenish(array){
    let replenishList = []
    for(item of array){
        if(item.inventory < 3){
            replenishList.push(item.title)
        }
    }
    return `Place Order for: ${replenishList.join(', ')}`
}

printReports(totalInventory);
// LOG: Total Inventory: 25 items
printReports(replenish);
// LOG: Place Order for: Learn JavaScript VISUALLY, JavaScript: The Definitive Guide

