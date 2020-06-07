var a = [1, 3, 4, {
    roll: 3
}, 7, 8, {
    roll: 2
}, 9];


var result = a.reduce(function(res, item) {
    if (typeof item === 'object') {
        res.c.push(item);
    } else {
        res.b.push(item);
    }
    return res;
}, {
    b: [],
    c: []
});

console.log(result.b);
console.log(result.c);