$(function () {

    // $('div.well').on('click mouseover', function (event) {
    //     // console.dir(event);
    //     // console.log('event handler');

    //     if (event.type == 'click') {
    //         console.log('clic-event handler..');
    //     }
    //     if (event.type == 'mouseover') {
    //         console.log('mouseover-event handler..');
    //     }
    // });

    //---------------------------------------------------


    // $('div.well').on({
    //     click: function (event) {
    //         console.log('click-event handler..');
    //     },
    //     mouseover: function (event) {
    //         console.log('mouseover-event handler..');
    //     }
    // });

    //---------------------------------------------------    

    // $('div.well').on({
    //     click: function (event) {
    //         console.log('click-event handler..');
    //         // console.dir($(this));
    //         //$(this).hide();
    //     },
    //     mouseover: function (event) {
    //         console.log('mouseover-event handler..');
    //     }
    // });

    //---------------------------------------------------    

    // var foo = function () { console.log('foo'); $(this).off('click',bar) }
    // var bar = function () { console.log('bar'); }

    // $('div.well').on('click',foo).on('click',bar)    

    //---------------------------------------------------  

    // $('div.well').one('click', function () {
    //     console.log('one time');
    //  })

    //---------------------------------------------------  

    // var $jumboBox = $('div.jumbotron');
    // var $box = $jumboBox.find('div.well');
    // var $btn = $box.find('.btn-primary')
    // var $link = $box.find('.btn-link')

    // $jumboBox.on('click', function (event) {
    //     console.log('jumbo-box click-event handler');
    //     console.dir(event);
    // });
    // $box.on('click', function (event) {
    //     console.log('box click-event handler');
    //     console.dir(event);
    //     event.stopPropagation();
    // });

    // $btn.on('click', function (event) {
    //     console.log('btn click-event handler');
    //     console.dir(event);
    //     event.stopPropagation();
    // })

    // $link.on('click', function (event) {
    //     console.log('btn click-event handler');
    //     console.dir(event);
    //     event.preventDefault();
    //     event.stopPropagation();
    // })

    //---------------------------------------------
    // jquery -event short-cut method


    // var $jumboBox = $('div.jumbotron');
    // var $btn = $jumboBox.find('.well .btn-primary');


    //  $btn.on('click', function (event) {
    //     console.log('btn click-event handler');
    //     console.dir(event);
    //     event.stopPropagation();
    // })


    // $btn.click(function (event) {
    //     console.log('btn click-event handler');
    //     console.dir(event);
    //     event.stopPropagation();
    // })


    // $jumboBox.click(function (event) {
    //     console.log('handling click event');
    //     console.log(event.which);
    // });
    // $jumboBox.contextmenu(function (event) {
    //     console.log('handling right-click event');
    //     console.log(event.which);
    // });

    //----------------------------------------------

    // Event Delegation

    // without-Delegation

    // $('div.well button').on('click', function (event) {
    //     console.log('handling click-event on buttons');
    // });


    // with Delegation
    // $('div.well').on('click', '.odd', function (event) {
    //     console.log('handling click-event on buttons');
    //     // console.dir(this);
    //     console.dir(event.target);
    // });

    //----------------------------------------------


    // Triggering events / custom-events

    // $('div.well').on('my-click', function (event,o) {
    //     console.log('handling click-event on box');
    //     console.dir(o);
    // });
    

    // $('div.well').trigger('my-click', { data: 1 });
    // $('div.well').trigger('my-click', { data: 2 });
    // $('div.well').trigger('my-click', { data: 3 });
    


});