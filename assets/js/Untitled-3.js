	'use strict'


	var guessWord = [
	["C","O","R","T","E","Z","A"],
	["R","A","M","A","S"],
	["A","R","B","U","S","T","O","S"],
	["N","U","E","C","E","S"],
	["C","H","O","C","O","L","A","T","E"],
	["B","E","L","L","O","T","A","S"]
	];

	var random = Math.floor((Math.random() * (guessWord.length -1)));

	var words = guessWord[random]; // la palabra para adivinar se elegirá de la matriz anterior
	var ratewort = new Array(words.length);
	var fehler = 0;

	// cada letra de la palabra está simbolizada por un guión bajo en el campo de la suposición
	for (var i = 0; i < ratewort.length; i++){
		ratewort[i] = "_ ";
	}

	// imprime el campo de adivinar
	function printRatewort(){
		for (var i = 0; i < ratewort.length; i++){
		var ratefeld = document.getElementById("ratefeld");
		var buchstabe = document.createTextNode(ratewort[i]);
		ratefeld.appendChild(buchstabe);
		}
	}

	// comprueba si la letra proporcionada por el usuario coincide con una o más de las letras de la palabra
	var pruefeZeichen = function(){
		var f = document.rateformular;
		var b = f.elements["ratezeichen"];
		var zeichen = b.value; // la letra proporcionada por el usuario
		zeichen = zeichen.toUpperCase();
		for (var i = 0; i < words.length; i++){
			if(words[i] === zeichen){
				ratewort[i] = zeichen + " ";
				var treffer = true;
			}
		b.value = "";
		}

		// elimina el campo de adivinanza y lo reemplaza con el nuevo
		var ratefeld = document.getElementById("ratefeld");
		ratefeld.innerHTML="";
		printRatewort();

		// si una letra adivinada no está en la palabra, la carta se colocará en la lista de "letras incorrectas" y el verdugo crecerá
		if(!treffer){
			var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
			var buchstabe = document.createTextNode(" " + zeichen);
			gerateneBuchstaben.appendChild(buchstabe);
			fehler++;
			var hangman = document.getElementById("hangman");
		hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
		}

		// comprueba si se han encontrado todas las letras
		var fertig = true;
		for (var i = 0; i < ratewort.length; i++){
			if(ratewort[i] === "_ "){
				fertig = false;
			}
		}
		if(fertig){
			window.alert("has ganado");
		}

		// una vez que tienes seis letras equivocadas, pierdes
		if(fehler === 6){
			window.alert("Ups... ahora estas muerto");
		}
	}

	function init(){
		printRatewort();
	}

	window.onload = init;