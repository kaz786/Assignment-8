

function ca()
{
	a=document.querySelector("#a");
	b=document.querySelector("#b");
	c=document.querySelector("#c");
	a=a.value;
	b=b.value;
	c=c.value;
	
	
	
	if(eval(a)!==undefined &&eval(b)!==undefined&&c!==undefined)
	{
	var root=b*b-4*a*c;
	
	
	if(root>0)
	{
		document.body.innerHTML += "<p>Root are Real & Distinct</p>";
		var root=Math.sqrt(b*b-4*a*c);
		var den=2*a;
		var r1=(-b+root)/den;
		var r2=(-b-root)/den;
	
		
		document.body.innerHTML += "<p>x<sub>1</sub>= "+r1+"  x<sub>2</sub>= "+r2+"</p>";
	}
	else if(root===0)
	{
		var root=Math.sqrt(b*b-4*a*c);
		var den=2*a;
		var r1=(-b+root)/den;
		document.body.innerHTML += "<p>The root are real  equal x<sub>1</sub>=x<sub>2</sub>  "+r1+"</p>";
	}
	else
	{
		document.body.innerHTML += "<p>There are no real root (complex root) </p>";
	}
	  
}
else
	window.alert("Please Enter a number");
}