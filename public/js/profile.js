$(document).ready(function () {

    //id
    $('#chara-submit').click(function(){
        let about = $('#chara-input');
        
        $.get('/updateabout', {about: about.val()}, function(data, status){});
        window.location = '/profile';
    });
})