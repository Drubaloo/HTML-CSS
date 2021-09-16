$(".menu").click(function(){
    $(".line1").toggleClass("line1-toggle");
    $(".line2").toggleClass("line2-toggle");
    $(".line3").toggleClass("line3-toggle");
 });

 document.onkeypress = function (eventKeyName) {
    eventKeyName = eventKeyName || window.event;
    if(eventKeyName.keyCode==13){
       console.log('You have pressed enter key');
    } else {
       alert(String.fromCharCode(eventKeyName.keyCode))
 }
};

var enter = new KeyboardEvent('keypress',{'key':13})

 document.querySelector(".menu").dispatchEvent(enter);