

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



    var login=document.getElementById('login'),
        register=document.getElementById('register'),
        lr=document.getElementById('login_register'),
        _login=document.getElementById('_login'),
        _register=document.getElementById('_register'),
        bt_login=document.getElementById('bt_login'),
        bt_register=document.getElementById('bt_register'),
        name1=document.getElementById('name1'),
        name2=document.getElementById('name2'),
        pwd1=document.getElementById('pwd1'),
        pwd2=document.getElementById('pwd2'),
        rName=document.getElementById('rName');

    login.onclick=function(){
        lr.style.display='block';
        _login.style.display='block';
        _register.style.display='none';

    }
    register.onclick=function(){
        lr.style.display='block';
        _login.style.display='none';
        _register.style.display='block';

    }

    name1.onblur=function(){
        chcekName(name1,name1.value.trim());
    }


    function chcekName(ele,val){
        if(document.getElementById('cc')){
            ele.parentNode.removeChild(ele.parentNode.lastChild);
        }
        var p=document.createElement('p');
        p.id="cc";
        var strRegex = /^[a-zA-Z0-9_]+$/;  //^\\w+$/;
        if(val){
            if(!strRegex.test(val)){
                p.innerHTML="用户名只能由6-18个数字、英文字母组成！";
            }else{
                 p.innerHTML="格式正确!";
            }

        }else{
            p.innerHTML="用户名不能为空!";     
        }
        ele.parentNode.appendChild(p);
    }

    bt_login.onclick=function(){
        var xhr=new XMLHttpRequest;
        xhr.open("GET","info.txt");
        xhr.send();
        xhr.onreadystatechange = function() {
        if (xhr.readyState===4) {
            if (xhr.status===200) {
            var obj=JSON.parse(xhr.responseText);
                if(name1.value==obj.name&&pwd1.value==obj.pwd){
                    lr.style.display='none';
                    rName.innerHTML=obj.name;
                    rName.style.color="red";
                    login.innerHTML="";
                    register.innerHTML="";
                    alert("登录成功！");
                }else{
                    alert("用户名或密码错误！");
                }
            } else {
                alert("发生错误：" + xhr.status);
            }
        } 
    }
    }

}

