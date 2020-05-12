//creo constantes con valores que necesitare luego
const btn_coctel = document.getElementById('botonCoctel');
const div_contenedor_coctel = document.getElementById('coctel');

btn_coctel.addEventListener('click', () => {
  div_contenedor_coctel.style.display='inline';
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {crearCoctel(res.drinks[0]);});
});

const crearCoctel = (coctel) => {
	const ingredients = [];
  console.log(coctel);
	for(let i=1; i<=20; i++) {
		if(coctel[`strIngredient${i}`]) {
			ingredients.push(`${coctel[`strIngredient${i}`]} - ${coctel[`strMeasure${i}`]}`)
		} else {
			break;
		}
	}

	const newInnerHTML = `
		<div class="row">
			<div class="col-md-5 divimg">

        <img src="${coctel.strDrinkThumb}" alt="${coctel.strDrink}" class="img-fluid imgcoctel">



			</div>
			<div class="col-md-7">
				<h2 class="">${coctel.strDrink}</h3>
        <hr>

				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
        <hr>
				<p>${coctel.strInstructions}</p>

        ${coctel.strCategory ? `<p><strong>Category:</strong> ${coctel.strCategory}</p>` : ''}
				${coctel.strTags ? `<p><strong>Tags:</strong> ${coctel.strTags.split(',').join(', ')}</p>` : ''}

			</div>
		</div>



	`;

	div_contenedor_coctel.innerHTML = newInnerHTML;
}
