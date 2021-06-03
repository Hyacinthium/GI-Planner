$(document).ready(function () {

    $('#submit').click(function (e) {
        let username = $('#username'); //#id //.class
        let password = $('#password');
        e.preventDefault();
    
        $.post('/postlogin', 
        {
            username: username.val(), 
            password: password.val(),
        },  function(result){

            if(result.username == username.val() && result.password == password.val()){
                window.location = '/profile';
                done();
            }
            else{
                $('#error-message-login').text("Wrong Username or Password.");
            }
        });
        
      });
});