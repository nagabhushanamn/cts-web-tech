/*

  in browser , events has default behav.
  click-event on links, submit-event on forms , always reload current-page
  but , we can prevent-default behav any event.

*/




var posts;
// posts = JSON.parse(localStorage.getItem('posts'));
// posts = posts || [];




$(function () {

    var $postForm = $('#post-form');
    var $allPosts = $('#all-posts');


    var myUtil = {
        validate: function ($field) {
            if ($field.val() === "") {
                $field.closest('div').addClass('has-error');
                //    .end().focus();
                return false;
            } else {
                $field.closest('div').removeClass('has-error')
                return true;
            }
        },
        initialRender: function () {
            //$allPosts.children().remove(); // bad-code
            posts.forEach(function (post) {
                var template = `
            <div class="alert alert-info">
                <small>${post.email}</small>
                <p>${post.message}</p>
            </div>
            `;
                $allPosts.append($(template));
            });

        },
        renderPost: function (post) {
            var template = `
            <div class="alert alert-info">
                <small>${post.email}</small>
                <p>${post.message}</p>
            </div>
            `;
            $allPosts.append($(template));
        }
    };

    var apiUrl = "http://0.0.0.0:3000/api/posts";
    var request = $.ajax({
        url: apiUrl,
        method: 'GET'
    });

    request.done(function (resp) {
        posts = resp;
        myUtil.initialRender();
    });



    $postForm.on('submit', function (event) {

        event.preventDefault();

        var $email = $('#email', this);
        var $message = $('#message', this);

        // validate

        var isValid = true;

        // if (!myUtil.validate($email)) {
        //     isValid = false;
        // }
        // if (!myUtil.validate($message)) {
        //     isValid = false;
        // }

        $postForm.find('.form-control')
            .each(function (index) {
                if (!myUtil.validate($(this))) {
                    isValid = false;
                }
            });

        if (!isValid) {
            return;
        }

        var post = {
            email: $email.val(),
            message: $message.val()
        };

        //posts.push(post);
        //localStorage.setItem('posts', JSON.stringify(posts));
        //myUtil.renderPosts();

        var request = $.ajax({
            url: apiUrl,
            method: 'POST',
            data: post
        });

        request.done(function (resp) {
            posts.push(resp);
            myUtil.renderPost(resp);
        });

        //es-6        

        $email.val('');
        $message.val('');

    });


});