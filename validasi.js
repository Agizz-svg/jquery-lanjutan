$(document).ready(function(){
    $('.form').submit(function(){
        var nama = $('#nama').val().length;

        if(nama == 0){
            $(".pesan-nama").css('display','block');
        }
    });
});