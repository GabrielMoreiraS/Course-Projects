(()=>{
	var body = document.body;
	var show = document.getElementById("show");
	var bu = document.getElementById("nav");
	var i = 0;

	bu.addEventListener('click',function(){
        setInterval(()=>{
            if(body.offsetWidth > 630){
                show.style.display = "none";
                i = 0;
            }
        },1);
		body.removeEventListener('click', close);
		if(i == 0){
			show.style.display = "block";
			i = 1;
			setTimeout(()=>{
				body.addEventListener('click', close);
			},1);
		}else if(i == 1){
			show.style.display = "none";
			i = 0;
		}
	});
	
	show.addEventListener('click',function(){
		body.removeEventListener('click', close);
		setTimeout(()=>{
            body.addEventListener('click', close)
        },1);
	});

	function close(){
		show.style.display = "none";
		i = 0;
    }

    verifyWindow();
    function verifyWindow(){
        var gb = document.getElementById("gb");
        setInterval(()=>{
            var winPos = window.pageYOffset;//this here gets the window position
            var places = document.querySelectorAll("[data-s],[data-c]");	
            if(winPos > places[0].offsetTop){
                gb.style.display = "block";
                gb.onclick = () => window.scrollTo(0,0);
            }else{
                gb.style.display = "none";
            }
            if((winPos + 720) > places[1].offsetTop){
                gb.style.backgroundColor = "white";
               gb.style.color = "rgb(71,38,99)";
            }else{
                gb.style.backgroundColor = "rgb(71,38,99)";
                gb.style.color = "white";
            }	
        },1);
    }

    var links = document.querySelectorAll("[data-link]");
    links.forEach(b => {
        b.addEventListener("click", ()=>{
            var attr = b.getAttribute("place");
            var place = document.querySelector(`[${attr}]`);
            var placePos;
            if(place.getAttribute("id") == "four"){
                placePos = place.offsetTop;//Use this to get the elements position
            }else{
                placePos = (place.offsetTop - 330);
            }
            window.scrollTo(0,placePos);
        });
    });
})();



