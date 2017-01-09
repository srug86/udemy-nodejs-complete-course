var person = {
	gender: 'male',
	'eyeColor': 'blue'
};

person['firstName'] = 'Sergio';
person.lastName = 'de la Rubia';

var ageProperty = 'age';
person[ageProperty] = 30;

function greetUser(person) {
	console.log('Hello ' + person.firstName + ' ' + person['lastName']);
	console.log(person.firstName + ' is ' + person[ageProperty] + ' years old');
	console.log(person.firstName + ' has a pair of ' + person.eyeColor + ' eyes');
}

greetUser(person);

console.log(person);

delete person.age;

console.log(person);

var pet = {
	name : 'Patches',
	type : 'Dog'
};

function printPet(pet) {
	console.log('Your ' + pet.type + ' is named ' + pet.name);
}

printPet(pet);