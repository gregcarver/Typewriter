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

$(document).keydown(function(e){
    var span=document.getElementsByClassName("well well-lg key")
   var id=$(span).attr('id')
    console.log(id)
    console.log(e.keyCode=id)
        if(e.which=id){
        $(span).addClass('blue')
        console.log('hih');
   }
})

$(document).keyup(function(e){
    var span=document.getElementsByClassName("well well-lg key")
   var id=$(span).attr('id')
    console.log(id)
    console.log(e.which=id)
        if(e.which=id){
        $(span).removeClass('blue')
        console.log('hih');
   }
})
