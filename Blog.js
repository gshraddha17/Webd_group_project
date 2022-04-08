$(document).ready(function() {
    $(".read").click(function() {
        $(this).prev().toggle();

        if ($(this).text() == 'Read More') {
            $(this).text('Read Less');
        } else {
            $(this).text('Read More');
        }

    });
});