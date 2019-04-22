import _ from "./Helpers"

import Vue from "vue"
import StoreCreator from "Store/StoreCreator"
import App from "Components/App.vue"
import packageObj from "../package.json"

class Folio {
	constructor ( params ) {

		let $this = this;

		this.dom = document.createElement( "div");
		this.dom.classList.add( "nata" );

		document.body.appendChild( this.dom )

		let $store = this.$store = new StoreCreator( params )

		window.$locale = function ( localeKey ) {
			return $store.getters.translation[ localeKey ] || ""
		}

		this.$store.commit("setRoot", new Vue({
	      	el:  this.dom,
	      	render: createElement => {
			  	const context = {
			  	  	props: {

			  	  	},
			  	};
	
			  	return createElement(App, context);
			},
	      	store : this.$store,
	      	components: { App },
	      	template: '<App/>'
	    }));



		this.$root = this.$store.state.$root;
	}
}

export default Folio