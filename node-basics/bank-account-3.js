var accounts = [];

function createAccount(account) {
	accounts.push(account);
	return account;
}

function getAccount(username) {
	var matchedAccount;

	for (var index = 0; index < accounts.length; index++) {
		if (accounts[index].username === username) {
			matchedAccount = accounts[index];
		}
	}
	
	return matchedAccount;
}

function deposit(account, amount) {
	if (typeof amount === 'number') {
		account.balance += amount;
	} else {
		console.log('deposit failed. amount is not a number');
	}
}

function withdraw(account, amount) {
	// only accept number
	if (typeof amount === 'number') {
		account.balance -= amount;
	} else {
		console.log('withdraw failed. amount is not a number');
	}
}

function getBalance(account) {
	return account.balance;
}

// createBalanceGetter(account)
// 		return function()
//			account.balance (return it)
function createBalanceGetter(account) {
	return function () {
		return account.balance;
	};
}

var sergio = createAccount({
	username : 'Sergio',
	balance : 0
});

deposit(sergio, 120);
withdraw(sergio, 'my string');

var sergio2 = getAccount('Sergio');
var getSergio2Balance = createBalanceGetter(sergio2);

console.log(getSergio2Balance());