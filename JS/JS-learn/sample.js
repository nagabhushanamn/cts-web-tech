//#1
function foo(b) {
    var a = 10;
    return a + b + 11;
}

function bar(x) {
    var y = 3;
    return foo(x * y);
}
console.log(bar(7));

//#2
function foo() {

}

function bar() {
    foo();
}

function baz() {
    bar();
}
baz();


// #3
function foo() {
    throw new Error();
}

function bar() {
    foo();
}

function baz() {
    bar();
}
baz();


// #4
function foo() {
    foo();
}
foo();


// #5

function longRunning() {
    var i = 0;
    while (i < 5) {
        console.log('long..........');
        i++;
    }
}

function shortRunning() {
    console.log('short...');
}

longRunning();
shortRunning();

// #6


/*

    <button type="button" class="odd">button-1</button>
    <button type="button" class="even">button-2</button>


*/


console.log('satrt....');

$.on('.odd', 'click', function handle1(event) {
    console.log('handling click event on .odd elements');
});
$.on('.even', 'click', function handle2(event) {
    console.log('handling click event on .even elements');
});

function longRunning() {
    var i = 0;
    while (i < 5) {
        console.log('long..........');
        i++;
    }
}

console.log('continue with other work...');
longRunning();


// 7


console.log('start..');

// Timer API

setTimeout(function () {
    console.log('after timeout...');
}, 5000);

var i = 0;
while (i < 5) {
    console.log('long..........');
    i++;
}