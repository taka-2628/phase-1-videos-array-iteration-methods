const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];



// .find() method takes an already declared function as argument
function isCherries(element) {
    return element.name === 'cherries';
}
function isBananas(element) {
    return element.name === 'bananas';
}

inventory.find(isCherries);
//=> { name: 'cherries', quantity: 5 }
inventory.find(isBananas);
//=> { name: 'bananas', quantity: 0 }



// .find() method takes an anonymous function as argument
inventory.find(function(element){
    return element.name === 'apples'
})
//=> { name: 'apples', quantity: 2 }



// .find() method takes an arrow function as argument
inventory.find(element => element.name === "cherries")
//=> { name: 'cherries', quantity: 5 }
