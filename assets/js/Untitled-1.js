
let alphabet = [];
for (let index = 97; index <= 122; index++) {
  alphabet.push(String.fromCharCode(index));
}

var categories;         // Matriz de temas
var chosenCategory;     // Categoría seleccionada
var getHint;          // Palabra obtener pista
var word;              // Palabra seleccionada
var guess;             // adivinar
var guesses = [];      // Conjeturas almacenadas
var lives;             // Vidas
var counter;           // Contar aciertos
var space;              // Número de espacios en la palabra '-'

// pintamos elementos html
var showLives = document.getElementById("mylives");
// console.log(showLives);
var getHint = document.getElementById("hint");
// console.log(getHint);
var showClue = document.getElementById("clue");
// console.log(showClue);

window.onload = function () {

  // creamos dinamicamente los botones del telcado ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    // console.log(myButtons);
    letters = document.createElement('ul');
    // console.log(letters);

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      // console.log(letters.id);
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  // creamos adivinanzas en los ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess score');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // pintamos el numero de vidas u oportunidades lives
   comments = function () {
    showLives.innerHTML = "Tienes " + lives + " oportunidades";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "Haz ganado!";
      }
    }
  }


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        // castores();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    categories = [
        ["cortezas", "ramas", "nueces-indias", "troncos", "arboles", "hojas", "ramitas"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    // selectCat();
    // canvas();
  }
  play();

  // Pista
   hint.onclick = function () {

      hints = [
        ["Recubrimiento", "pequeñas extensiones", "semillas muy ricas", "base gruesa que nace de la tierra", "lo que mas cortan de un bosque", "caen al piso en otoño", "pequeñas extensiones secas"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Pista: - " +  hints [catagoryIndex][hintIndex];
  };


   // Reset
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      play();
  }
}


