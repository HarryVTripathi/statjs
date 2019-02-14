


const f = require(p);

function simpson(f)
{
	const dt = 0.0001;
	var sum = 0;
	var a = 0;
	var b = parseFloat((a+dt).toFixed(5));

	while(a<x)
	{
		sum = sum + dt * (f(a) + 4*f((a+b)/2) + f(b));
		a = b;
		b = parseFloat((b+dt).toFixed(5));
	}


	sum = sum/6;
	sum = sum/(Math.sqrt(2*Math.PI));

	console.log(Number.parseFloat(sum).toPrecision(5));
}