var isValid = true;

function toggleBoolean(booleanVar) {
	if (typeof booleanVar === 'boolean') {
		return !booleanVar;
	} else {
		console.log('Warning! Not a boolean.');
	}
}

var newBoolean = toggleBoolean(false);
console.log(newBoolean);