//  

function teach() {
    var name = "Nag"; // moved to heap before teach-context detroy
    try {
        console.log('teach start...');
        setTimeout(function () {
            console.log('after timeout..');
            //throw new Error('i hate .js');
            console.log(name + " back..");
        }, 5000);
        console.log('teach end...');
    } catch (e) {
        console.log('i caught ' + e.message);
    }
}

teach();