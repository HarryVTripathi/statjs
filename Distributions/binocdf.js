const binopdf = require('./binopdf');
const poissoncdf = require('./poissoncdf');
const normal = require('./normal');

const binocdf = (n,p,x) =>
{
	var cdf = 0;

	if(n<=20)
	{
		for(var i=0; i<=x; i++)
			cdf += binopdf(x,n,p);
	}

	else if(n>30 && (p<0.1 || p>0.9))
		cdf = poissoncdf(n,p,x);


	else
	{
		var z = (x - (n*p))/Math.sqrt(n*p*(1-p));
		cdf = normal(z);
	}

	return cdf;
}

console.log(binocdf(22,0.3,10));