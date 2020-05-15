const btn_coctel = document.getElementById('botonCoctel');
const div_contenedor_coctel = document.getElementById('coctel');
const random_coctel_url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

btn_coctel.addEventListener('click', () => {
  fetch(random_coctel_url)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        crearCoctel(respuesta.drinks[0]);
    })

    .catch(error => {
    console.warn(error);
  });

};
