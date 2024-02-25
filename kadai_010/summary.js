$(function (){
    //文字色変化
    $('#change-color').on('click', function(){
        $('#target').css('color', 'red');        
    });

    //文字内容変化
    $('#change-text').on('click', function(){
        $('#target').text('Hello!'); 
    });

    //文字をフェードアウト
    $('#fade-out').on('click', function(){
        $('#target').fadeOut(); 
    });

    //文字をフェードイン
    $('#fade-in').on('click', function(){
        $('#target').fadeIn(); 
    });



   

})