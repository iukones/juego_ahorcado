'use strict'

    function removeTransition(e) {
        console.log(e);
        if (e.pressKey !== 'transform') return;
        e.target.classList.remove('push');

    }

    document.addEventListener('keydown', function (e) {
        // console.log(e.key);
        var pressKey = document.querySelector('li[data-key = "'+ e.key +'"]');
        // console.log('li[data-key = "' + e.key +'"]');    
        pressKey.classList.add('push');
    });


    var letra;
    var espacios;
    var errores = 0;
    var total="";
    var palabra;
    var palabras;

    var abecedario = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];

    var teclas = document.getElementById('buttons');
    var letras = document.createElement('ul');

// crear teclado con abecedario
    function teclado() {
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

    function mostrar(){
        var n;
        n = Math.floor(Math.random() * 5);
        espacios = palabras[n].length;
        palabra = palabras[n];
        document.write('La palabra tiene ' + espacios + ' letras <br />');
    }

    function validar(e) {
        var t;    
        t = (document.all) ? e.keyCode : e.which;
        document.f1.letra.value = '';
        letra = String.fromCharCode(t);
        var verificado = 0;

        for (var i = 0; i < espacios; i++) {
            verificado++;
            if (palabra[i].indexOf(letra) > -1) {
                document.getElementById(i).innerHTML = letra;
                total = total + letra;
                if(total.length == espacios) {
                    alert("Listo ha ganado pero ha tenido " + errores + " errores");
                    reset();
                }
                if(errores!=0) {
                    errores = errores -1;
                }
            }
            else {
                if (verificado == 1) {
                    errores++;
                }
                document.getElementById('errores').innerHTML='Errores: ' + errores;
            }
        }

    }

    function reset(){
        var errores = 0;
        var total = "";
        document.getElementById('errores').innerHTML = 'Errores: 0';
        // location.reload();
    }


    palabras = new Array(5);
    palabras[0]='salmon';
    palabras[1]='trucha';
    palabras[2]='bagre';
    palabras[3]='camaron';
    palabras[4]='cangrejo';

    teclado();
    mostrar();