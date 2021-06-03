$(document).ready(function () {
    
    $('#submit').click(function () {
        let username = $('#username'); //#id //.class
        let password = $('#password');
        let error = false;
    
        if (username[0].value.length == 0 || 
            password[0].value.length == 0)
            error = true;
        
        if (error) {
            alert('error');
        }
    
        else {
            $.post('/postsignup', 
            {
                username: username.val(), 
                password: password.val(),
            },  function(result){
                console.log(result);
                window.location = '/';
            });
        }
       });
});