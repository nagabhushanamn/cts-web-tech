/*

    A closure is a function having access to the parent scope,
    even after the parent function has closed.


    why/when we need closure?

    --> to abstract public-behav of any module
    --> while executing functions async, to access parent-scoped data.

*/


// e.g  counter module





// function init() {

//     var count = 0; // private

//     // public    
//     function doCount() {
//         count++;
//     }

//     function getCount() {
//         return count;
//     }

//     return {
//         doCount: doCount,
//         getCount: getCount
//     };

// }

// var counter = init();


//-------------------------------

// self excutable func  ( well known module pattern )

var counter = (function () {

    var count = 0; // private

    // public    
    function doCount() {
        count++;
    }

    function getCount() {
        return count;
    }

    return {
        doCount: doCount,
        getCount: getCount
    };

})();