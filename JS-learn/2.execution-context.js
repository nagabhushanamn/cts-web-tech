/*

    Execution-Context:

    ==> memory with given args & local variables to execute given instructions

    2-phases

    phase-1 : Context-creation

        all variables declared any-where will get hoisted(lifting-up) to top of context with default value(undefined.

    phase-2 : Context-execution

        all given instruction in that-context will sequence.


   imp-notes :

   ==>every js-runtime has one global-context & global-obj by default.

   global-object

   browser  ==> window
   node.js  ==> process      

   ==>global-context always executed by global-obj.

   ==>if context dosent have variable ,trying to access, will throw 'reference-error'

   ==> every function invocation also creates new-context which is child of above-context.

   best-practice : declare all variable at top of file/function to avoid hoisting confuse.


*/



// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1(); // f1-context  ===> global-context


// var v = 12;
// function f1() {
//     var v = 14;
//     function f2() {
//         console.log(v);
//     }
//     //f2(); // f2-context ==> f1-context
//     // var v = 14;
//     return f2;
// }

// var f2Func = f1(); // f1-context  ==> global-context
// f2Func(); f2(); // f2-context ==> f1-context

//-------------------------------------------------------


var name = "GLOBAL";

function teach() {
    //var name = "Nag";
    // console.log(tnrName + " teaching .js");

    function learn() {
        // console.log('learning .js from ' + tnrName);
    }
    //learn();
    // var name = "Nag";
    return learn;
}

var learnFunc = teach(); // teach-context  ==> global-context

learnFunc(); // learn-context ==> teach-context