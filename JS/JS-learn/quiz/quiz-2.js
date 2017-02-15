
var trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        var self = this;
        function doLearn() {
            // console.log(this.name+' learning .js from '+trainer.name); // its not best soln 
            console.log(this.name+' learning .js from '+self.name);
        }
        //doLearn(); 
        var emp = { name: 'CTS' };
        doLearn.call(emp);
    }
};

// trainer.doTeach();
var tempTrainer = { name: 'Ria' };
trainer.doTeach.call(tempTrainer);

// var tnr = trainer;
// trainer = { name: 'ADRIJA' };
// tnr.doTeach();