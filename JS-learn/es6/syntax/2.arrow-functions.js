// Arrow FUnctions


// syntax

// var getPrice = () => 100.00;
// var getPrice = (count) => count*100.00;
// var getPrice = count => count * 100.00;
// var getPrice = (count, tax) => (count * 100.00) + tax;
// var getPrice = (count, tax) => {
//     return (count * 100.00) + tax
// };


// why/where w use ?

// var trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
        
//         // Noramal-func:

//         // var self = this;
//         // function askQues(ques) {
//         //     console.log(this);
//         //     console.log(self.name + " answering " + ques);
//         // }

//         // Arrow-func
        
//         var askQues = (ques) => {
//             console.log(this);
//             console.log(this.name + " answering " + ques);
//         };

//         return askQues;
//     }
// };

// var askQues = trainer.doTeach();
// //askQues('ques-1'); //--> context belongs to globa-obj or any-other obj  if it is normal-func
//                    //--> context belongs to trainer  if it is arrow-func


// var tempTrainer = { name: 'Ria' };
// askQues.call(tempTrainer,'ques2');                   



//---------------------------------------------------------------------



// var invoice = {
//     id: 1001,
//     process: function () {
//         coknsole.log(this.id);
//     }
// };

// invoice.process();

//--------------------------------

// var invoice = {
//     id: 1001,
//     process: () => { console.log(this); console.log(this.id);}
// };

// invoice.process();

//----------------------------------

var invoice = {
    id: 1001,
    process: function () {
         return () => { console.log(this.id)};
        //return function () { console.log(this.id);};
    }
};

var func = invoice.process()

var newInvoice = { id: 2001 };
func.call(newInvoice);

//----------------------------------