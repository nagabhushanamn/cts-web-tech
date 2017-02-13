// All objects that emit events are instances of the EventEmitter class.


var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();


// ee.on('some-event1', function () {
//     console.log('some-event handled....');
// });
// ee.on('some-event2', function () {
//     console.log('some-event handled....');
// });

// ee.emit('some-event1');
// ee.emit('some-event2');
// ee.emit('some-event1');

//-------------------------------------------------

// ee.setMaxListeners(20);

// ee.on('some-event', function () { console.log('handler-1') });
// ee.on('some-event', function () { console.log('handler-2') });
// ee.on('some-event', function () { console.log('handler-3') });
// ee.on('some-event', function () { console.log('handler-4') });
// ee.on('some-event', function () { console.log('handler-5') });
// ee.on('some-event', function () { console.log('handler-6') });
// ee.on('some-event', function () { console.log('handler-7') });
// ee.on('some-event', function () { console.log('handler-8') });
// ee.on('some-event', function () { console.log('handler-9') });
// ee.on('some-event', function () { console.log('handler-10') });
// ee.on('some-event', function () { console.log('handler-11') });

// ee.emit('some-event');

//-------------------------------------------------


// ee.once('some-event', function () { console.log('handler executed once') });

// ee.emit('some-event');
// ee.emit('some-event');

//-------------------------------------------------

// var handler1 = function () {
//     console.log('handler1....');
// }
// var handler2 = function () {
//     console.log('handler2....');
// }

// ee.on('some-event', handler1);
// ee.on('some-event', handler2);

// // ee.removeAllListeners();
// ee.removeListener('some-event',handler1);

// ee.emit('some-event');

//-------------------------------------------------
// practical example on node-events
//-------------------------------------------------



class Door extends EventEmitter {
    constructor() {
        super();
        console.log('Door instance created..');
    }
    open() {
        console.log('door opened...');
        this.emit('door-open', null, {
            num: 5,
            floor: 2
        });
    }
    close() {
        console.log('door closed...');
        this.emit('door-close', null, {
            num: 5,
            floor: 2
        });
    }
}



var door = new Door();


setTimeout(function () {
    door.open();
    setTimeout(function () {
        door.close();
    }, 5000);
}, 5000);



class Light {
    constructor() {
        console.log('Light isnatce created...');
        door.on('door-open', function (err, doorEvent) {
            console.log(`LIGHT ON , floor : ${doorEvent.floor} , Num : ${doorEvent.num}`);
        });
        door.on('door-close', function (err, doorEvent) {
            console.log(`LIGHT OFF , floor : ${doorEvent.floor} , Num : ${doorEvent.num}`);
        });
    }
}
var light = new Light();


class AC {
    constructor() {
        console.log('AC isnatce created...');
        door.on('door-open', function (err, doorEvent) {
            console.log(`AC ON , floor : ${doorEvent.floor} , Num : ${doorEvent.num}`);
        });
        door.on('door-close', function (err, doorEvent) {
            console.log(`AC OFF , floor : ${doorEvent.floor} , Num : ${doorEvent.num}`);
        });
    }
}
var light = new AC();

//-------------------------------------------------