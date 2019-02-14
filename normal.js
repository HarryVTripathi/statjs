//Calculate the area under normal curve from 0 to specified z-value




const normal = (x) =>
{
	function f(x)
	{
		return Math.exp((-1)*((Math.pow(x,2))/2));
	}

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

	return  sNumber.parseFloat(sum).toPrecision(5);
}


//z_value(1.5);

module.exports = normal;