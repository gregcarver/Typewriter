var targetLetter=document.getElementById('target-letter')
var words=document.getElementById('sentence');
var block=document.getElementById('yellow-block');
var pos=$('#yellow-block').position();
var sentenceCounter=[0]
var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean',
'itant eate anot eat nato inate eatanot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$(document).ready(function(){ 
    words.innerHTML=sentences[0].toString();
    console.log(sentences.toString());
})

function sentenceSelector(sentenceNum,){
   console.log( $(sentences).array_values())
}




$(document).keypress(function(){
    $('#yellow-block').animate({"left":"+=0.70em"},15);
})


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

$(document).on('keypress', function(e){
         $("#" + e.which).addClass('blue')
    $(document).keyup(function(){
         $("#" + e.which).removeClass('blue')
    })
})

/*$(document).on('keydown', function(e){
        $("#" + e.which).addClass('blue')
$(document).keyup(function(){
        $("#" + e.which).removeClass('blue')
    })
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