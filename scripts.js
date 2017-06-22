$( document ).ready(function() {
    $('#keyboard-upper-container').hide();
});

$(document).keydown(function(e){
    if(e.which==16){
        console.log('hi');
}     
})


