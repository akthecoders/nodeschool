function doubleAll(numbers) {
	let result = [];
	numbers.map((item,index) => {
		result[index] = item * 2;
	});
	return result;
}

module.exports = doubleAll
