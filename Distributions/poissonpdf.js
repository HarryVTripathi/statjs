
/*
The probability distribution of the Poisson random variable X, representing
the number of outcomes occurring in a given time interval or specified region
denoted by t.

Lambda is the average number of outcomes per unit time, distance, area
*/
const factorial = require('./factorial');

const poisson = (l,t,x) =>
{
	var lt = l*t;
	return (Math.exp(lt*(-1)) * Math.pow(lt,x))/factorial(x);

}

//console.log(poisson(2,2,6));

module.exports = poisson;