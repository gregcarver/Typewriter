var targetLetter=document.getElementById('target-letter')
var words=document.getElementById('sentence');
var block=document.getElementById('yellow-block');
var pos=$('#yellow-block').position();
var sentences = [
'ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean',
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceNum=0
var letterCount=0
var counter=letterCount++
var start=new Date();
var numberOfMistakes=0
var numberOfWords=54

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

$(document).keypress(function(e){
    var characters=sentences[sentenceNum].charAt(letterCount)
    var keystroke=String.fromCharCode(e.which)
   

    if(sentences[sentenceNum].length == letterCount){
        $('#sentence').empty()
        sentenceNum++
        letterCount=0
        words.innerHTML=sentences[sentenceNum].toString();
        //letterCount++
        //$(letterCount).val(0);
        $('#yellow-block').css('left','1em')

    if(characters=keystroke){
        $('#feedback').empty()
        letterCount++
        $('#yellow-block').animate({"left":"+=0.72em"},15);
        $('#feedback').append('<span class="glyphicon glyphicon-ok" </span>')
    }
}

    if(characters==keystroke){
        $('#feedback').empty()
        letterCount++
        $('#yellow-block').animate({"left":"+=0.72em"},15);
        $('#feedback').append('<span class="glyphicon glyphicon-ok" </span>')

    }else if(sentenceNum==4 /*&& sentences[sentenceNum].length == letterCount*/){
        wordsPerMinute()
    }
    
    else{
        $('#feedback').empty()
        $('#feedback').append('<span class="glyphicon glyphicon-remove" </span>')
        numberOfMistakes++
    }
        $('#target-letter').text(keystroke)

})

function wordsPerMinute(){ 
        console.log(numberOfWords)
    console.log(numberOfMistakes)
    var end = new Date() - start;
    var minute = end / 60000;
    var roundMin = Math.round(minute);
    var WPM = (numberOfWords / roundMin - 2 * numberOfMistakes);
    alert (WPM);
    confirm('Would you like to play again')
    location.reload();

}

      