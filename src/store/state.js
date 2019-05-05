import translations from "store/state/translations"


var state = {
	$root: null,
	/*l18n*/
	language : "ru",
	routes: {
		"main": [ "contacts", "projects" ],
		"projects": [ "main", "contacts" ],
		"contacts": [ "projects", "main" ]
	},
	currentPage: "main",
	translations: translations
};

export default state;