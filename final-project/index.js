$(function() {

    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        success: function(label) {
            label.parent().removeClass("error-parent");
        },
        highlight: function(element, errorClass) {
            $(element).parent().addClass("error-parent");
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        rules: {
            fname: {
                required: true,
            },
            lname: {
                required: true,
            },
            email: {
                required: true,
            },
            tel: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "THIS FIELD IS REQUIRED"
            },
            lname: {
                required: "THIS FIELD IS REQUIRED"
            },
            email: {
                required: "PLEASE ENTER YOUR E-MAIL ADDRESS"
            },
            tel: {
                required: "PLEASE ENTER YOUR TELEPHONE NUMBER"
            }
        }
    });


});