var j=0;
var cnt=0;
$(document).keydown(function(e){

    if (e.keyCode == 39) 
		{ 
			
       	
		type=t[j];
		
		if(type=='h')
		{
			if(cnt==0)
				{playhbefore(e,j);cnt++;}
			else if(cnt==1)
				{playhafter(e,j);cnt=0;j++;}
			
		
		}
		else if(type=='f')
		{
			if(cnt==0)
				{playfbefore(e,j);cnt++;}
			else if(cnt==1)
				{playfmid(e,j);}
			else if(cnt==2)
				{playfafter(e,j);cnt=0;j++;}
		
		}
		else if(type=='v')
		{
			if(cnt==0)
				{playfbefore(e,j);cnt++;}
			else if(cnt==1)
				{playfmid(e,j);}
			else if(cnt==2)
				{playhafter(e,j);cnt=0;j++;}
		
		}
		else if(type=='q')
		{
			if(cnt==0)
				{playqbefore(e,j,'l');cnt++;j++;}
			else if(cnt==1)
				{playqbefore(e,j,'r');cnt++;}
			else if(cnt==2)
				{playqafter(e,j-1);playqafter(e,j);cnt=0;j++;}
		}
		
	   return false;
	   }
	  // slide();
});


function playqbefore(e,j,d){//alert("qbefore"+j);
	if(d=='l')
	{var moveBg0 = {type: 'left',from:-200, to: 0, step: 5, delay: 40}
	var moveBg1 = {type: 'top', from:-200,to: 0, step: 5, delay: 40}
	}
	else
	{var moveBg0 = {type: 'left',from:100, to: 300, step: 5, delay: 40}
	var moveBg1 = {type: 'top', from:-200,to: 0, step: 5, delay: 40}
	}
	var z={type: 'z-index', to: 200, step: 15, delay: 40}
	var moveBg2 = {type: 'width',from:600, to: 300, step: -5, delay: 40}
	var moveBg3 = {type: 'height', from:1000,to: 500, step: -5, delay:40}
	var stars = document.getElementById('sample1').getElementsByTagName('img');
	$fx(stars[j]).fxAdd(moveBg0).fxAdd(z).fxRun();
	$fx(stars[j]).fxAdd(moveBg1).fxAdd(moveBg2).fxAdd(moveBg3).fxRun();
	}
	
function playhbefore(e,j){//alert("hbefore"+j);
var moveBg2 = {type: 'left',from:600, to: 0, step: -5, delay: 40}
var moveBg3 = {type: 'width',to: 600, step: -15, delay: 40}
	var moveBg4 = {type: 'height',to: 500, step: -15, delay: 40}
	var z={type: 'z-index', to: 200, step: 15, delay: 40}
	var stars = document.getElementById('sample1').getElementsByTagName('img');

	$fx(stars[j]).fxAdd(moveBg2).fxAdd(z).fxAdd(moveBg3).fxAdd(moveBg4).fxRun();}
	
function playfbefore(e,j){//alert("fbefore"+j);

var moveBg0 = {type: 'opacity',from:0,to: 100, step: 1, delay: 40}
var moveBg3 = {type: 'width',from:0,to: 600, step: 15, delay: 40}
	var moveBg4 = {type: 'height',from:0,to:800, step: 15, delay: 40}
var stars = document.getElementById('sample1').getElementsByTagName('img');
var z={type: 'z-index', to: 200, step: 15, delay: 40}
stars[j].style.top='0%';
stars[j].style.left='0%';
var moveBg5 = {type: 'left',to:300, step: -15, delay: 40}
var moveBg6 = {type: 'top',to:0, step: -15, delay: 40}
stars[j].style.opacity=0;

	$fx(stars[j]).fxAdd(z).fxAdd(moveBg0).fxRun();
}
function playqafter(e,j){//alert("qafter"+j);
var moveBg0 = {type: 'left', to: -600, step: -5, delay: 40}

var stars = document.getElementById('sample1').getElementsByTagName('img');
var z={type: 'z-index', to: 1, step: -5, delay: 40}
$fx(stars[j]).fxAdd(moveBg0).fxAdd(z).fxRun();

}
function playhafter(e,j){//alert("hafter"+j);
var moveBg0 = {type: 'left', to: -1200, step: -5, delay: 40}
var z={type: 'z-index', to: 1, step: -15, delay: 0}
	//var moveBg1 = {type: 'top', to: -600, step: -15, delay: 40}
	var stars = document.getElementById('sample1').getElementsByTagName('img');
	
	$fx(stars[j]).fxAdd(moveBg0).fxRun();}
	
function playfafter(e,j){//alert("fafter"+j);
var moveBg0 = {type: 'opacity',to: -200, step: -15, delay: 40}
var stars = document.getElementById('sample1').getElementsByTagName('img');
//alert(stars[j].style.opacity);
var z={type: 'z-index', to: 1, step: -15, delay: 40}
	$fx(stars[j]).fxAdd(moveBg0).fxAdd(z).fxRun();
}
/*function playfmid(e,j){//alert("fmid"+j);

	var moveBg1 = {type: 'top', to: -600, step: -15, delay: 40}
	var z={type: 'z-index', to: 200, step: 15, delay: 40}
	var stars = document.getElementsByTagName('img');
	var stars = document.getElementById('sample1').getElementsByTagName('img');
	
	
	$fx(stars[j]).fxAdd(moveBg1).fxRun();}*/
function playfmid(e,j){//
	var z={type: 'z-index', from:0,to: 400, step: 5, delay: 40}
	var stars = document.getElementById('sample1').getElementsByTagName('img');
	var top1=parseInt(stars[j].style.top);
	//alert(top1);
	var top2=top1-5;
	//alert(top2);
	var moveBg1 = {type: 'top', from:top1,to: top2, step: -15, delay: 40}
	
	if(top1>-400)
		$fx(stars[j]).fxAdd(moveBg1).fxAdd(z).fxRun();
	else
		cnt++;
	
	//$fx(stars[j]).fxAdd(moveBg1).fxRun();
	}
	
function slide()
{
var stars = document.getElementById('sample1').getElementsByTagName('img');
var j;
var x=0;
var y=0;
for(j=0;j<no;j++)
	{
	stars[j].style.left=x;
	stars[j].style.top=0;
	x=x+600;
	document.getElementById('sample1').style.left=y;
	y=y+600;
	}
}