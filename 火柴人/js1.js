var panel=document.getElementById("panel");
		var createbt=document.getElementById("create");
		var sortbt=document.getElementById("sort");

		var n=0;
		function change(array ,j){
			var ahead=true;
			(function loop(){
				array[j].style.transform="rotateY("+n+"deg)";
				array[j+1].style.transform="rotateY("+n+"deg)";
				if(n<90&&ahead){
					n+=5;
					setTimeout(loop,1);
				}
				if(n>=90&&ahead){
					ahead=false;
					setTimeout(loop,1);
				}
				if(n>0&&!ahead){
					n-=5;
					setTimeout(loop,1);
				}
				if(n<=0&&!ahead){
					return;
				}
			})();
			
		}


		function sort(){
			var array=document.getElementsByTagName("img");
			var i=0,j=0;
			var loop=setInterval(sort2,135);       				//每隔500ms进行一次冒泡操作
			function  sort2(){
				if(i<array.length-1){
					if(j<array.length-i-1){
						if(parseInt(array[j].style.height)>parseInt(array[j+1].style.height)){
							array[j].src="personr.png";
							change(array,j);
							(function(i,j){
								setTimeout(function(){
									var temp=panel.removeChild(array[j+1]);
									panel.insertBefore(temp,array[j]);
									if(j+1==array.length-1-i){array[j+1].src="personb.png";}
								},90);
							})(i,j);
						}
						else{	
							(function(i,j){
								setTimeout(function(){
								array[j].src="person.png";
								array[j+1].src="personr.png";
								if(j+1==array.length-1-i){array[j+1].src="personb.png";}
								},90);
							})(i,j);
						}
					}
					j++;
				}
				if(j>=array.length-i-1){i++;j=0;}
				if(i>=array.length-1){clearInterval(loop);setTimeout(function(){array[0].src="personb.png";},400);}
			}	
		}

		function init(){
			createbt.onclick=function(){
				var num=document.body.clientWidth/130;
				for(var k=0;k<num;k++){
					var img=document.createElement("img");
					img.class="person";
					img.src="person.png";
					img.style.height=100+Math.random()*250+"px";
					panel.appendChild(img);
				}
			}
			sortbt.onclick=sort;
		}
		init();

