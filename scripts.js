$( document ).ready(function() {
    $('#keyboard-upper-container').hide();
});

$(document).keydown(function(e){
    if(e.which==16){
        $('#keyboard-lower-container').hide()
        $('#keyboard-upper-container').show()
}     
})
$(document).keyup(function(e){
    if(e.which==16){

        $('#keyboard-upper-container').hide()
        $('#keyboard-lower-container').show()
}     
})

$(document).on('keyup', function(e){
 $("#" + e.which).removeClass('blue')
})

$(document).on('keydown', function(e){
 $("#" + e.which).addClass('blue')
})



/*function handleHighlight(code){
    $('#' + code).css({'background-color':'lightblue'})
}()*/

/*$(document).keydown(function(e){
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
   var id=$(this).find(span).attr('id')
    console.log(id)
    console.log(e.which=id)
        if(e.which=id){
        $(span).removeClass('blue')
        console.log('hih');
   }
})*/