var targetLetter=document.getElementById('target-letter')
var words=document.getElementById('sentence');
var block=document.getElementById('yellow-block');
var pos=$('#yellow-block').position();
var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean',
'itant eate anot eat nato inate eatanot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceNum=0
var letterCount=-1
var counter=letterCount++


$( document ).ready(function() {
    $('#keyboard-upper-container').hide();
    words.innerHTML=sentences[sentenceNum].toString();
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


//$('#yellow-block').append(sentences[sentenceNum]);


$(document).keypress(function(e){
    var characters=sentences[sentenceNum].charAt(letterCount)
    
    var keystroke=String.fromCharCode(e.which)
      //  console.log(keystroke)
      //  console.log(characters)
    if(characters==keystroke){
        $('#feedback').empty()
        letterCount++
        $('#yellow-block').animate({"left":"+=0.72em"},15);
        $('#feedback').append('<span class="glyphicon glyphicon-ok" </span>')
    }
    else{
        $('#feedback').empty()
        $('#feedback').append('<span class="glyphicon glyphicon-remove" </span>')
    }

   
    $('#target-letter').text(keystroke)
    
})      


