var num = prompt('Please enter a number: ');

for (var i = 1; i <= num; i++ ){
    if (num%3 === 0 && num%5 === 0){
        document.write("FizzBuzz<br>");
    } else if (i%5 == 0) {
        document.write("Buzz<br>");
    } else if (i%3 == 0) {
    	document.write("Fizz<br>");
    } else {
    	document.write(i + '<br>');
    }
  };
  
