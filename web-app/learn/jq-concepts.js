$(function () {

    //$('a.external').css({border:'1px solid red'});    

    //-----------------------------------------------

    // var allLinks = $('a');

    // way-1
    // allLinks.filter('.external').css({ border: '1px solid red' });

    // way-2
    // allLinks.filter(function (index) {
    //         return $(this).hasClass('external');
    //     })
    //     .css({
    //         border: '1px solid red'
    //     });

    //----------------------------------------------- 

    // $('p').find('em')
    //     .css({
    //         border: '1px solid red'
    //     });

    // or

    // $('p em').css({
    //     border: '1px solid red'
    // });


    //----------------------------------------------- 

    // var spanSelection = $('p').filter('.middle').find('span');
    // spanSelection.css({ 'font-size': 25 });
    // spanSelection.end().css({ border: '1px solid red' });
    // spanSelection.end().end().css({ 'background-color': 'yellow' });

    //----------------------------------------------- 


    // $('#my-box').find('p').addBack().css({ border: '1px solid red' });

    //------------------------------------------------------------

    // $('li:eq(1)')
    //     // .next()
    //     // .prev()
    //     // .parent()
    //     // .parent().children()
    //     // .nextAll()
    //     .prevAll()
    //     .css({ border: '1px solid red' });

    //------------------------------------------------------------

    // var $p=$('<p><a>jQuery</a></p>')
    //     .find('a')
    //     .attr({
    //         href: 'http://jquery.com'
    //     })
    //     .end()
    //     //.appendTo('body');


    // //$('body').append($p);   

    //------------------------------------------------------------

    // function handler1(event) {
    //     console.log('handling click event');
    // }
    // $('.btn').click(handler1);


    // $('.btn').clone().appendTo('body')

    //------------------------------------------------------------

    // console.log($('#my-box').html());

    //$('#my-box').text('<h1> jquery </h1>'); 

    //------------------------------------------------------------

    // $('#name').closest('div').css('border', '1px solid red');

     //------------------------------------------------------------

});