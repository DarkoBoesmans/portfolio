// #region ***  DOM references                           ***********
"use strict";
// #endregion

// #region ***  Callback-Visualisation - show___         ***********

// Functie om CaseStudydetails weer te geven
const showCaseStudy = function (caseStudy) {
	try {
		if (!caseStudy) {
			console.error("CaseStudyinformatie is onvolledig of ontbreekt.");
			return;
		}

		// Set the document title to include the case study title
		document.title = "Darko Boesmans | " + caseStudy.titel;

		// Set background image for the case study section
		document.querySelector(
			".js-csAfbeelding"
		).style.backgroundImage = `url('../assets/img/work/${caseStudy.url_afbeelding}')`;

		// Set the case study title
		document.querySelector(".js-csTitle").innerText = caseStudy.titel;

		// Populate other fields with case study details and trim the text
		document.querySelector(".js-csClient").innerText = caseStudy.client.trim();
		document.querySelector(".js-csGoal").innerText = caseStudy.goal.trim();
		document.querySelector(".js-csOutcome").innerText =
			caseStudy.outcome.trim();
		document.querySelector(".js-csChallenge").innerText =
			caseStudy.challenge.trim();
		document.querySelector(".js-csSolution").innerText =
			caseStudy.solution.trim();
		document.querySelector(".js-csResults").innerText =
			caseStudy.results.trim();
		document.querySelector(".js-csReflection").innerText =
			caseStudy.reflection.trim();
		document.querySelector(".js-csResearch").innerText =
			caseStudy.research.trim();

		// Populate the tools array as an unordered list
		const toolsList = document.querySelector(".js-csTools");
		toolsList.innerHTML = ""; // Clear any existing list items
		caseStudy.tools.forEach((tool) => {
			const listItem = document.createElement("li");
			listItem.innerText = tool;
			toolsList.appendChild(listItem);
		});

		// Set the href attribute of the live website link
		const caseStudyLink = document.querySelector(".js-csLink");
		caseStudyLink.setAttribute("href", caseStudy.url_website);
		caseStudyLink.innerText = "Check out the live website"; // Ensure the link text stays as this
	} catch (error) {
		showError(error, "showCaseStudy");
	}
};
// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********

// #endregion

// #region ***  Data Access - get___                     ***********
const getCaseStudyFromId = function (arrWorkItems) {
	console.log(
		"CaseStudy wordt opgehaald aan de hand van de querystring-parameter 'id'."
	);
	const id = getQueryStringValue("id");
	console.log(`ID gevonden in querystring: ${id}`);
	const caseStudy = arrWorkItems.find(function (item) {
		return item.id == id;
	});
	console.log("Dit is de huidige caseStudy:", caseStudy);

	// Controleer of caseStudy gevonden is, zo niet, stuur de gebruiker terug naar de indexpagina
	if (!caseStudy) {
		console.log("CaseStudy niet gevonden. Terugsturen naar de indexpagina...");
		window.location.href = "index.html"; // Redirect naar de indexpagina
		return;
	}

	// Roep de functie aan om de caseStudy weer te geven
	showCaseStudy(caseStudy);
};

// Functie om caseStudyen op te halen
const getCaseStudyen = function () {
	console.log("CaseStudy wordt geladen");
	getCaseStudyFromId(arrWorkItems);
};
// #endregion

// #region ***  Event Listeners - listenTo___            ***********

// #endregion

// #region ***  Init / DOMContentLoaded                  ***********
// Initialisatiefunctie
const init = function () {
	console.log("Initialiseren...");
	getCaseStudyen();
};

// Wacht tot het DOM geladen is voordat het initialisatieproces begint
document.addEventListener("DOMContentLoaded", init);
// #endregion
