// ref : http://www.w3schools.com/jquery/trysel.asp

// $('#lastName')
//     .css('border', '1px solid red')
//     .css('background-color','yellow');

//----------------------------------------

// $('#lastName')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });

//----------------------------------------

// $('.well,#lastName')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });


//----------------------------------------


// $('div:first')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });

//----------------------------------------

// $('p:first-child')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });

//----------------------------------------

// $('p:first-of-type')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });

//----------------------------------------

// $('div > p')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });

//----------------------------------------

// $('div p')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });

//----------------------------------------

// $('div ~ p')
//     .css({
//         'border': '1px solid red',
//         'background-color': 'yellow'
//     });

//----------------------------------------

// $('#link-box a[href$=pdf]')
//     .before($('<i>').addClass('fa fa-file-pdf-o'));

// $('#link-box a[href$=doc]')
//     .before($('<i>').addClass('fa fa-file-word-o'));   

//---------------------------------------- 

// better-code

var $link_box = $('#link-box');


//  $link_box.find('a[href$=pdf]')
//     .before($('<i>').addClass('fa fa-file-pdf-o'));

// or

$('a[href$=pdf]',$link_box)
    .before($('<i>').addClass('fa fa-file-pdf-o'));

$('a[href$=doc]',$link_box)
    .before($('<i>').addClass('fa fa-file-word-o'));

//---------------------------------------- 