window.onload = function(){
	/*
	document.getElementById("nav").onclick = function(){
		document.getElementById("mostra").classList.toggle("show"); //The toggle system, very usefull but not what I want
	}
	*/
	(function(){
		var bu = document.getElementById('nav');
		var show = document.getElementById('mostra');
		var body = document.body;
		var i = 0;

		bu.addEventListener('click', openClose);
		
		function openClose(){
			body.removeEventListener('click', close);
			if(i == 0){
				show.style.display = "block";
				i = 1;
				setTimeout(function(){
					body.addEventListener('click', close);
				},1);
			}else if(i == 1){
				show.style.display = "none";
				i = 0;
			}
		}

		show.addEventListener('click', killBody);
		
		function killBody(){
			body.removeEventListener('click', close);
			setTimeout(function(){
				body.addEventListener('click', close);
			},1);
		}

		function close(){
			show.style.display = "none";
			i = 0
		}
	})();
}