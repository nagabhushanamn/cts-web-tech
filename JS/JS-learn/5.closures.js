
/*

    "A closure is a function having access to the parent scope,
    even after the parent function has closed.""


    why/when we need closure?

    --> to abstract public-behav of any module
    --> while executing functions async, to access parent-scoped data.

*/

function teach(sub) {
    console.log('teaching ' + sub);
    var notes = sub + "-notes";
    var i = 100;
    function inner() {
        
    }
    function learn() {
        console.log('learning ' + sub + ' with ' + notes);
    }
    console.log('teaching end...');
    return learn;
} // context-destroy



var learnFunc = teach('.js'); // new-context with args & locals

learnFunc();
learnFunc();
learnFunc();
