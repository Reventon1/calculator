$(document).ready(function(){

let calculator = {
	numberA: null,
	func: null,
	numberB: null,
	output: 0,
	enter: null
}

console.log(calculator);
output();

$("#1").click(function(){
	console.log(1);

	number(1);

	output();
});

$("#2").click(function(){
	console.log(2);

	number(2);

	output();
});

$("#3").click(function(){
	console.log(3);

	number(3);

	output();
});

$("#4").click(function(){
	console.log(4);

	number(4);

	output();
});

$("#5").click(function(){
	console.log(5);

	number(5);

	output();
});

$("#6").click(function(){
	console.log(6);

	number(6);

	output();
});

$("#7").click(function(){
	console.log(7);

	number(7);

	output();
});

$("#8").click(function(){
	console.log(8);

	number(8);

	output();
});

$("#9").click(function(){
	console.log(9);

	number(9);

	output();
});

$("#0").click(function(){
	console.log(0);

	number(0);

	output();
});

$("#plus").click(function(){
	calculator.func = 'plus';
	console.log('plus');
});

$("#enter").click(function(){
	console.log('enter');

	output();
});

$("#min").click(function(){
	if (calculator.enter) {
		calculator.func = 'min';
		calculator.numberB = null;
	}
	calculator.func = 'min';
	console.log('min');
});

$("#enter").click(function(){
	console.log('enter');

	if (calculator.func === 'min') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) - calculator.numberB;
		calculator.output = calculator.enter;
	}

	else if (calculator.func === 'del') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) / calculator.numberB;
		calculator.output = calculator.enter;
	}

	else if (calculator.func === 'umn') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) * calculator.numberB;
		calculator.output = calculator.enter;
	}

	else if (calculator.func === 'plus') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) + calculator.numberB;
		calculator.output = calculator.enter;	
	}

	output();
});

$("#del").click(function(){
	calculator.func = 'del';
	console.log('del');
});


$("#umn").click(function(){
	calculator.func = 'umn';
	console.log('umn');
});


$("#clear").click(function() {
	console.log('clear');
 
 	calculator.numberA = null;
	calculator.func = null;
	calculator.numberB = null;
	calculator.output = 0;
	calculator.enter = null;

	output();
});

function func(func) {
	if (calculator.enter)
}

function number(number) {
	if (calculator.func === null) {
		calculator.numberA = Number((calculator.numberA ? String(calculator.numberA) : 0) + number);
		calculator.output = calculator.numberA;
	}

	else {
		calculator.numberB = Number((calculator.numberB ? String(calculator.numberB) : 0) + number);
		calculator.output = calculator.numberB;
	}
}

function output() {
	$("#output").text(calculator.output);
}

});