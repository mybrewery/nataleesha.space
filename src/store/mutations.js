import _ from "Helpers";

var mutations = {
	root ( state, root ){
		state.$root = root;
	},
	device ( state, isDesktop ) {
		state.device = isDesktop ? "desktop" : "mobile"
	},
	/*l18n*/
	language ( state, language){
		state.language = language;
	},	
	currentPage ( state, pageName ) {
		state.currentPage = pageName
	}
};

export default mutations;