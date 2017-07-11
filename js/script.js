

window.onload=function(){

    var slider=document.getElementById('slider'),
        imgs=slider.getElementsByTagName('img'),
        w=imgs[0].width,
        len=imgs.length,
        buttons=document.getElementById('buttons').getElementsByTagName('li'),
        prev01=document.getElementById('prev01'),
        next01=document.getElementById('next01'),
        index=1,
        boolean=true,
        speed=1500;

        function show(l){
            if(boolean){
            var newLeft=parseInt(slider.style.left)+l;
            if(newLeft>0){
                newLeft=-1*w*(len-1);
            }if(newLeft==-1*w*len){
                newLeft=0;
            }
                slider.style.left=newLeft+'px'; 
            }
        }

        function showButton(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=='on'){
                buttons[i].className='';
            }
        }
        if(index==0){
            index=5;
            }
            buttons[index-1].className='on';
        
    }
        function onButton(){
           for(var i=0;i<buttons.length;i++){
            buttons[i].onmousemove=function(){
                var d=parseInt(this.getAttribute('index'));
                slider.style.left=-1*w*d+'px';
                index=d+1;
                showButton();
            }
           }
        }
        function stop(){
            boolean=false;
        }
        function start(){
            boolean=true;
        }

        function onImg(){
            for(var i=0;i<imgs.length;i++){
                imgs[i].onmousemove=function(){
                    stop();
                };
                imgs[i].onmouseout=function(){
                    start();
                }
            };
        }

        function run(){
            show(-w);
            setTimeout(run,speed);
            index=-parseInt(slider.style.left)/w+1;
            showButton();

        }

        prev01.onclick=function(){
            index--;
            show(w);
            showButton();
            event.stopPropagation();
            event.preventDefault();
        }
        next01.onclick=function(){
            index++;
            show(-w);
            showButton();
            event.stopPropagation();
            event.preventDefault();
        }
        showButton();
        onButton();
        onImg();
        setTimeout(run,2000);

}

