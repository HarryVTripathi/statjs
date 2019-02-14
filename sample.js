const sample = function(sampleArray)
{
	this.array = sampleArray.sort(),
	this.Size = sampleArray.length,
	this.n = (this.Size-1)/2,
	this.distribution = this.Size > 30 ? "normal" : "t",
	this.mean = function(){
		var sum = 0;
		for(var i=0; i<this.Size; i++)
			sum = sum + sampleArray[i];
		return sum/this.Size;
	},
	this.median = function() { 
		var index = this.Size%2===0 ? (Math.floor(n) + Math.ceil(n))/2 : n;
		return array[index];
	},
	this.variance = function(){
		var sum = 0, mean = this.mean();
		for(var i=0; i<this.Size; i++)
			sum = sum + (sampleArray[i]-mean)**2;
		return sum/(this.Size-1);
	},
	this.confidenceInterval = function(){

	}
};

module.exports = sample;