//constantes
const btn_t1 = document.getElementById('submit1');
const btn_t2 = document.getElementById('submit2');
const btn_t3 = document.getElementById('submit3');
const btn_t4 = document.getElementById('submit4');
const btn_t5 = document.getElementById('submit5');
const btn_t6 = document.getElementById('submit6');
const btn_t7 = document.getElementById('submit6');
const btn_t8 = document.getElementById('submit6');
const btn_t9 = document.getElementById('submit6');
const btn_t10 = document.getElementById('submit6');
const btn_i = document.getElementById('submiti');
const btn_f = document.getElementById('submitf');

const btn = document.getElementById('next');

const array_divs = ["div1", "div2", "divf"]
//, "div3", "div4", "div5",
//  "div6", "div7", "div8", "div9", "div10", "divf"]

const correctas = ["t13","t22"]

//variables
let puntos = 0;
let preguntas = 0;
//funciones
function bien() {
  ++puntos;
  ++preguntas;
};

function mal() {
  ++preguntas;
};

function comprobar() {
  console.log("Respuestas correctas:", puntos, "Preguntas respondidas:", preguntas);
}

function evaluar() {
  puntos == 2 ? aprobado() : suspenso();
};

function visible(div) {
  document.getElementById(div).style.display = "block";
};

function invisible(div) {
  document.getElementById(div).style.display = "none";
};


btn.addEventListener('click', () => {

  function eventos (array) {
    let respuesta = document.getElementById('array').checked;
    (respuesta === true) ? bien() : mal();
    comprobar();
    console.log(correctas[1]);
  };
});


//eventos

btn_t1.addEventListener('click', () => {

  let respuesta = document.getElementById("t13").checked;
  (respuesta === true) ? bien(): mal();
  comprobar();
  visible("div2");
  invisible("div1");

});

btn_t2.addEventListener('click', () => {

  let respuesta = document.getElementById("t22").checked;
  (respuesta === true) ? bien(): mal();
  comprobar();
  evaluar();
  visible("divf");
  invisible("div2");
  audio.play();
});

function suspenso() {
  document.getElementById("divf").innerHTML = `
  <div class="row no-gutters">
    <div class="col-md-4">
      <img class="card-img my-3" src="suspenso.gif" alt="suspenso">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Resultado:</h5>
        <p class="card-text">¡Suspendiste! Respondiste bien ${puntos} preguntas de 10!</p>
        <p class="card-text">Con ese pésimo resultado, estos chicos tendran que ir a buscarte y dedicarte un baile...</p>

        <audio id="audio" controls>
          <source type="audio/wav" src="01.mp3">
        </audio>

      </div>
    </div>
  </div> `;
};


function aprobado() {
  document.getElementById("divf").innerHTML = `
  <div class="row no-gutters">
    <div class="col-md-4">
      <img class="card-img my-3" src="suspenso.gif" alt="suspenso">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Resultado:</h5>
        <p class="card-text">¡Aprobaste! Respondiste bien ${puntos} preguntas de 10!</p>
        <p class="card-text">Poniendo en práctica esos conocimientos, estos señores no tendran que ir a buscarte...</p>
      </div>
    </div>
  </div> `;
};
