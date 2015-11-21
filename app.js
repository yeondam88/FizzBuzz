var num = parseInt(prompt('Please enter a number: '));

//create fizzbuzz game by user input number
function fizzbuzz(num) {

	function check(n) {
		var msg = '';
		if ( n % 3 == 0 ) {msg += "Fizz"};
		if ( n % 5 == 0 ) {msg += "Buzz"};
		return msg || n;
	}

	for (var i = 1; i <= num; i++) {
		document.write(check(i) + "<br>");
	}

}


fizzbuzz(num);

//check the input by User
function validate() {
	if ( num !== parseInt(num)) {
		alert('Please type a number');
	}
}

validate(num);




