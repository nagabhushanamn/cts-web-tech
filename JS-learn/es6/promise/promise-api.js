/*
     in .js-lang , we can invoke function in 2 ways
        1. sync
        2. async

*/


// 1. sync

// function foo() {

// }
// function bar() {
//     foo(); // sync....blocks
//     //......
// }

// 2. async

// function timeout() {
//     //...
// }
// setTimeout(timeout,5000);

//-------------------------------------------------------------

// Promise API

/*
    ==> execute function async when they r done processing with result or error
    ==> deferring actions to future

*/


var pizzaShop = {
    getPizza: function () {
        var promise = new Promise(function (resolve, reject) {

            setTimeout(function () {
                console.log('resolving pizaa promise');
                resolve('CHIKEN PIZAA');
                //reject('SORRY>>');
            }, 5000);

        });
        return promise;
    }
};

var softDrink = {
    getPepsi: function () {
        var promise = new Promise(function (resolve, reject) {

            setTimeout(function () {
                console.log('resolving/rejecting pepsi promise');
                resolve('500ml pepsi');
                //reject('SORRY>>');
            }, 2000);

        });
        return promise;
    }
};



var trainer = {
    doTeach: function () {
        console.log('teaching...');
        console.log('feel hungry, requesting PIZZA');
        var promise1 = pizzaShop.getPizza();
        var promise2 = softDrink.getPepsi();
        console.log('got promise, deferring actions to future with callbacks');

        // promise.then(function (pizza) {
        //     console.log('Yummy with ' + pizza);
        // }, function (reason) {
        //     console.log('oops ' + reason);
        // });

        // Promise.all([promise1, promise2])
        Promise.race([promise1, promise2])
            .then(function (results) {
                console.log('Yummy with ' + results[0] + " " + results[1]);
            }, function (reason) {
                console.log('oops ' + reason);
            }).catch(function () {
                //..
            });


        console.log('continue on further teach.. end');

    }
};

trainer.doTeach();