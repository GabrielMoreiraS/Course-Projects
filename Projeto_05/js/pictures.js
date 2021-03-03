const displayer = document.querySelector('[data-displayer]');
const row = document.querySelector('[data-row]');
const arrows = document.querySelectorAll('[data-arrow]');
const pictures = document.querySelectorAll('[data-pic]');

function changeDisplayer(){
    pictures.forEach(e => {
        e.onclick = () =>{
            displayer.setAttribute('style',e.getAttribute('style'));
        }
    })
}
changeDisplayer();

function changeOptions(){
    arrows.forEach(e => {
        var arrow = document.getElementById(e.getAttribute('id'));
        arrow.addEventListener('click', ()=>{
            var rowPos = row.offsetWidth;
            if(arrow.getAttribute('id') == 'r'){
                row.scrollBy(rowPos,0);
            }else{
                row.scrollBy(-rowPos,0);
            }
        })
    })
    window.onresize = () =>{
        row.scrollTo(0,0);
    }
}
changeOptions();