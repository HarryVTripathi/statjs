//const math = require('mathjs');



const gammaln = function(x)
{
	function f(x,t)
	{
		return Math.pow(t,x-1) * Math.exp(t*(-1));
	}

	const dt = 0.0001;
	var sum = 0;
	var a = 0;
	var b = parseFloat((a+dt).toFixed(5));

	while(a<1 || f(x,a)*2>dt)
	{
		sum = sum + (dt) * (f(x,a) + f(x,b));
		a = b;
		b = parseFloat((b+dt).toFixed(5));
	}

	sum = sum/2;

	return Math.log(sum);
}

module.exports = gammaln;