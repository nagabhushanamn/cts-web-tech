

/*
    imp-note
    ----------

    every event-handler/listener or callbacks
    always executed by an obj who emitted that event


*/



var trainer = {
    name:'Ria'
};

var teachService={ 
    doTeach: function () {
        console.dir(this);
        console.log(this.name+" teaching ..js");
    }    
};



var teachBtn = document.getElementById('teachBtn');

// teachBtn.addEventListener('click',teachService.doTeach);

// soln-1
// teachBtn.addEventListener('click', function () { 
//     // teachService.doTeach();
//     teachService.doTeach.call(trainer);
// });

// soln-2 ( shortcut)
teachBtn.addEventListener('click',teachService.doTeach.bind(trainer));

