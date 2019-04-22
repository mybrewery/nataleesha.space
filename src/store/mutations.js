import _ from "Helpers";

var mutations = {
	setRoot ( state, root ){
		state.$root = root;
	},
	/*l18n*/
	setLanguage ( state, language){
		state.language = language;
	},	
};

export default mutations;