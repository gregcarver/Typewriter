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
var letterCount=0
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
    var correct=0
    var numberofMistakes=0
    var numberOfWords=0
    var characters=sentences[sentenceNum].charAt(letterCount)
        console.log(letterCount)
    var keystroke=String.fromCharCode(e.which)
    numberOfWords++
        console.log(keystroke)
       console.log(characters)
    if(sentences[sentenceNum].length <= letterCount){
        $('#sentence').empty()
        words.innerHTML=sentences[sentenceNum++].toString();
        letterCount=0
        //letterCount++
        //$(letterCount).val(0);
        $('#yellow-block').css('left','1em')
        
    console.log('hi')

}

    if(characters==keystroke){
        $('#feedback').empty()
        letterCount++
        $('#yellow-block').animate({"left":"+=0.72em"},15);
        $('#feedback').append('<span class="glyphicon glyphicon-ok" </span>')
        correct++
    }
    else{
        $('#feedback').empty()
        $('#feedback').append('<span class="glyphicon glyphicon-remove" </span>')
     //   numberOfMistakes++
    }
    $('#target-letter').text(keystroke)


//console.log(numberOfWords / minutes -2 * numberofMistakes)
})      



