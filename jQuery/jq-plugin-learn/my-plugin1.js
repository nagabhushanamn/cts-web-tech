$.fn.makeBorder = function (options) {

    var settings = {
        'border-color': '1px solid red',
        html: '<h3> Nil </h3>'
    };

    $.extend(settings, options);

    this
        .css('border', settings['border-color'])
        .html(settings.html);
    
    return this;
}