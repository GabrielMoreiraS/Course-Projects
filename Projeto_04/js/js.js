window.onload = function(){
    (function(){
        var body = document.body;
        var bu = document.getElementById("nav");
        var show = document.getElementById("show");
        var i = 0;

        bu.addEventListener('click', function(){
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
        });

        show.addEventListener('click',function(){
            body.removeEventListener('click', close);
            setTimeout(function(){
                body.addEventListener('click', close);
            },1)
        });

        function close(){
            show.style.display = "none";
            i = 0;
        }
    })();
}