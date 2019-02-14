const gammaln = require('./gammaln');

const binopdf = (n,p,x) =>
{
	if(arguments.length<3)
		throw Error('Too few arguments');

	var pdf = Math.exp (gammaln(n+1) - gammaln(x+1) - gammaln (n-x+1) + x*Math.log(p) + (n-x)*Math.log (1-p));
	return pdf;
}

//console.log(binopdf(5,10,0.5));

module.exports = binopdf;