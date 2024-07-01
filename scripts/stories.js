window.addEventListener('load', function () {
	var stories = [
		{
			title: 'Nature Empathy',
			description: 'Un fenómeno de la naturaleza hace que los humanos despertemos siendo seres vivos diferentes para sentir el daño que les hemos hecho a éstos, para que nos haga empatizar tanto con ellos que al volver a ser humanos su vida nos sea tan valiosa como la nuestra'
		},
		{
			title: 'New Beginning',
			description: 'Los humanos tenemos la oportunidad de empezar de cero teniendo en cuenta el daño que le hemos hecho a la naturaleza y el daño que nos hemos hecho entre nosotros para no cometer los mismos errores'
		},
		{
			title: 'Nature Guide',
			description: 'La naturaleza es la que decide si las decisiones y creaciones de los humanos son buenas o no'
		},
		{
			title: 'Kindly Technology',
			description: 'Los humanos solo podemos usar la tecnología para mejorar el mundo'
		},
		{
			title: 'Empathy Currency',
			description: 'Los humanos utilizamos la empatía en lugar del dinero'
		},
		{
			title: 'Culture Peace',
			description: 'Los países comparten su cultura entre sí para que haya paz en el mundo'
		},
		{
			title: 'Religion Peace',
			description: 'Los dioses de las religiones se reúnen para que haya paz entre los creyentes'
		},
		{
			title: 'Dreams Help',
			description: 'Los humanos entramos en los sueños de los demás para ayudarles en su vida'
		},
		{
			title: 'Healing Nature',
			description: 'Los humanos mejoramos nuestra salud al hacer cosas buenas por la naturaleza'
		},
		{
			title: 'Nature Communication',
			description: 'Los humanos nos comunicamos con la naturaleza'
		},
		{
			title: 'Beings Bond',
			description: 'Los humanos convivimos con los animales como iguales'
		},
		{
			title: 'Animals Help',
			description: 'Los animales vienen a ayudarnos cuando los humanos no estamos bien'
		},
		{
			title: 'Animals Intelligence',
			description: 'Los humanos ayudamos a los animales para que tengan nuestra inteligencia'
		},
		{
			title: 'Nature Secrets',
			description: 'Los animales nos cuentan los secretos de la naturaleza'
		},
		{
			title: 'Nature Medicine',
			description: 'Los animales nos dan las medicinas de la naturaleza'
		},
		{
			title: 'Animals Salutes',
			description: 'Los humanos vemos los saludos entre los animales'
		},
		{
			title: 'Beings Party',
			description: 'Los humanos y los animales bailan y hacen música'
		},
		{
			title: 'Animals Sight',
			description: 'Los humanos vemos el mundo a través de la vista de los animales'
		},
		{
			title: 'Natural Purpose',
			description: 'Los humanos ayudamos a la naturaleza y descubrimos nuestro propósito'
		},
		{
			title: 'Leaving Technology',
			description: 'Los humanos abandonan la tecnología y las ciudades llenas de ella'
		},
		{
			title: 'Animals Playground',
			description: 'Los humanos nos hemos extinguido, los animales recuperan la naturaleza, disfrutan de ella y juegan en las ruinas de la civilización'
		},
		{
			title: 'Nature Healing',
			description: 'El resto de seres vivos usan las habilidades que les han servido para sobrevivir para restaurar la naturaleza'
		},
		{
			title: 'Beings Technology',
			description: 'Los seres de la naturaleza utilizan la tecnología para mejorar el mundo'
		},
		{
			title: 'Beings Fusion',
			description: 'Los animales y las plantas se fusionan'
		},
		{
			title: 'Souls Garden',
			description: 'Hay un lugar en el que se reúnen las almas de todos los seres: animales, plantas, humanos y otros seres que no conocemos'
		}],
		currentStory = 0,
		previousStoryButton = document.getElementsByTagName('button')[0],
		nextStoryButton = document.getElementsByTagName('button')[1];

	function showStory() {
		document.getElementsByTagName('h2')[0].textContent = stories[currentStory].title;
		document.getElementsByTagName('p')[0].textContent = stories[currentStory].description;
	}

	showStory();

	previousStoryButton.addEventListener('click', function () {
		if (currentStory === 1) {
			previousStoryButton.setAttribute('disabled', '');
		} else if (currentStory === stories.length - 1) {
			nextStoryButton.removeAttribute('disabled');
		}

		currentStory--;
		showStory();
	});

	nextStoryButton.addEventListener('click', function () {
		if (currentStory < stories.length - 1) {
			currentStory++;
			showStory();

			if (currentStory === 1) {
				previousStoryButton.removeAttribute('disabled');
			} else if (currentStory === stories.length - 1) {
				nextStoryButton.setAttribute('disabled', '');
			}
		}
	});
});