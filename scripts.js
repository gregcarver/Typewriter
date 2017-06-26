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
var j=sentenceNum
var letterCount=0
var counter=letterCount++

var spaghetti=sentences[j].charAt(letterCount)


$('yellow-block').append(sentences[sentenceNum]);

$(document).ready(function(){ 
    words.innerHTML=sentences[sentenceNum].toString();
})

$(document).keypress(function(e){
    var feedback=String.fromCharCode(e.which)
    $('#target-letter').text(feedback)
    if('#target-letter'==true)
    console.log($('#feedback').addClass('.glyphicon glyphicon-ok'))
})      
    
$(document).keypress(function(e){
    console.log(spaghetti)
    //letterCount++
   // console.log(letterCount)
    $('#yellow-block').animate({"left":"+=0.72em"},15);
})

    /*  if(48<=letterCount){
        $(block).css('margin-left','-850px');
        words.innerHTML=sentences[sentenceNum+1]
       // letterCount++
     } else if(97<letterCount){
        words.innerHTML=sentences[sentenceNum+2]
        $(block).css('margin-left','-850px');
        letterCount++
          }
           else if(140<letterCount){
        words.innerHTML=sentences[sentenceNum+2]
        $(block).css('margin-left','-850px');
        letterCount++
          }


})*/


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