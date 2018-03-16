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
    console.log(e.keyCode);
});

function ahorcado() {

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

    var teclado = function () {
        teclas = document.getElementById('buttons');
        letras = document.createElement('ul');

        for (let i = 0; i < abecedario.length; i++) {
            const letras = abecedario[i];
            
        }
        
    }


}

