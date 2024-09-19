// #region ***  DOM references                           ***********
let tableBody, createForm, editForm, editModal;
// #endregion

// #region ***  Callback-Visualisation - show___         ***********
const showTable = () => {
	tableBody.innerHTML = "";

	arrWorkItems.forEach((item) => {
		const row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.titel}</td>
                <td>${item.omschrijving}</td>
                <td>${item.client}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="showEditForm(${item.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="callbackDeleteItem(${item.id})">Delete</button>
                </td>
            </tr>
        `;
		tableBody.insertAdjacentHTML("beforeend", row);
	});
};

const showEditForm = (id) => {
	const item = arrWorkItems.find((item) => item.id === id);

	// Vul de velden in het bewerkingsformulier in
	document.getElementById("editId").value = item.id;
	document.getElementById("editTitle").value = item.titel;
	document.getElementById("editDescription").value = item.omschrijving;
	document.getElementById("editClient").value = item.client;
	document.getElementById("editGoal").value = item.goal;
	document.getElementById("editOutcome").value = item.outcome;
	document.getElementById("editChallenge").value = item.challenge;
	document.getElementById("editProcess").value = item.research;
	document.getElementById("editTools").value = item.tools.join(", ");
	document.getElementById("editResults").value = item.results;
	document.getElementById("editSolution").value = item.solution;
	document.getElementById("editWebsite").value = item.url_website;
	document.getElementById("editReflection").value = item.reflection;

	// Open de modal voor het bewerken
	editModal.show();
};
// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********
const callbackAddNewItem = (e) => {
	e.preventDefault();

	// Verkrijg de titel en genereer de URL voor de afbeelding
	const title = document.getElementById("title").value.trim();
	const url_afbeelding =
		title
			.toLowerCase()
			.split(" ")
			.map((word, index) =>
				index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
			)
			.join("") + ".webp";

	const newItem = {
		id: arrWorkItems.length + 1,
		titel: title,
		omschrijving: document.getElementById("description").value,
		client: document.getElementById("client").value,
		goal: document.getElementById("goal").value,
		outcome: document.getElementById("outcome").value,
		challenge: document.getElementById("challenge").value,
		research: document.getElementById("process").value,
		tools: document
			.getElementById("tools")
			.value.split(", ")
			.map((tool) => tool.trim()),
		results: document.getElementById("results").value,
		solution: document.getElementById("solution").value,
		url_website: document.getElementById("website").value,
		reflection: document.getElementById("reflection").value,
		url_afbeelding: url_afbeelding, // Voeg de afbeelding toe
	};

	arrWorkItems.push(newItem);
	showTable();
	createForm.reset();
};

const callbackUpdateItem = (e) => {
	e.preventDefault();
	const id = parseInt(document.getElementById("editId").value);

	// Verkrijg de titel en genereer de URL voor de afbeelding
	const title = document.getElementById("editTitle").value.trim();
	const url_afbeelding =
		title
			.toLowerCase()
			.split(" ")
			.map((word, index) =>
				index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
			)
			.join("") + ".webp";

	const updatedItem = {
		id: id,
		titel: title,
		omschrijving: document.getElementById("editDescription").value,
		client: document.getElementById("editClient").value,
		goal: document.getElementById("editGoal").value,
		outcome: document.getElementById("editOutcome").value,
		challenge: document.getElementById("editChallenge").value,
		research: document.getElementById("editProcess").value,
		tools: document
			.getElementById("editTools")
			.value.split(", ")
			.map((tool) => tool.trim()),
		results: document.getElementById("editResults").value,
		solution: document.getElementById("editSolution").value,
		url_website: document.getElementById("editWebsite").value,
		reflection: document.getElementById("editReflection").value,
		url_afbeelding: url_afbeelding, // Werk de afbeelding bij
	};

	const index = arrWorkItems.findIndex((item) => item.id === id);
	arrWorkItems[index] = updatedItem;

	showTable();
	editModal.hide();
};

const callbackDeleteItem = (id) => {
	arrWorkItems = arrWorkItems.filter((item) => item.id !== id);
	showTable();
};
// #endregion

// #region ***  Event Listeners - listenTo___            ***********
const listenToAddForm = () => {
	createForm.addEventListener("submit", callbackAddNewItem);
};

const listenToEditForm = () => {
	editForm.addEventListener("submit", callbackUpdateItem);
};
// #endregion

// #region ***  Init / DOMContentLoaded                  ***********
const init = function () {
	// DOM references
	tableBody = document.querySelector("#workItemsTable tbody");
	createForm = document.getElementById("createForm");
	editForm = document.getElementById("editForm");
	editModal = new bootstrap.Modal(document.getElementById("editModal"));

	// Event listeners
	listenToAddForm();
	listenToEditForm();

	// Initial render
	showTable();
};

document.addEventListener("DOMContentLoaded", init);
// #endregion
