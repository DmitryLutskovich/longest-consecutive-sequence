module.exports = function longestConsecutiveLength(array) {
	let length = 0;
	let current = 0;
	array.sort((a,b) => a-b);
	if(array.length<2)
	{
		return array.length;
	}
	array.forEach(function (item, i, array)
		      {
		if(item === array[i+1]-1)
		{
			++current;
		}
		else if(item !== array[i+1])
		{
			current=0;
		}
		if(length<current) length = current;
	});
	return ++length;
};
