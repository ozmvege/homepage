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

var numP = 100; // Increase the number of particles

for (var i = 1; i < numP; i++) {
  var _p = document.getElementById('p0').cloneNode(false);
  _p.id = "p" + i;
  document.getElementById('particles').appendChild(_p);
  gsap.set(_p, { scale: 0.1 + 1.0 * Math.random(), alpha: 0.25 + Math.random(), x: window.innerWidth * Math.random(), y: window.innerHeight * Math.random() });
}

var mouseX = 0;
var mouseY = 0;

var isMouseMoving = false; // Add a flag to track mouse movement


function handleMouseMove(e) {
  mouseX = e.clientX || e.touches[0].clientX; // Use touch coordinates for mobile
  mouseY = e.clientY || e.touches[0].clientY;
  isMouseMoving = true; // Set the flag to true when there's movement
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('touchmove', handleMouseMove);

function animateParticles() {
  if (!isMouseMoving) {
	return; // Don't animate if the mouse is not moving
  }

  for (var ii = 1; ii < numP; ii++) {
	gsap.to('#p' + ii, 0.5, { 
	  delay: 0.005 * ii, 
	  x: mouseX + 25 - 50 * Math.random(), 
	  y: mouseY + 25 - 50 * Math.random(), 
	  ease: Back.easeOut.config(3)
	});
	gsap.to('#p' + ii, 0.005 * ii, { scale: 1 }); // Adjust the scale for smaller particles
	gsap.to('#p' + ii, 0.5, { delay: 0.005 * ii, scale: 0 });
  }

  isMouseMoving = false; // Reset the flag after the animations are applied
}

gsap.ticker.add(animateParticles);

