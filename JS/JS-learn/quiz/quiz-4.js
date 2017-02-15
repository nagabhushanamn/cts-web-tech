function Person(name, age) {
    this.name = name;
    this.age = age;

    var self = this;    
    //event , emitted by global-obj
    setInterval(function () { 
        self.age++;
        console.log(self.name+"==>"+self.age);
    },1000);

}

var p = new Person('Ria', 0);