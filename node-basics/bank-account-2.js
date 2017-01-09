var accounts = [];

// Account Object
// balance
// username

// createAccount(account)
// push onto accounts array
// return account
function createAccount(account) {
	accounts.push(account);
	return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount(username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

// deposit(account, amount)
function deposit(account, amount) {
	account.balance += amount;
}

// withdraw(account, amount)
function withdraw(account, amount) {
	account.balance -= amount;
}

// getBalance(account)
function getBalance(account) {
	return account.balance;
}

var sergiosAccount = createAccount({
	username : 'Sergio',
	balance : 0
});

deposit(sergiosAccount, 100);

console.log(getBalance(sergiosAccount));

withdraw(sergiosAccount, 11);

console.log(getBalance(sergiosAccount));

var existingAccount = getAccount('Sergio');
console.log(existingAccount.balance);

var jensAccount = createAccount({
	username : 'jen001',
	balance : 12
});

console.log(accounts);

var existingJensAccount = getAccount('jen001');
console.log(existingJensAccount);