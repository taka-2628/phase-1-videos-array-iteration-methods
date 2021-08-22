let arr = [3, 4, 5, 6];

arr.map(function(element){
    element -= 1
    return element
})
//=> [ 2, 3, 4, 5 ]

arr.map(multiplyByThree)
//=> [ 9, 12, 15, 18 ]
arr.map(plusOne)
//=> [ 4, 5, 6, 7 ]

function multiplyByThree (element){
    element *= 3
    return element;
}

function plusOne (element){
    element += 1
    return element
}


