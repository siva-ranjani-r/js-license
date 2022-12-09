var age=parseInt(prompt("Enter age value"));
var test=parseInt(prompt("Enter test mark out 10 value"));
if(18<age)
{
	if(5>test)
	{
		alert("person is not eligible so, go again to the 1st round")
	}
	else
	{
		alert("person is eligible")
	}		
}
else
{
	alert("Age is not elegible for lisence")
}