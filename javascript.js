window.onscroll = function ()
{
	TheAnimation();
};

window.onload = function ()
{
	TheAnimation();
};
function TheAnimation()
{	
	var Anim = document.getElementsByClassName("anim") , kamutAnim = Anim.length ,StartAnimation=[],heightPage = window.innerHeight;
	var i , TimeRun , NameAnimation , temp1 , temp2  , style = document.createElement('style');;
	for(i=0; i<kamutAnim; i++)
	{
		StartAnimation.push(Anim[i].offsetTop - Anim[i].offsetHeight);
		NameAnimation = document.getElementsByClassName("anim")[i].getAttribute("data-animation-name");	
	if (document.documentElement.scrollTop > StartAnimation[i] - heightPage + Anim[i].offsetHeight)
	{
		Anim[i].classList.add(NameAnimation);			
		TimeRun = Anim[i].getAttribute("data-animation-duration");		
		if (!TimeRun)
			TimeRun = 0.8;
			
		if(NameAnimation == "FadeUp")
		{		
			temp1 = getComputedStyle(Anim[i]).marginTop;
			temp1 = parseInt(temp1);
			temp2 = temp1 + 150;
			style.innerHTML = '@keyframes FadeUp{from {margin-top: ' + temp2 + 'px;}to {margin-top:  ' + temp1 +'  px ;}}';
			document.head.appendChild(style);
		}
		
		if(NameAnimation == "FadeBottom")
		{		
			temp1 = getComputedStyle(Anim[i]).marginBottom;
			temp1 = parseInt(temp1);
			temp2 = temp1 + 150;
			style.innerHTML = '@keyframes FadeUp{from {margin-bottom: ' + temp2 + 'px;}to {margin-bottom:  ' + temp1 +'  px ;}}';
			document.head.appendChild(style);
		}
		
		document.getElementsByClassName("anim")[i].style.animationDuration =  TimeRun + "s";		
		document.getElementsByClassName("anim")[i].style.opacity = "1";
		document.body.style.overflowX="hidden";
		setTimeout(function (){document.body.style.overflowX="auto";},TimeRun * 1000);
	}
		else
		{
			document.getElementsByClassName("anim")[i].classList.remove(NameAnimation);
			document.getElementsByClassName("anim")[i].style.opacity = "0";	
			
		}
	}
}
