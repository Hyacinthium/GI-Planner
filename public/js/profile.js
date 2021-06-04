$(document).ready(function () {

    //id
    $('#chara-submit').click(function(){
        let character = $('#chara-input');
        
        $.get('/updateCharacter', {character: character.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#vision-submit').click(function(){
        let vision = $('#vision-input');
        
        $.get('/updateVision', {vision: vision.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#weap-submit').click(function(){
        let weapon = $('#weap-input');
        
        $.get('/updateWeapon', {weapon: weapon.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#flower-submit').click(function(){
        let flower = $('#flower-input');
        
        $.get('/updateFlower', {flower: flower.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#plume-submit').click(function(){
        let plume = $('#plume-input');
        
        $.get('/updatePlume', {plume: plume.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#sands-submit').click(function(){
        let sands = $('#sands-input');
        
        $.get('/updateSands', {sands: sands.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#goblet-submit').click(function(){
        let goblet = $('#goblet-input');
        
        $.get('/updateGoblet', {goblet: goblet.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#circlet-submit').click(function(){
        let circlet = $('#circlet-input');
        
        $.get('/updateCirclet', {circlet: circlet.val()}, function(data, status){});
        window.location = '/profile';
    });
})