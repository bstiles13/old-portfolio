$(document).ready(function() {

    $(document).on('click', '.button', function(event) {
        event.preventDefault();
        console.log('jquery is back baby!');
        var formResults = $('.email-form').serializeArray();
        console.log(formResults);

    })

})