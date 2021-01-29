var pointer = $(".pointer");
var body = $("body");
var fill = $(".fill");
var barra = $(".barra");
var isDraged = false;
var currentValueP = $("#initial");
var initialValue = 6000;
var maxValue = 64000;

$(document).mouseup(()=>{
    isDraged = false;
    enableTextSelection();
});

$(document).mousemove((e)=>{
    if(isDraged)selector(e);
});

barra.click((e)=>{
    selector(e);
}).mousedown((e)=>{
    isDraged = true;
    selector(e);
});

function selector(e){
    disableTextSelection();
    var baseXPos = barra.offset().left;
    var mouseX = e.pageX - baseXPos;
    if(mouseX < 0)
        mouseX = 0;
    if(mouseX > barra.width())
        mouseX = barra.width();
    var percent = (mouseX / barra.width() * 100);
    fill.css("width",percent +"%");
    pointer.css("left",(percent - 4)+"%");
    var value = (percent * maxValue) / 100 + initialValue;
    var format = value.toFixed(2);
    var split = format.split('.');
    value = formatValue0(value);
    // value = formatValue1(split);
    currentValueP.html("R$"+value);
}
//The most simple and fast way to do it
function formatValue0(v){
    var a = v.toLocaleString("pt", {maximumFractionDigits: 2});//this thing here do all the trick for us
    if(a == "70.000" || a == "6.000"){
        return a+",00";
    }else{
        var array = a.split(",");
        if(array[1].length < 2)
            return a+"0";
        else    
            return a;
    }
}
//The most custumable and better one to do
function formatValue1(v){
    if(v[0] < 10000)
        return v[0][0]+'.'+v[0].substr(1,v[0].length)+","+v[1];
    else if(v[0] < 100000)
        return v[0][0]+v[0][1]+'.'+v[0].substr(2, v[0].length)+","+v[1]; 
}

function disableTextSelection(){
    body.css("-webkit-user-select","none");//Safari
    body.css("-ms-user-select","none");//IE 10 and IE 11
    body.css("user-select","none");//Standard syntax to disable user text selection
}

function enableTextSelection(){
    body.css("-webkit-user-select","auto");
    body.css("-ms-user-select","auto");
    body.css("user-select","auto");//Standard syntax to enable user text selection
}