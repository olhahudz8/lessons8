$('form input[type=submit]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://tranquil-sierra-86540.herokuapp.com/koldovsky@gmail.com", 
        method: "POST",
        data: {
            name: $('#form-name').val(),
            email: $('#form-email').val()
        },
        dataType: "json"
    })
     .done( $('#message').html('<b>Thank you!</b>') );
}
