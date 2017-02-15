



function print(a) {
    return function (b) {
        return function (c) {
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
}

print(1)(2)(3);  // function currying