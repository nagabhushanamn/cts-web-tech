/*

  in browser , events has default behav.

  click-event on links, submit-event on forms , always reload current-page

  but , we can prevent-default behav any event.

*/

$(function () {

    var $postForm = $('#postForm');

    $postForm.submit(function (event) {
        var $email = $('#email', this);
        var $message = $('#message', this);
        var post = {
            email: $email.val(),
            message: $message.val()
        };
        console.dir(post);

        $email.val('');
        $message.val('');
        event.preventDefault();
    });


});