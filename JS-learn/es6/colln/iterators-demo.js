

//


var items = ['item-1', 'item-2', 'item-3'];

// var it = items[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// if  object is an iterable object

//-----------------------------------
// we can use 'for-of' loop

// for (var item of items) {
//     console.log(item);
// }
//----------------------------
// var newArray = ['biryani', ...items];
// //---------------------------------
// var [menu1] = items;

//-----------------------------------

// custom iterable objects


var idMaker = {
    [Symbol.iterator]: function () {
        var i = 0;
        return {
            next: function () {
                return {
                    value: ++i,
                    done: i>=10?true:false
                }
            }
        };
    }
};


// for (var id of idMaker) {
//     console.log(id);
//     //if (id === 10) break;
// }

// var ids = [...idMaker];

var [id1, id2, id3] = idMaker;
