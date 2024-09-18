// #region ***  DOM references                           ***********
// #endregion

// #region ***  Callback-Visualisation - show___         ***********
const showWorkItems = function (arrWorkItems) {
	try {
		console.log("Werk items worden weergegeven");
		console.log(arrWorkItems);

		let htmlString = ""; // Zorg dat de string leeg begint

		// Eerste 4 items weergeven
		for (const WorkItem of arrWorkItems) {
			console.log(WorkItem);

			// Voeg elke keer een nieuwe card toe aan de htmlString
			htmlString += `
                <div class="col-12 col-lg-4">
                    <div class="card text-bg-dark">
                        <img src="assets/img/work/${WorkItem.url_afbeelding}" class="card-img" alt="${WorkItem.titel}">

                        <div class="card-img-overlay">
                            <h4 class="card-title">${WorkItem.titel}</h4>
                            <p class="card-text">${WorkItem.omschrijving}</p>
                        </div>
                        
                        <a href="detail.html?id=${WorkItem.id}" class="stretched-link"></a>
                    </div>
                </div>
            `;
		}

		// Vul de container met de volledige HTML-string
		document.querySelector(".js-workItems").innerHTML = htmlString;
	} catch (error) {
		showError(error, "showWorkItems");
	}
};
// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********
// #endregion

// #region ***  Data Access - get___                     ***********
const getWork = function () {
	console.log("Werk wordt geladen");

	showWorkItems(arrWorkItems);
};
// #endregion

// #region ***  Event Listeners - listenTo___            ***********
// #endregion

// #region ***  Init / DOMContentLoaded                  ***********
const init = function () {
	getWork();
};

document.addEventListener("DOMContentLoaded", init);
// #endregion
