var ruedas = 3;
var figuras = ['herradura', 'campana', 'trebol', 'estrella', 'diamante',
    'cereza', 'siete', 'corona', 'sandia', 'fresa'
];
var estadoRuedas = [];

var monedas = 20;
document.getElementById("monedas").innerHTML = `${monedas}`;

function tirar() {
    if (monedas >= 1) {
        document.getElementById("monedas").innerHTML = `${--monedas}`;
        for (var i = 1; i <= ruedas; i++) {
            tirarRueda(i);
        }
        comprobar();
    } else {
        alert("no te quedan monedas");
    }
}

function tirarRueda(i) {
    let r1 = Math.floor(Math.random() * figuras.length);
    document.getElementById(`rueda${i}`).innerHTML = `<img src="img/${figuras[r1]}.png" alt="${figuras[r1]}">`;
    estadoRuedas[i - 1] = figuras[r1];
}

function comprobar() {
    if (estadoRuedas[0] === estadoRuedas[1] && estadoRuedas[1] === estadoRuedas[2]) {
        alert("Premio");
        monedas = monedas + 10;
    }
}
