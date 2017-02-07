var person = {
    name: 'Nag'
};
var sub = ".js";

// var message = " the person " + person.name + " teaching " + sub; // es5
// var message = `the person ${person.name} teaching ${sub}`; // es6

// console.log(message);

// var template = "<div>" +
//                   "<h1>"+person.name+"</h1">      
//                "</div>"    

var template = `
    <div>
        <h1> ${person.name}</h1>
    </div>
`;


console.log(template);
