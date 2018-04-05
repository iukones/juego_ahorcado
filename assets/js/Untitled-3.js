	'use strict';
	var word = ['H','O','L','A','O'];

	// Maneja el teclado de botones (En pantalla)
	function compareLetter(letter) {
	var selectedLetter = letter.value;
	playLetter(selectedLetter);
	}
	// Escuchar para que se pueda utilizar el teclado
	document.addEventListener('keydown', function getKeyLetter(event) {
	var keyLetter = event.key;
	var selectedLetter = keyLetter.toUpperCase();
	playLetter(selectedLetter);
	});

	// Toma la letra seleccionada y la compara con las letras de la palabra para decidir si fue una jugada correcta o un error
	function playLetter(selectedLetter) {
	var isMistake = true;
	for (var i = 0; i < word.length; i++) {
		if (selectedLetter == word[i]) {
		alert('le atinaste a la letra ' + i);
		isMistake = false;
		showLetter(i, selectedLetter);
		}
	}
	if (isMistake == true) {
		alert('Ahora si estas mal')
	}
	}

	// Inicia el juego y pinta la palabra para que el jugador sepa de cuantas letras es
	function startGame() {
	var showWord = document.querySelector('.show-word');
	for(var i = 0; i < word.length; i++){
		var space = document.createElement('span');
		space.classList.add('letter-box');
		var hiddenLetter = document.createTextNode('_');
		space.appendChild(hiddenLetter);
		showWord.appendChild(space);
	}
	}

	// Pinta la letra correcta en la pocisión correspondiente cuando hay un acierto
	function showLetter(position, selectedLetter) {
	var letterBox = document.getElementsByClassName('letter-box');
	letterBox[position].innerHTML = selectedLetter
	}