function range(start, stop)
{
    var array = [];

    var length = stop - start; 

    for (var i = 0; i <= length; i++) { 
        array[i] = start;
        start++;
    }

    return array;
}

console.log(range(1, 100));  // [1,2,3,4,5,6,7]
console.log(range(5, 10)); // [5,6,7,8,9,10]
console.log(range(-2, 3)); // [-2,-1,0,1,2,3
