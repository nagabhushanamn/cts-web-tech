$.fn.mouseMagic = function (options) {

    this.on('mouseover', function () {
        $(this).slideUp();
    });
    this.on('mouseleave', function () {
        $(this).slideDown();
    });

    return this;

}