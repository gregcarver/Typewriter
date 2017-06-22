$( document ).ready(function() {
    $('#keyboard-upper-container').css({'display':'none'});
});

$(document).keydown(function(e){
    if(e.which==16){
        $('#keyboard-lower-container').css({'display':'none'});
        $('#keyboard-upper-container').css({'display':'block'})
}     
})
$(document).keyup(function(e){
    if(e.which==16){
        $('#keyboard-upper-container').css({'display':'none'});
        $('#keyboard-lower-container').css({'display':'block'})
}     
})
var span='span.id'

$('.key-row').keypress(function(e){
    if(e.keyCode==span)
        $( span.id).toggle( "highlight" );
        console.log('hi')
})
