// ejemplo activar y desactivar foco en botones

// var botton = document.querySelector('button');
// botton.addEventListener('click', function() {
//   if (botton.classList.contains('active')) {
//     botton.classList.remove('active');
//   }else {
//     botton.classList.add('active');
//   }
// })

// ejemplo activar y desactivar foco en botones

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    var pressKey = document.querySelector('li[data-key = "'+ e.key +'"]');
    // console.log('li[data-key = "' + e.key +'"]');
    // var pressKey = document.querySelector('li[data-key = "a"]');
    // var pressKey = document.querySelector('li[data-key = " " a]');
    pressKey.classList.add('push');
});

function ahorcado () {

    var categoria;
    var palabra;
    var adivinaPalabra;
    var guardarAdivinaPalabra = [ ];
    var espaciosPalabra;

    var abecedario = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];

    // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

    // crear teclado con abecedario
function teclado() {
    var teclas = document.getElementById('buttons');
    var letras = document.createElement('ul');

    for (var i = 0; i < abecedario.length; i++) {
        letras.id = 'abecedario';
        var listaLetras = document.createElement('li');
        listaLetras.id = 'letras';
        listaLetras.innerHTML = abecedario[i];
        teclas.appendChild(letras);
        letras.appendChild(listaLetras);
        listaLetras.setAttribute('data-key', abecedario[i]);
        }
    }
    // Crear letras jugador con ul
     function resultado () {
        var letrasJugador = document.getElementById('hold');
        var letrasCorrectas = document.createElement('ul');

        for (var i = 0; i < palabra.length; i++) {
            letrasCorrectas.setAttribute('id', 'my-word');
            adivinaPalabra = document.createElement('li');
            adivinaPalabra.setAttribute('class', 'guess');
            if (palabra[i] === "-") {
                adivinaPalabra.innerHTML = "-";
                espaciosPalabra = 1;
            } else{
                adivinaPalabra.innerHTML = "_";
            }
            guardarAdivinaPalabra.push(adivinaPalabra);
            letrasJugador.appendChild(letrasCorrectas);
            letrasCorrectas.appendChild(adivinaPalabra);
        }
        
    }

    // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

    teclado();
    

}
ahorcado();

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }

// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('push');
//     audio.currentTime = 0;
//     audio.play();
// }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);