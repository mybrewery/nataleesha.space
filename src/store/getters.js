import _ from "Helpers";


var getters = {
	translation ( state ) {
		return state.translations[ state.language ]
	}
};

export default getters;