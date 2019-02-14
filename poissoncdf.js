const poissonpdf = require('./poissonpdf');

const poissoncdf = (l,t,x) => 
{
	var cdf = 0;

	for(var i=0; i<=x; i++)
		cdf += poissonpdf(l,t,i);

	return cdf;
}

//console.log(poissoncdf(2,2,4));