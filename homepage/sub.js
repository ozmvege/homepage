function toggleThemeMenu() {
	let themeMenu = document.querySelector('.bd-mode-toggle');

	if (!themeMenu) return;

	// Check local storage for the selected theme and apply it
	const selectedTheme = localStorage.getItem('selectedTheme');
	if (selectedTheme) {
	  const container = document.querySelector('.wrapcontent');
	  container.setAttribute('data-bs-theme', selectedTheme);

	  const themeIcons = {
		light: 'sun-fill',
		dark: 'moon-stars-fill',
		auto: 'circle-half'
	  };

	  const themeToggle = document.querySelector('.theme-icon-active use');
	  themeToggle.setAttribute('href', `#${themeIcons[selectedTheme]}`);
	  
	  // Remove the active class from all theme buttons
	  document.querySelectorAll('[data-bs-theme-value]').forEach(value => {
		value.classList.remove('active');
	  });

	  // Add the active class to the selected theme button
	  const activeThemeButton = document.querySelector(`[data-bs-theme-value="${selectedTheme}"]`);
	  if (activeThemeButton) {
		activeThemeButton.classList.add('active');
	  }
	}

	document.querySelectorAll('[data-bs-theme-value]').forEach(value => {
	  value.addEventListener('click', () => {
		const theme = value.getAttribute('data-bs-theme-value');
		const container = document.querySelector('.wrapcontent');
		container.setAttribute('data-bs-theme', theme);

		// Update the theme icon in the dropdown
		const themeToggle = document.querySelector('.theme-icon-active use');
		const themeIcons = {
		  light: 'sun-fill',
		  dark: 'moon-stars-fill',
		  auto: 'circle-half'
		};
		themeToggle.setAttribute('href', `#${themeIcons[theme]}`);

		// Remove the active class from all theme buttons
		document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
		  button.classList.remove('active');
		});

		// Add the active class to the clicked theme button
		value.classList.add('active');

		localStorage.setItem('selectedTheme', theme);
	  });
	});
  }

  toggleThemeMenu();


// Create global variable which contains current focused user input box
var uiCurrent;
var uiNext;
var uiNames = [];


//Function for every Key Press to update uiCurrent and uiNext variables
function uiInput(currentinput) {
	uiCurrent = currentinput.name;
	uiCurrentIndex = uiNames.indexOf(uiCurrent);

	if (uiCurrentIndex == (uiNames.length - 1)) {
	// last uiBox reached, loop to first
	uiNext = uiNames[0];
	} else {
	// else, set uiNext to next element in uiNames
	uiNext = uiNames[uiCurrentIndex + 1];
	}
}

// Function to jump to next box on . or / keys
function jumpdot(event) {
	// Capture pressed key:
	var y = event.key;

	if (y == "." || y == "/") {
	// . or / was pressed, jump to next userinput box and prevent typing of . or /
	event.preventDefault();
	document.getElementsByName(uiNext)[0].focus();
	}
}

function doEnterAction() {
	// Disable form submission and auto-clear
	event.preventDefault();

	// Perform Check_all or Show_all based on checkbox
	if (document.getElementById('eaShow').checked) {
	document.forms[1].elements.show_all.click()
	} else if (document.getElementById('eaCheck').checked) {
	document.forms[1].elements.check_all.click()
	}
}

//Define variables
var octet = new Array();
/*This array will hold the IP
address octets as follows
	octet[0]         = subnet mask
	octet[1]  - [4]  = problem address
	octet[5]  - [7]  = network address octets 2-4
	octet[8]  - [10] = first host address octets 2-4
	octet[11] - [13] = last host address octets 2-4
	octet[14] - [16] = broadcast address octets 2-4
	octet[17] - [19] = next subnet octets 2-4 */

var i = 0; //generic counter integers
var j = 0;

//Start a new problem
function ClearForm(form) {
	//wipe out all data in octetArray
	for (i = 0; i < 20; i++) {
	octet[i] = 0;
	} //clear all data currently in the html form

	form.networkOctet1.value = "";
	form.networkOctet2.value = "";
	form.networkOctet3.value = "";
	form.networkOctet4.value = "";
	form.firstHostOctet1.value = "";
	form.firstHostOctet2.value = "";
	form.firstHostOctet3.value = "";
	form.firstHostOctet4.value = "";
	form.lastHostOctet1.value = "";
	form.lastHostOctet2.value = "";
	form.lastHostOctet3.value = "";
	form.lastHostOctet4.value = "";
	form.broadcastOctet1.value = "";
	form.broadcastOctet2.value = "";
	form.broadcastOctet3.value = "";
	form.broadcastOctet4.value = "";
	form.networkAnswer1.value = "";
	form.networkAnswer2.value = "";
	form.networkAnswer3.value = "";
	form.networkAnswer4.value = "";
	form.firstHostAnswer1.value = "";
	form.firstHostAnswer2.value = "";
	form.firstHostAnswer3.value = "";
	form.firstHostAnswer4.value = "";
	form.lastHostAnswer1.value = "";
	form.lastHostAnswer2.value = "";
	form.lastHostAnswer3.value = "";
	form.lastHostAnswer4.value = "";
	form.broadcastAnswer1.value = "";
	form.broadcastAnswer2.value = "";
	form.broadcastAnswer3.value = "";
	form.broadcastAnswer4.value = "";
	form.nextsubnetAnswer1.value = "";
	form.nextsubnetAnswer2.value = "";
	form.nextsubnetAnswer3.value = "";
	form.nextsubnetAnswer4.value = "";
	form.networkOK.value = "";
	form.firstHostOK.value = "";
	form.lastHostOK.value = "";
	form.broadcastOK.value = "";
	form.nextsubnetOK.value = "";
	form.nextsubnetOctet1.value = "";
	form.nextsubnetOctet2.value = "";
	form.nextsubnetOctet3.value = "";
	form.nextsubnetOctet4.value = "";

	//create a new IP address problem

	i = Math.floor(Math.random() * 3); //random number between 0 and 2 - select class
	if (i == 0) { //class A network
	octet[0] = 8 + Math.floor(Math.random() * 22); //subnet mask
	octet[1] = 1 + Math.floor(Math.random() * 126); //first Octet
	}
	if (i == 1) { //class B network
	octet[0] = 16 + Math.floor(Math.random() * 14); //subnet mask
	octet[1] = 128 + Math.floor(Math.random() * 63); //first Octet
	}
	if (i == 2) { //class C network
	octet[0] = 24 + Math.floor(Math.random() * 6); //subnet mask
	octet[1] = 192 + Math.floor(Math.random() * 31); //first Octet
	}
	octet[2] = Math.floor(Math.random() * 255);
	octet[3] = Math.floor(Math.random() * 255);
	octet[4] = Math.floor(Math.random() * 255);

	//display the problem

	form.givenMask.value = octet[0];
	form.givenOctet1.value = octet[1];
	form.givenOctet2.value = octet[2];
	form.givenOctet3.value = octet[3];
	form.givenOctet4.value = octet[4];
	//fill the octet array with the correct values
	CalculateOctets();
	form.elements["networkOctet1"].focus();
}
//Display selected addresses
function Show(form, x) {
	GetProblem(form);
	var hold = 0;
	var tex = x;
	var xloop = 1;
	if (tex == 6) {
	tex = 0;
	hold = 1;
	form.elements["new_problem"].focus();
	}
	while (xloop == 1) {
	if (hold == 1) {
		tex++;
	} else {
		xloop = 0;
	}
	switch (tex) {
		case (1):
		form.networkAnswer1.value = octet[20];
		form.networkAnswer2.value = octet[5];
		form.networkAnswer3.value = octet[6];
		form.networkAnswer4.value = octet[7];
		break;
		case (2):
		form.firstHostAnswer1.value = octet[21];
		form.firstHostAnswer2.value = octet[8];
		form.firstHostAnswer3.value = octet[9];
		form.firstHostAnswer4.value = octet[10];
		break;
		case (3):
		form.lastHostAnswer1.value = octet[22];
		form.lastHostAnswer2.value = octet[11];
		form.lastHostAnswer3.value = octet[12];
		form.lastHostAnswer4.value = octet[13];
		break;
		case (4):
		form.broadcastAnswer1.value = octet[23];
		form.broadcastAnswer2.value = octet[14];
		form.broadcastAnswer3.value = octet[15];
		form.broadcastAnswer4.value = octet[16];
		break;
		case (5):
		form.nextsubnetAnswer1.value = octet[24];
		form.nextsubnetAnswer2.value = octet[17];
		form.nextsubnetAnswer3.value = octet[18];
		form.nextsubnetAnswer4.value = octet[19];
		break;
		default:
		hold = 0;
	}
	}
}
//Check answer input
function Check(form, x) {
	GetProblem(form);
	var hold = 0;
	var tex = x;
	var xloop = 1;
	if (tex == 6) {
	tex = 0;
	hold = 1;
	form.elements["show_all"].focus();
	}
	while (xloop == 1) {
	if (hold == 1) {
		tex++;
	} else {
		xloop = 0;
	}
	switch (tex) {
		case (1):
		if ((form.networkOctet1.value == octet[20]) &&
			(form.networkOctet2.value == octet[5]) &&
			(form.networkOctet3.value == octet[6]) &&
			(form.networkOctet4.value == octet[7])) {
			form.networkOK.value = "YES";
		} else {
			form.networkOK.value = "NO";
		}
		break;
		case (2):
		if ((form.firstHostOctet1.value == octet[21]) &&
			(form.firstHostOctet2.value == octet[8]) &&
			(form.firstHostOctet3.value == octet[9]) &&
			(form.firstHostOctet4.value == octet[10])) {
			form.firstHostOK.value = "YES";
		} else {
			form.firstHostOK.value = "NO";
		}
		break;
		case (3):
		if ((form.lastHostOctet1.value == octet[22]) &&
			(form.lastHostOctet2.value == octet[11]) &&
			(form.lastHostOctet3.value == octet[12]) &&
			(form.lastHostOctet4.value == octet[13])) {
			form.lastHostOK.value = "YES";
		} else {
			form.lastHostOK.value = "NO";
		}
		break;
		case (4):
		if ((form.broadcastOctet1.value == octet[23]) &&
			(form.broadcastOctet2.value == octet[14]) &&
			(form.broadcastOctet3.value == octet[15]) &&
			(form.broadcastOctet4.value == octet[16])) {
			form.broadcastOK.value = "YES";
		} else {
			form.broadcastOK.value = "NO";
		}
		break;
		case (5):
		if ((form.nextsubnetOctet1.value == octet[24]) &&
			(form.nextsubnetOctet2.value == octet[17]) &&
			(form.nextsubnetOctet3.value == octet[18]) &&
			(form.nextsubnetOctet4.value == octet[19])) {
			form.nextsubnetOK.value = "YES";
		} else {
			form.nextsubnetOK.value = "NO";
		}
		break;
		default:
		hold = 0;
	}
	}
}


//Check to see if user added their own problem
function GetProblem(form) {
	octet[0] = parseInt(form.givenMask.value);
	octet[1] = parseInt(form.givenOctet1.value);
	octet[2] = parseInt(form.givenOctet2.value);
	octet[3] = parseInt(form.givenOctet3.value);
	octet[4] = parseInt(form.givenOctet4.value);
	CalculateOctets();
}

//Calculate all octets
function CalculateOctets() {
	j = 1;
	i = octet[0] % 8;
	for (i = 8 - octet[0] % 8; i > 0; i--) //couldn't find javascript exponential operator
	{
	j = j * 2;
	}
	if (octet[0] < 16) { //working in first or second octet
	if (octet[0] < 8) { //working in first octect
		octet[21] = octet[20] = Math.floor(octet[1] / j) * j;
		octet[10] = 1;
		octet[11] = octet[14] = octet[5] + j - 1;
		octet[23] = octet[22] = octet[21] + j - 1;
		octet[12] = octet[15] = octet[16] = 255;
		octet[11] = octet[14] = octet[17] = 255;
		octet[13] = 254;
		octet[18] = octet[15];
		octet[24] = octet[23];
		octet[6] = 0;
		octet[9] = 0;
		octet[5] = 0;
		octet[8] = 0;
		octet[7] = 0;
		octet[19] = octet[16];
		if (octet[19] > 254) {
		octet[19] = 0;
		octet[18] = octet[18] + 1;
		}
		if (octet[18] > 254) {
		octet[18] = 0;
		octet[17] = octet[17] + 1;
		}
		if (octet[17] > 254) {
		octet[17] = 0;
		if ((octet[23] + 1) > 255) {
			octet[24] = 255;
		} else {
			octet[24] = (octet[23] + 1);
		}
		}
		if ((octet[23] == 255) && (octet[14] == 255) && (octet[15] == 255) && (octet[16] == 255)) { //End of IP range
		octet[24] = 255;
		octet[17] = 255;
		octet[18] = 255;
		octet[19] = 255;
		}
	} else { //working in second octet
		octet[5] = octet[8] = Math.floor(octet[2] / j) * j;
		octet[10] = 1;
		octet[11] = octet[14] = octet[5] + j - 1;
		octet[12] = octet[15] = octet[16] = 255;
		octet[20] = octet[1];
		octet[13] = 254;
		octet[20] = octet[1];
		octet[21] = octet[1];
		octet[22] = octet[1];
		octet[23] = octet[1];
		octet[24] = octet[1];
		octet[18] = octet[19] = 0;
		octet[6] = octet[9] = 0;
		octet[7] = 0;
		octet[17] = octet[14] + 1;
		if (octet[17] > 255) {
		octet[17] = 0;
		octet[24] = (octet[23] + 1);
		}
	}
	} else {
	if (octet[0] < 24) { //working in third octet
		octet[5] = octet[8] = octet[11] = octet[14] = octet[2];
		octet[6] = octet[9] = Math.floor(octet[3] / j) * j;
		octet[12] = octet[15] = octet[6] + j - 1;
		octet[7] = 0;
		octet[20] = octet[1];
		octet[10] = 1;
		octet[13] = 254;
		octet[16] = 255;
		octet[20] = octet[1];
		octet[21] = octet[1];
		octet[22] = octet[1];
		octet[23] = octet[1];
		octet[24] = octet[1];
		octet[19] = 0;
		octet[18] = octet[15] + 1;
		octet[17] = octet[14];
		if (octet[18] > 255) {
		octet[18] = 0;
		octet[17] = octet[17] + 1;
		}
		if (octet[17] > 255) {
		octet[17] = 0;
		octet[24] = octet[23] + 1;
		}
	} else { //working in fourth octet
		octet[5] = octet[8] = octet[11] = octet[14] = octet[2];
		octet[6] = octet[9] = octet[12] = octet[15] = octet[3];
		octet[7] = Math.floor(octet[4] / j) * j;
		octet[10] = octet[7] + 1;
		octet[16] = octet[7] + j - 1;
		octet[13] = octet[16] - 1;
		octet[19] = octet[16] + 1;
		octet[20] = octet[1];
		octet[21] = octet[1];
		octet[22] = octet[1];
		octet[23] = octet[1];
		octet[24] = octet[1];
		octet[18] = octet[15];
		octet[17] = octet[14];
		if (octet[19] > 255) {
		octet[19] = 0;
		octet[18] = octet[18] + 1;
		}
		if (octet[18] > 255) {
		octet[18] = 0;
		octet[17] = octet[17] + 1;
		}
		if (octet[17] > 255) {
		octet[17] = 0;
		octet[24] = octet[23] + 1;
		}
	}
	}
}


// These tasks must be done after all HTML loads

// Create array of all userinput boxes:
var uiBoxes = document.querySelectorAll('.userinput');

// Create an array of all the "name" fields of userinput Boxes:
for (i = 0; i < uiBoxes.length; i++) {
	uiNames.push(uiBoxes[i].name);

//Add OnFocus and OnKeyDown function to each .userinput element:
	uiBoxes[i].setAttribute('onfocus', "uiInput(this)");
	uiBoxes[i].setAttribute('onkeydown', "jumpdot(event)");
}
// When Page is loaded, generate a new problem to start:
document.forms[1].elements.new_problem.click();

