sliderAuthors();
var peopleAmount;
var current = 0;
var delay = 5000;
function sliderAuthors(){
    peopleAmount = $(".authors").length;
    var buttons = $(".b");
    for(var i = 0; i < peopleAmount; i++){
        if(i == 0)
            buttons.append("<span style='background-color: black'></span>");
        else
            buttons.append("<span style='background-color: gray'></span>");
    }
}
change();
function change(){
    setInterval(()=>{
        current++;
        if(current == peopleAmount)
            current = 0;
        slider(current);
    },delay);
}
function slider(c){
    $(".b span").css("background","gray");
    $(".b span").eq(c).css("background","black");
    var posL = $(".authors").eq(c).offset().left - $(".container-authors").offset().left;
    $(".peoplec").stop().animate({"scrollLeft":posL+"px"});
}

$(window).resize(function(){
    $(".b span").css("background","gray");
    $(".b span").eq(0).css("background","black");
    $(".peoplec").stop().animate({"scrollLeft":0+"px"});
})