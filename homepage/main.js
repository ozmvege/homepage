function toggleThemeMenu() {
	let themeMenu = document.querySelector('#theme-menu');
  
	if (!themeMenu) return;
  
	// Retrieve the selected theme from local storage, if available
	const selectedTheme = localStorage.getItem('selectedTheme');
  
	// If a theme was previously selected, apply it
	if (selectedTheme) {
	  document.documentElement.setAttribute('data-bs-theme', selectedTheme);
	}
  
	document.querySelectorAll('[data-bs-theme-value]').forEach(value => {
	  value.addEventListener('click', () => {
		const theme = value.getAttribute('data-bs-theme-value');
		document.documentElement.setAttribute('data-bs-theme', theme);
		
		// Store the selected theme in local storage
		localStorage.setItem('selectedTheme', theme);
	  });
	});
  }
  
  toggleThemeMenu();
  

var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}


	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}

