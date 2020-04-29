
window.onload=inicio;

var rueda1=[1,2,3,4,5,6,7,8,9,10];
var rueda2=[1,2,3,4,5,6,7,8,9,10];
var rueda3=[1,2,3,4,5,6,7,8,9,10];

var aleatorioRueda1=rueda1.length;
var aleatorioRueda2=rueda2.length;
var aleatorioRueda3=rueda3.length;
var monedas = 20;
document.getElementById("monedas").innerHTML = `${monedas}`;

document.getElementById("rueda1").innerHTML = `<img src="img/herradura.png" alt="herradura">`;
document.getElementById("rueda2").innerHTML = `<img src="img/diamante.png" alt="diamante">`;
document.getElementById("rueda3").innerHTML = `<img src="img/sandia.png" alt="sandia">`;


function inicio() {
  document.getElementById("palanca").onclick = tirar;
}
function tirar() {
  if (monedas >=1) {
  --monedas;
  tirar1();
  tirar2();
  tirar3();
  comprobar();
  }
  else {
    alert("no te quedan monedas");
  }
}

function tirar1() {
  document.getElementById("monedas").innerHTML = `${monedas}`;
  r1=Math.floor(Math.random()*aleatorioRueda1);
  imgRueda1();
  }
function tirar2() {
  r2=Math.floor(Math.random()*aleatorioRueda2);
  imgRueda2();
  }
function tirar3() {
  r3=Math.floor(Math.random()*aleatorioRueda3);
  imgRueda3();
  }


function imgRueda1() {

  if (r1 == 0) {
    document.getElementById("rueda1").innerHTML = `<img src="img/herradura.png" alt="Herradura">`;
  }
    else if (r1 == 1) {
      document.getElementById("rueda1").innerHTML = `<img src="img/campana.png" alt="campana">`;
    }
    else if (r1 == 2) {
      document.getElementById("rueda1").innerHTML = `<img src="img/trebol.png" alt="trebol">`;
    }
    else if (r1 == 3) {
      document.getElementById("rueda1").innerHTML = `<img src="img/estrella.png" alt="estrella">`;
    }
    else if (r1 == 4) {
      document.getElementById("rueda1").innerHTML = `<img src="img/diamante.png" alt="diamante">`;
    }
    else if (r1 == 5) {
      document.getElementById("rueda1").innerHTML = `<img src="img/cereza.png" alt="cereza">`;
    }
    else if (r1 == 6) {
      document.getElementById("rueda1").innerHTML = `<img src="img/siete.png" alt="siete">`;
    }
    else if (r1 == 7) {
      document.getElementById("rueda1").innerHTML = `<img src="img/corona.png" alt="corona">`;
    }
    else if (r1 == 8) {
      document.getElementById("rueda1").innerHTML = `<img src="img/sandia.png" alt="sandia">`;
    }
    else if (r1 == 9) {
      document.getElementById("rueda1").innerHTML = `<img src="img/fresa.png" alt="fresa">`;
    }
    else {
      alert("termino1");
    }

}

function imgRueda2() {

  if (r2 == 0) {
    document.getElementById("rueda2").innerHTML = `<img src="img/herradura.png" alt="Herradura">`;
  }
    else if (r2 == 1) {
      document.getElementById("rueda2").innerHTML = `<img src="img/campana.png" alt="campana">`;
    }
    else if (r2 == 2) {
      document.getElementById("rueda2").innerHTML = `<img src="img/trebol.png" alt="trebol">`;
    }
    else if (r2 == 3) {
      document.getElementById("rueda2").innerHTML = `<img src="img/estrella.png" alt="estrella">`;
    }
    else if (r2 == 4) {
      document.getElementById("rueda2").innerHTML = `<img src="img/diamante.png" alt="diamante">`;
    }
    else if (r2 == 5) {
      document.getElementById("rueda2").innerHTML = `<img src="img/cereza.png" alt="cereza">`;
    }
    else if (r2 == 6) {
      document.getElementById("rueda2").innerHTML = `<img src="img/siete.png" alt="siete">`;
    }
    else if (r2 == 7) {
      document.getElementById("rueda2").innerHTML = `<img src="img/corona.png" alt="corona">`;
    }
    else if (r2 == 8) {
      document.getElementById("rueda2").innerHTML = `<img src="img/sandia.png" alt="sandia">`;
    }
    else if (r2 == 9) {
      document.getElementById("rueda2").innerHTML = `<img src="img/fresa.png" alt="fresa">`;
    }
    else {
      alert("termino2");
    }
}

function imgRueda3() {
  if (r3 == 0) {
    document.getElementById("rueda3").innerHTML = `<img src="img/herradura.png" alt="Herradura">`;
  }
    else if (r3 == 1) {
      document.getElementById("rueda3").innerHTML = `<img src="img/campana.png" alt="campana">`;
    }
    else if (r3 == 2) {
      document.getElementById("rueda3").innerHTML = `<img src="img/trebol.png" alt="trebol">`;
    }
    else if (r3 == 3) {
      document.getElementById("rueda3").innerHTML = `<img src="img/estrella.png" alt="estrella">`;
    }
    else if (r3 == 4) {
      document.getElementById("rueda3").innerHTML = `<img src="img/diamante.png" alt="diamante">`;
    }
    else if (r3 == 5) {
      document.getElementById("rueda3").innerHTML = `<img src="img/cereza.png" alt="cereza">`;
    }
    else if (r3 == 6) {
      document.getElementById("rueda3").innerHTML = `<img src="img/siete.png" alt="siete">`;
    }
    else if (r3 == 7) {
      document.getElementById("rueda3").innerHTML = `<img src="img/corona.png" alt="corona">`;
    }
    else if (r3 == 8) {
      document.getElementById("rueda3").innerHTML = `<img src="img/sandia.png" alt="sandia">`;
    }
    else if (r3 == 9) {
      document.getElementById("rueda3").innerHTML = `<img src="img/fresa.png" alt="fresa">`;
    }
    else {
      alert("termino3");
    }
}

function comprobar() {
  if (r1 === r2 && r1===r3 && r2==r3) {
  alert("Premio");
  monedas=monedas+10;
        }
      }
