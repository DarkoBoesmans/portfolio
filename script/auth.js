// #region ***  DOM references                           ***********
// #endregion

// #region ***  Callback-Visualisation - show___         ***********
const showError = function (error, functie) {
	console.warn("Er is een fout opgetreden in:", functie);
	console.error("Foutmelding:", error);
};
// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********
// #endregion

// #region ***  Data Access - get___                     ***********
const getQueryStringValue = function (key) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	console.log(`Querystring-parameter "${key}" wordt opgehaald.`);
	const value = urlParams.get(key);
	console.log(`Waarde gevonden: ${value}`);
	return value;
};
// #endregion

// #region ***  Event Listeners - listenTo___            ***********
// #endregion

// #region ***  Init / DOMContentLoaded                  ***********
// #endregion
