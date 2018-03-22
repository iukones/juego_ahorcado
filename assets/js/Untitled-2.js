'use strict'


var letra;
var espacios;
var errores = 0;
var total="";
var palabra;
var palabras;

function mostrar(){
    var n;
    n=Math.floor(Math.random()*5);
    espacios=palabras[n].length;
    palabra=palabras[n];
    document.write('La palabra tiene ' + espacios + ' letras <br />');
}

function validar(e) {
    var t;
    t = (document.all) ? e.keyCode : e.which;
    document.f1.letra.value='';
    letra=String.fromCharCode(t);
    var verificado = 0;
    for (var i = 0;i < espacios;i++) {
        verificado++;
        if (palabra[i].indexOf(letra) > -1) {
            document.getElementById(i).innerHTML=letra;
            total=total+letra;
            if(total.length==espacios) {
                alert("Listo ha ganado pero ha tenido " + errores + " errores");
                reset();
            }
            if(errores!=0) {
                errores = errores -1;
            }
        }else{
                    if (verificado == 1) {
                        errores++;
                        }
                        document.getElementById('errores').innerHTML='Errores: ' + errores;
                        }
                    }

}

function reset(){
var errores=0;
var total="";
document.getElementById('errores').innerHTML='Errores: 0';
location.reload();
}


palabras=new Array(5);
palabras[0]='linkgl';
palabras[1]='indetectables';
palabras[2]='revolucion';
palabras[3]='cactus';
palabras[4]='polifemo';
mostrar();